import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://dinilr.com',
  integrations: [
    react(),
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
