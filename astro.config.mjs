import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
		// contentRoot: './src/content/docs/en',
      title: {
        en: 'DOCUMENTATION | SNIGDHA OS',
        'hi': 'प्रलेखन | स्निग्धा ओएस',
        'bn': 'ডকুমেন্টেশন | স্নিগ্ধা ওএস',
      },
	  editLink: {
		baseUrl: 'https://github.com/Snigdha-OS/docs/edit/master',
	},
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
        // twitter: 'https://twitter.com',
        // discord: 'https://discord.com',
        // blueSky: 'https://bsky.app',
        rss: 'https://dev.to/SnigdhaOS', // Added dev.to link
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
