<script module lang="ts">
	export interface LayoutProps {
		isDarkMode: boolean;
	}

	export const appState = $state({ isDarkMode: false });

	export const updateAppState = () => {
		appState.isDarkMode = !appState.isDarkMode;
	};
</script>

<script lang="ts">
	import Footer from '$lib/Footer/Footer.svelte';

	import Navbar from '$lib/Navbar/Navbar.svelte';
	import ScrollWrapper from '$lib/ScrollWrapper/ScrollWrapper.svelte';

	import '../app.css';

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

<Navbar />

<main class="bg-[red]-comment flex flex-col justify-center items-center relative z-0">
	<ScrollWrapper settings={{}}>
		{@render children()}
	</ScrollWrapper>
</main>

<Footer />
