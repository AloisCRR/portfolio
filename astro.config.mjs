// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  // Enable site-wide features for performance and SEO
  site: 'https://portfolio.aloiscrr.dev',
  integrations: []
});