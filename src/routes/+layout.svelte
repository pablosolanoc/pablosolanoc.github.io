<script module lang="ts">
	import '../app.css';

	export interface LayoutProps {
		isDarkMode: boolean;
	}

	// Initialize theme from localStorage immediately
	const getInitialTheme = () => {
		if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
			const savedTheme = localStorage.getItem('darkMode');
			return savedTheme === 'true';
		}
		return false;
	};

	export const appState = $state({ isDarkMode: getInitialTheme() });

	export const updateAppState = () => {
		appState.isDarkMode = !appState.isDarkMode;
		if (typeof localStorage !== 'undefined') {
			localStorage.setItem('darkMode', appState.isDarkMode.toString());
		}
	};
</script>

<script lang="ts">
	import Analytics from '$lib/components/Analytics.svelte';
	import CookieConsent from '$lib/components/CookieConsent.svelte';
	import Footer from '$lib/Footer/Footer.svelte';

	import Navbar from '$lib/Navbar/Navbar.svelte';
	import ScrollWrapper from '$lib/ScrollWrapper/ScrollWrapper.svelte';

	$effect(() => {
		if (document) {
			document.documentElement.classList.toggle('dark', appState.isDarkMode);
		}
	});

	let { children } = $props();
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<Analytics />
<Navbar />

<main class="bg-[red]-comment flex flex-col justify-center w-full items-center relative z-0">
	<ScrollWrapper settings={{}}>
		{@render children()}
	</ScrollWrapper>
</main>

<Footer />
<CookieConsent />
