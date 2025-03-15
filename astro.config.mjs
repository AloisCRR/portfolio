// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  // Enable site-wide features for performance and SEO
  site: 'https://aloiscrr.dev',
  integrations: [sitemap()]
});