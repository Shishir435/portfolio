import { unified } from '@astrojs/markdown-remark';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

function rehypeExternalLinks() {
	return (tree) => {
		function walk(node) {
			if (
				node.type === 'element' &&
				node.tagName === 'a' &&
				node.properties?.href
			) {
				const href = String(node.properties.href);
				if (href.startsWith('http://') || href.startsWith('https://')) {
					node.properties.target = '_blank';
					node.properties.rel = 'noopener noreferrer';
				}
			}
			if (node.children) {
				for (const child of node.children) {
					walk(child);
				}
			}
		}
		walk(tree);
	};
}

export default defineConfig({
	site: 'https://shishirchaurasiya.in',
	redirects: {
		'/blog': '/blog/ollamaclient',
		'/blogs': '/blog/ollamaclient',
	},
	markdown: {
		processor: unified({ rehypePlugins: [rehypeExternalLinks] }),
	},
	integrations: [
		starlight({
			title: 'Blog',
			description: "Shishir's Blog — thoughts on dev, full-stack, and design",
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/Shishir435',
				},
			],
			disable404Route: true,
			sidebar: [
				{
					label: 'Posts',
					items: [{ autogenerate: { directory: 'blog' } }],
				},
			],
		}),
		tailwind({
			applyBaseStyles: false,
		}),
	],
});
