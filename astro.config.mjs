import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://bigfriendlyfunction.com',
  output: 'static', // static build, deploys cleanly to Vercel
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false, // we bring our own base styles in global.css
    }),
  ],
});
