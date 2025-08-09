export const extendedTheme = {
	colors: {
		primary: '#8750f7',
		secondary: '#2a1454',
		neon: '#0ff',
		globant: '#bfd732',
		darkMode: '#0d0d0d',
		lightMode: '#ffffff'
	},
	transitionDuration: {
		fast: '50ms',
		mid: '100ms',
		slow: '150ms',
		veryslow: '350ms'
	},
	screens: {
		outlier: '1920px'
	},
	dropShadow: {
		'3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
		'4xl': ['0 35px 35px rgba(0, 0, 0, 0.25)', '0 45px 65px rgba(0, 0, 0, 0.15)']
	}
};

export const getExtendedTheme = () => {
	return extendedTheme;
};
