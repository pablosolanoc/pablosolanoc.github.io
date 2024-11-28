import type { Config } from 'tailwindcss';

export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontFamily: {
			ubuntu: ['Ubuntu', 'sans-serif']
		},
		extend: {
			colors: {
				primary: '#8750f7',
				secondary: '#2a1454'
			},
			transitionDuration: {
				fast: '50ms',
				mid: '100ms',
				slow: '150ms'
			}
		}
	},

	plugins: []
} satisfies Config;
