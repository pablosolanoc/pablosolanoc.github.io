<script lang="ts">
	import type { Snippet } from 'svelte';

	const {
		title,
		viewBox,
		children,
		...props
	}: {
		title: string;
		viewBox: string;
		children: Snippet;
	} = $props();
</script>

<svg xmlns="http://www.w3.org/2000/svg" {viewBox} {...props}>
	{#if title}
		<title>{title}</title>
	{/if}
	{#if children}
		{@render children()}
	{/if}
</svg>

<style>
	svg {
		stroke: currentColor;
		fill: currentColor;
		stroke-width: 0;
		width: 100%;
		height: auto;
		max-height: 100%;
	}
</style>
