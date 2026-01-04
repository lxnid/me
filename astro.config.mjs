import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

export default defineConfig({
  site: 'https://dinilr.com',
  integrations: [
    react(),
    mdx({
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'wrap' }],
      ],
    }),
    sitemap(),
  ],
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      noExternal: ['framer-motion', 'gsap', 'lenis'],
    },
  },
});
