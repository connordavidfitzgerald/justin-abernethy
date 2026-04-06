// @ts-check
import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';
import { fontProviders } from 'astro/config';
import lenis from 'astro-lenis';
import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Custom',
      cssVariable: '--font-helvetica',
      options: {
        variants: [
          {
            weight: 400,
            style: 'normal',
            src: ['./src/assets/fonts/HelveticaLTPro-BoldCond.ttf'],
            display: 'block',
          },
          // ...
        ],
      },
    },
  ],
  integrations: [
    sanity({
      projectId: 't3fe0x9u',
      dataset: 'production',
      apiVersion: '2024-01-01',
      useCdn: import.meta.env.DEV ? false : true,
    }),
    vue(),
    lenis(),
  ],

  adapter: cloudflare(),
});
