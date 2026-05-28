import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://moduhub.com',
  integrations: [sitemap()],
});
