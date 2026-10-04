<script lang="ts">
	import { browser } from '$app/environment';
	import { afterNavigate } from '$app/navigation';
	import { tick } from 'svelte';
	import { GA_ID, initAnalytics, trackPageView } from '$lib/utils/analytics';

	// Bootstrap during component init (not onMount) so gtag exists before the
	// first `afterNavigate` callback fires.
	if (browser && GA_ID) initAnalytics();

	// `afterNavigate` also runs on mount, so this covers the initial page view
	// and every client-side navigation with a single code path.
	afterNavigate(async (navigation) => {
		// Let <svelte:head> apply the new document title before we read it.
		await tick();
		trackPageView(navigation.to?.url ?? window.location.href);
	});
</script>

<svelte:head>
	{#if GA_ID}
		<link rel="preconnect" href="https://www.googletagmanager.com" />
	{/if}
</svelte:head>
