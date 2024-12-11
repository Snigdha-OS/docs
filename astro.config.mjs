import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			// title: 'DOCUMENTATION | SNIGDHA OS',
			title: {
				en: 'DOCUMENTATION | SNIGDHA OS',
				'in-IN': 'प्रलेखन | स्निग्धा ओएस',
				'bn-BN': 'ডকুমেন্টেশন | স্নিগ্ধা ওএস',
			},
			defaultLocale: 'root', // optional
			locales: {
				root: {
				  label: 'English',
				  lang: 'en', // lang is required for root locales
				},
				'in-in': {
				  label: 'हिन्दी',
				  lang: 'in-IN',
				},
				'bn-bn': {
					label: 'বাংলা',
					lang: 'bn-BN'
				}
			  },
			social: {
				github: 'https://github.com/Snigdha-OS/',
			},
			sidebar: [
				{
					label: 'Introduction',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Overview', slug: '' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
