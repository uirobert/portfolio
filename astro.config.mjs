import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel/serverless";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: 'uirobert.github.io',
  base: 'https://github.com/uirobert/uirobert.github.io',
  integrations: [tailwind(), react(), mdx()],
  output: "server",
  adapter: cloudflare()
});