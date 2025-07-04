<script module lang="ts">
	export type ScrollWrapperProps = {
		children: Snippet;
		settings: LocomotiveScroll.InstanceOptions;
	};
</script>

<script lang="ts">
	import { onMount, type Snippet } from 'svelte';
	import { initLocomotiveScroll } from './initLocomotiveScroll.svelte';
	import type LocomotiveScroll from 'locomotive-scroll';

	const { children, settings }: ScrollWrapperProps = $props();

	onMount(() => {
		initLocomotiveScroll(settings);
	});
</script>

<div id="data-scroll-container">
	{@render children()}
</div>
