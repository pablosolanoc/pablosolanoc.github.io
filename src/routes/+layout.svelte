<script module lang="ts">
	export interface LayoutProps {
		isDarkMode: boolean;
	}

	export let appState = writable<AppStateType>({ isDarkMode: false });
</script>

<script lang="ts">
	import Navbar from '$lib/Navbar/Navbar.svelte';
	import Typography from '$lib/Typography/Typography.svelte';

	import '../app.css';
	import type { AppStateType } from '../shared/app.types';
	import { writable } from 'svelte/store';

	// appState.subscribe((value) => {
	// 	console.log({ value });
	// }); // logs '0'

	const updateAppState = () => {
		appState.update((prev) => ({
			...prev,
			isDarkMode: !prev.isDarkMode
		}));
	};

	$effect(() => {
		// debugger;
		if (document) {
			document.documentElement.classList.toggle('dark', $appState.isDarkMode);
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
<button class="font-ubuntu" onclick={updateAppState}>hey {$appState.isDarkMode}</button>

{@render children()}
