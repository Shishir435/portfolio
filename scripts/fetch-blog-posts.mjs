import {
	existsSync,
	mkdirSync,
	readdirSync,
	readFileSync,
	rmSync,
	writeFileSync,
} from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

try {
	const envPath = join(__dirname, '..', '.env');
	if (existsSync(envPath)) {
		const env = readFileSync(envPath, 'utf-8');
		for (const line of env.split('\n')) {
			const trimmed = line.trim();
			if (!trimmed || trimmed.startsWith('#')) continue;
			const idx = trimmed.indexOf('=');
			if (idx === -1) continue;
			const key = trimmed.slice(0, idx).trim();
			const val = trimmed.slice(idx + 1).trim();
			if (!process.env[key]) process.env[key] = val;
		}
	}
} catch {}

const CONTENT_DIR = join(__dirname, '..', 'src', 'content', 'docs', 'blog');

const GITHUB_TOKEN = process.env.GITHUB_ACCESS_TOKEN || '';
const REPO_OWNER = 'Shishir435';
const REPO_NAME = 'obsidianNotes';
const BRANCH = 'main';
const FOLDER_PATH = 'posts';

async function writePinnedRepos() {
	const repos = [];
	const query = `
    query {
      user(login: "${REPO_OWNER}") {
        pinnedItems(first: 3) {
          nodes {
            ... on Repository {
              name
              description
              homepageUrl
              url
              repositoryTopics(first: 10) {
                nodes {
                  topic { name }
                }
              }
            }
          }
        }
      }
    }
  `;

	try {
		const response = await fetch('https://api.github.com/graphql', {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${GITHUB_TOKEN}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ query }),
		});
		if (response.ok) {
			const json = await response.json();
			repos.push(...json.data.user.pinnedItems.nodes);
		}
	} catch (e) {
		console.warn('Failed to fetch pinned repos:', e.message);
	}

	const dataPath = join(__dirname, '..', 'src', 'data', 'pinned-repos.json');
	mkdirSync(dirname(dataPath), { recursive: true });
	writeFileSync(dataPath, JSON.stringify(repos, null, 2), 'utf-8');
	console.log(
		`   Wrote ${repos.length} pinned repos to data/pinned-repos.json`,
	);
}

