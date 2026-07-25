import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

const repo = process.env.GITHUB_REPOSITORY?.split('/')[1];
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  site: isGithubActions ? `https://${process.env.GITHUB_REPOSITORY_OWNER}.github.io` : undefined,
  base: isGithubActions && repo ? `/${repo}` : '/',
  integrations: [react(), tailwind()],
});
