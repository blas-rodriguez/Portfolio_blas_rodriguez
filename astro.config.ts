import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const [githubOwner, githubRepository] = (process.env.GITHUB_REPOSITORY ?? '/').split('/');
const publicSite = process.env.PUBLIC_SITE_URL?.trim();
const publicBase = process.env.PUBLIC_BASE_PATH?.trim();
const configuredSite = publicSite ? publicSite.replace(/\/$/, '') : undefined;
const configuredBase = publicBase ? publicBase.replace(/\/$/, '') : undefined;
const isUserPage = githubRepository === `${githubOwner}.github.io`;

const site = configuredSite ?? (githubOwner ? `https://${githubOwner}.github.io` : 'http://localhost:4321');
const base =
  configuredBase ?? (!configuredSite && githubRepository && !isUserPage ? `/${githubRepository}` : '/');

export default defineConfig({
  site,
  base,
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', es: 'es' },
      },
    }),
  ],
  vite: {
    build: {
      cssMinify: 'lightningcss',
    },
  },
});
