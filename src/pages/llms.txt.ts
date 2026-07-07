import { existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import type { APIRoute } from 'astro';

function getBlogPostSlugs(): string[] {
	const dir = join(process.cwd(), 'src', 'content', 'docs', 'blog');
	if (!existsSync(dir)) return [];
	try {
		return readdirSync(dir)
			.filter((f) => f.endsWith('.md'))
			.map((f) => f.replace(/\.md$/, ''));
	} catch {
		return [];
	}
}

export const GET: APIRoute = () => {
	const slugs = getBlogPostSlugs();
	const body = [
		'# Shishir Chaurasiya — Full-Stack Web Developer',
		'',
		'> Personal portfolio and blog of Shishir Chaurasiya, a full-stack web developer specializing in React, Next.js, TypeScript, Node.js, and modern web technologies.',
		'',
		'## About',
		'',
		'Full-stack web developer with experience in blockchain integration, frontend architecture, and AI-powered applications. Based in India, available for freelance and contract work.',
		'',
		'## Key Pages',
		'',
		'  - / — Portfolio homepage: hero, about, work experience, tech stack, pinned projects, contact',
		...slugs.map((s) => `  - /blog/${s}`),
		'',
		'## Social / Contact',
		'',
		'  - Email: shishirchaurasiya435@gmail.com',
		'  - GitHub: https://github.com/Shishir435',
		'  - LinkedIn: https://linkedin.com/in/shishir-chaurasiya',
		'  - Upwork: https://www.upwork.com/freelancers/~019752a06cf3f11b51',
		'',
		'## Tech Stack',
		'',
		'  Frontend: React, Next.js, TypeScript, Tailwind CSS, Redux Toolkit',
		'  Backend: Node.js, Express, MongoDB',
		'  Tools: Git, Docker, Socket.io, Framer Motion',
		'  AI: OpenAI API, Ollama, LangChain',
		'  Blockchain: Ethereum, Solana, Bitcoin wallet integration',
		'',
	].join('\n');

	return new Response(body, {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' },
	});
};
