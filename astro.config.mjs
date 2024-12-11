import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: {
        en: 'DOCUMENTATION | SNIGDHA OS',
        'hi-IN': 'प्रलेखन | स्निग्धा ओएस',
        'bn-BD': 'ডকুমেন্টেশন | স্নিগ্ধা ওএস',
      },
      defaultLocale: 'en',
      locales: {
        en: {
          label: 'English',
          lang: 'en',
        },
        'hi-IN': {
          label: 'हिन्दी',
          lang: 'hi-IN',
        },
        'bn-BD': {
          label: 'বাংলা',
          lang: 'bn-BD',
        },
      },
      social: {
        github: 'https://github.com/Snigdha-OS/',
      },
      sidebar: [
        // {
        //   label: 'Introduction',
        //   items: [
        //     { label: 'Overview', slug: 'introduction/overview' },
        //   ],
        // },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
      ],
    }),
  ],
});
