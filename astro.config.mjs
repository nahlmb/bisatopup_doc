// @ts-check
import {
	defineConfig
} from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Bisatopup Docs',
			logo: {
				src: "./src/assets/im_btudoc_logo.png",
				replacesTitle: true
			},
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/custom.css',
			],
			sidebar: [{
					label: 'Pengantar',
					autogenerate: {
						directory: 'pengantar'
					}
				},
				{
					label: 'Android',
					autogenerate: {
						directory: 'android'
					}
				},
				{
					label: 'iOS',
					autogenerate: {
						directory: 'ios'
					}
				},

			],
		}),
	],
});