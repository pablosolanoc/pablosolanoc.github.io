<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	const GA_ID = import.meta.env.VITE_GA_ID;

	// Initialize Google Analytics
	onMount(() => {
		if (!browser || !GA_ID) return;

		const consent = localStorage.getItem('cookie-consent');
		if (consent !== 'accepted') return;

		// Load gtag script
		const script = document.createElement('script');
		script.async = true;
		script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
		document.head.appendChild(script);

		// Initialize gtag
		window.dataLayer = window.dataLayer || [];
		window.gtag = function() {
			window.dataLayer.push(arguments);
		};
		window.gtag('js', new Date());
		window.gtag('consent', 'default', {
			analytics_storage: 'granted',
			ad_storage: 'denied'
		});
		window.gtag('config', GA_ID, {
			page_title: document.title,
			page_location: window.location.href,
			anonymize_ip: true
		});
	});

	// Track page changes
	$: if (browser && $page.url.pathname && window.gtag && GA_ID) {
		window.gtag('config', GA_ID, {
			page_path: $page.url.pathname,
			page_title: document.title,
			page_location: window.location.href
		});
	}
</script>

<svelte:head>
	{#if GA_ID}
		<!-- Google Analytics 4 will be loaded dynamically -->
	{/if}
</svelte:head>