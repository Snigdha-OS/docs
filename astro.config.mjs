import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://Snigdha-OS.github.io/',
  base: '/docs/',
  integrations: [
    starlight({
      title: {
        en: 'DOCUMENTATION | SNIGDHA OS',
        'hi': 'प्रलेखन | स्निग्धा ओएस',
        'bn': 'ডকুমেন্টেশন | স্নিগ্ধা ওএস',
      },
      logo: {
        light: './src/assets/snigdhaos-docs-light.svg',
        dark: './src/assets/snigdhaos-docs-dark.svg',
        href: '/en/introduction/overview/',
        replacesTitle: false,
      },
	  editLink: {
		baseUrl: 'https://github.com/Snigdha-OS/docs/edit/master',
	},
  lastUpdated: true,
      defaultLocale: 'en',
      locales: {
        en: {
          label: 'English',
          lang: 'en',
        },
        'hi': {
          label: 'हिन्दी',
          lang: 'hi',
        },
        'bn': {
          label: 'বাংলা',
          lang: 'bn',
        },
      },
      social: {
        github: 'https://github.com/Snigdha-OS/',
        gitlab: 'https://gitlab.com/Snigdha-OS', // Added dev.to link
      },
      sidebar: [
        {
          label: 'Introduction',
          items: [
            { label: 'Overview', slug: 'introduction/overview' },
			      { label: 'Story', slug: 'introduction/story' },
          ],
        },
        // {
        //   label: 'Reference',
        //   autogenerate: { directory: 'reference' },
        // },
      ],
    }),
  ],
});
