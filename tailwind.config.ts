import type { Config } from 'tailwindcss';
import { extendedTheme } from './src/extendedTheme';

export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontFamily: {
			ubuntu: ['Ubuntu', 'sans-serif']
		},
		extend: extendedTheme
	},

	plugins: [require('@tailwindcss/typography')]
} satisfies Config;
