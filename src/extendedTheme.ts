export const extendedTheme = {
	colors: {
		primary: '#8750f7',
		secondary: '#2a1454',
		neon: '#0ff'
	},
	transitionDuration: {
		fast: '50ms',
		mid: '100ms',
		slow: '150ms',
		veryslow: '350ms'
	},
	screens: {
		outlier: '1920px'
	}
};

export const getExtendedTheme = () => {
	return extendedTheme;
};
