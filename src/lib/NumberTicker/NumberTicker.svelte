<script lang="ts">
	// Credit to https://animation-svelte.vercel.app/magic/number-ticker
	import { cubicOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { cn } from '$lib/utils';

	type NumberTickerProps = {
		value: number;
		initial?: number;
		duration?: number;
		class?: string;
	};

	const {
		value = 100,
		initial = 0,
		duration = 2000,
		class: className,
		...restProps
	}: NumberTickerProps = $props();

	let num = $state(
		tweened(initial, {
			duration: duration,
			easing: cubicOut
		})
	);

	onMount(() => {
		num.set(value);
	});
</script>

<div
	class={cn('inline-block  text-black dark:text-white tracking-normal', className)}
	{...restProps}
>
	{$num.toFixed(0)}
</div>