async function fetchBlogPosts() {
	await writePinnedRepos();
	if (!existsSync(CONTENT_DIR)) {
		mkdirSync(CONTENT_DIR, { recursive: true });
	}

	for (const f of readdirSync(CONTENT_DIR)) {
		if (f.endsWith('.md')) {
			rmSync(join(CONTENT_DIR, f));
		}
	}

	if (!GITHUB_TOKEN) {
		console.warn('GITHUB_ACCESS_TOKEN not set. Skipping blog fetch.');
		return;
	}

	const listingUrl = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FOLDER_PATH}?ref=${BRANCH}`;

	const headers = {
		Authorization: `Bearer ${GITHUB_TOKEN}`,
		Accept: 'application/vnd.github.v3+json',
	};

	const listingResponse = await fetch(listingUrl, { headers });

	if (!listingResponse.ok) {
		console.error(
			`GitHub API error: ${listingResponse.status} ${listingResponse.statusText}`,
		);
		return;
	}

	const files = await listingResponse.json();
	const mdFiles = files.filter((f) => f.name.endsWith('.md'));

	// Fetch last commit date for each file in parallel
	const withDates = await Promise.all(
		mdFiles.map(async (file) => {
			try {
				const url = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/commits?path=${FOLDER_PATH}/${file.name}&per_page=1`;
				const res = await fetch(url, { headers });
				if (res.ok) {
					const commits = await res.json();
					if (commits.length > 0) {
						file.date = commits[0].commit.committer.date;
					}
				}
			} catch {}
			return file;
		}),
	);

	// Sort newest first; files without dates go last
	withDates.sort((a, b) => {
		if (!a.date && !b.date) return 0;
		if (!a.date) return 1;
		if (!b.date) return -1;
		return new Date(b.date).getTime() - new Date(a.date).getTime();
	});

	for (const file of withDates) {
		const contentResponse = await fetch(file.download_url);
		let content = await contentResponse.text();
		const outputPath = join(CONTENT_DIR, file.name);

		const title = file.name
			.replace(/\.md$/, '')
			.replace(/-/g, ' ')
			.replace(/\b\w/g, (c) => c.toUpperCase());

		// Strip existing frontmatter and Obsidian noise
		content = content.replace(/^---[\s\S]*?---\s*\n*/, '');
		content = content.replace(/^\*{3,}\s*\n+/, '');
		content = content.replace(/^\s*\n+/, '');
		content = content.replace(/```bsh\b/g, '```bash');

		// Fix Obsidian-style code blocks: "lang\n\nCopy code\n\n`code`"
		content = content.replace(
			/^(bash|sql|php|json|yaml)\s*\n\s*Copy code\s*\n\s*`([^`]+)`\s*\n*/gm,
			'```$1\n$2\n```\n\n',
		);

		// Remove ChatGPT conversation artifacts
		content = content.replace(/^4o\s*\n*/gm, '');
		content = content.replace(/^#####? You said:.*(?:\n|$)/gm, '');
		content = content.replace(/^######? ChatGPT said:.*(?:\n|$)/gm, '');
		content = content.replace(/^ChatGPT\s*\n*/gm, '');
		content = content.replace(/^Memory updated\s*\n*/gm, '');

		// Convert Obsidian callouts to blockquotes
		content = content.replace(/^>\[!WARNING\]\s*\n(?:>.+\n?)*/gm, (m) => {
			const body = m.replace(/^>\[!WARNING\]\s*\n*/, '').replace(/^> /gm, '');
			return `> **Warning**  \n> ${body.trim()}\n\n`;
		});
		content = content.replace(/^>\[!NOTE\]\s*\n(?:>.+\n?)*/gm, (m) => {
			const body = m.replace(/^>\[!NOTE\]\s*\n*/, '').replace(/^> /gm, '');
			return `> **Note**  \n> ${body.trim()}\n\n`;
		});

		// Wrap stray script content (starts with #!/bin/bash outside a code block)
		if (
			content.includes('#!/bin/bash') &&
			!content.includes('```bash\n#!/bin/bash')
		) {
			content = content.replace(
				/^(#![/]bin\/bash[\s\S]*?)(?:```)?\s*$/m,
				'```bash\n$1\n```',
			);
		}

		// Remove unopened closing code fences
		content = content.replace(/^```\s*$/gm, '');

		// Remove trailing horizontal rules (---) that are formatting artifacts
		content = content.replace(/\n---\s*\n*$/, '');

		// Fix unbalanced code fences — close any unclosed fences before headings or EOF
		const lines = content.split('\n');
		let fenceOpen = false;
		for (let i = 0; i < lines.length; i++) {
			if (/^```/.test(lines[i])) {
				fenceOpen = !fenceOpen;
			} else if (fenceOpen && /^#{1,3}\s/.test(lines[i])) {
				lines.splice(i, 0, '```');
				lines.splice(i, 0, '');
				fenceOpen = false;
				i += 2;
			}
		}
		if (fenceOpen) {
			lines.push('');
			lines.push('```');
		}
		content = lines.join('\n');

		const order = file.date ? -new Date(file.date).getTime() : 0;
		content = `---\ntitle: ${title}\nsidebar:\n  order: ${order}\n---\n\n${content}`;

		writeFileSync(outputPath, content, 'utf-8');
		console.log(`   Fetched: ${file.name} (${file.date || 'no date'})`);
	}

	console.log(`\nDone. Fetched ${withDates.length} blog post(s).`);
}

fetchBlogPosts().catch(console.error);
