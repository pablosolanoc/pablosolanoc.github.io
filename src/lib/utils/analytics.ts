import { browser } from '$app/environment';

declare global {
	interface Window {
		gtag?: (...args: any[]) => void;
		dataLayer?: any[];
	}
}

// Read through `import.meta.env` rather than `$env/static/public` so a missing ID
// degrades to "analytics off" instead of failing the build.
export const GA_ID = import.meta.env.VITE_GA_ID ?? '';

/** Resolves gtag only once it has been initialised, so callers can no-op safely. */
const gtag = () => (browser && GA_ID ? window.gtag : undefined);

/**
 * Loads gtag.js and configures the property. Page views are sent manually by
 * `trackPageView`, so `send_page_view` is disabled here to avoid a duplicate on
 * the initial load.
 */
export const initAnalytics = () => {
	if (!browser || !GA_ID || window.gtag) return;

	const dataLayer = (window.dataLayer = window.dataLayer ?? []);
	window.gtag = function () {
		// eslint-disable-next-line prefer-rest-params
		dataLayer.push(arguments);
	};
	window.gtag('js', new Date());
	// NOTE: not gated by any consent UI — analytics storage is granted outright.
	// See commit c7a8f44, which removed the cookie banner on purpose.
	window.gtag('consent', 'default', {
		analytics_storage: 'granted',
		ad_storage: 'denied'
	});
	window.gtag('config', GA_ID, {
		send_page_view: false
	});

	const script = document.createElement('script');
	script.async = true;
	script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
	document.head.appendChild(script);
};

export const trackPageView = (url: URL | string) => {
	const send = gtag();
	if (!send) return;

	const path = typeof url === 'string' ? url : url.pathname + url.search + url.hash;

	send('event', 'page_view', {
		page_path: path,
		page_title: document.title,
		page_location: window.location.href
	});
};

export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
	const send = gtag();
	if (!send) return;

	send('event', action, {
		event_category: category,
		event_label: label,
		value: value
	});
};

export const trackCustomEvent = (eventName: string, parameters: Record<string, any> = {}) => {
	const send = gtag();
	if (!send) return;

	send('event', eventName, parameters);
};

// Portfolio-specific tracking events
export const trackSectionView = (section: string) => {
	trackEvent('section_view', 'navigation', section);
};

export const trackProjectClick = (projectName: string) => {
	trackEvent('project_click', 'projects', projectName);
};

export const trackCVDownload = () => {
	trackEvent('download', 'cv', 'cv_pdf');
};

export const trackContactClick = (method: string) => {
	trackEvent('contact_click', 'contact', method);
};

export const trackThemeToggle = (theme: 'light' | 'dark') => {
	trackEvent('theme_toggle', 'ui', theme);
};
