export interface SEOData {
	title: string;
	description: string;
	keywords?: string;
	canonical?: string;
	ogImage?: string;
}

export const SEOInfo: SEOData = {
	title: 'Pablo Solano - Full Stack Developer Portfolio',
	description:
		'Experienced full stack developer specializing in modern web technologies. View my projects, skills, and professional experience.',
	keywords:
		'full stack developer, web developer, portfolio, JavaScript, TypeScript, React, Svelte, Node.js',
	canonical: 'https://pablosolano.pro/',
	ogImage: 'https://pablosolano.pro/og-image.png'
};

export const seoData = {
	home: {
		title: 'Pablo Solano - Full Stack Developer | Home',
		description:
			"Welcome to my portfolio. I'm Pablo, a passionate full stack developer creating modern web applications with cutting-edge technologies.",
		keywords: 'pablo, solano, full stack developer, web developer, portfolio, home'
	},
	experience: {
		title: "Experience - Pablo's Portfolio",
		description:
			'Explore my professional experience as a full stack developer. View my work history, roles, and achievements in web development.',
		keywords: 'experience, work history, full stack developer, career'
	},
	skills: {
		title: "Skills - Pablo's Portfolio",
		description:
			'Discover my technical skills and expertise in web development, including JavaScript, TypeScript, React, Svelte, and more.',
		keywords:
			'skills, technical skills, programming languages, web development, JavaScript, TypeScript'
	},
	projects: {
		title: "Projects - Pablo's Portfolio",
		description:
			'Browse my portfolio of web development projects. See examples of my work in full stack development and modern web technologies.',
		keywords: 'projects, portfolio, web development projects, full stack projects'
	},
	testimonials: {
		title: "Testimonials - Pablo's Portfolio",
		description:
			'Read testimonials and reviews from clients and colleagues about my work as a full stack developer.',
		keywords: 'testimonials, reviews, client feedback, recommendations'
	}
};
