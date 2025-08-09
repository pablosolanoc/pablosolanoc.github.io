<script lang="ts">
	import type { SEOData } from '$lib/stores/seo';

	interface Props {
		data: SEOData;
	}

	let { data }: Props = $props();
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta name="title" content={data.title} />
	<meta name="description" content={data.description} />
	{#if data.keywords}
		<meta name="keywords" content={data.keywords} />
	{/if}
	{#if data.canonical}
		<link rel="canonical" href={data.canonical} />
	{/if}
	
	<!-- Open Graph -->
	<meta property="og:title" content={data.title} />
	<meta property="og:description" content={data.description} />
	{#if data.canonical}
		<meta property="og:url" content={data.canonical} />
	{/if}
	{#if data.ogImage}
		<meta property="og:image" content={data.ogImage} />
	{/if}
	
	<!-- Twitter -->
	<meta property="twitter:title" content={data.title} />
	<meta property="twitter:description" content={data.description} />
	{#if data.ogImage}
		<meta property="twitter:image" content={data.ogImage} />
	{/if}
</svelte:head>