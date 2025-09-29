import { browser } from '$app/environment';
import { PUBLIC_VITE_GA_ID } from '$env/static/public';

declare global {
	interface Window {
		gtag: (...args: any[]) => void;
		dataLayer: any[];
	}
}

export const GA_ID = PUBLIC_VITE_GA_ID;

export const trackPageView = (url: string) => {
	if (!browser || !window.gtag || !GA_ID) return;

	window.gtag('config', GA_ID, {
		page_path: url
	});
};

export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
	if (!browser || !window.gtag || !GA_ID) return;

	window.gtag('event', action, {
		event_category: category,
		event_label: label,
		value: value
	});
};

export const trackCustomEvent = (eventName: string, parameters: Record<string, any> = {}) => {
	if (!browser || !window.gtag || !GA_ID) return;

	window.gtag('event', eventName, parameters);
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
