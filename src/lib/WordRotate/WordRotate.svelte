<script lang="ts">
	import Typography from '$lib/Typography/Typography.svelte';
	import type { TypographyEnum } from '$lib/Typography/Typography.types';

	// Credit to https://animation-svelte.vercel.app/magic/word-rotate

	import { onMount, type Snippet } from 'svelte';
	import { fly } from 'svelte/transition';

	type WordRotateProps = {
		words?: { text: string; typography: TypographyEnum; class: string }[];
		duration?: number;
		class?: string;
		children?: Snippet;
	};

	const { words, duration = 3500, children }: WordRotateProps = $props();

	let index = $state(0);
	let changeIndex = () => {
		index = (index + 1) % (words?.length ?? 0);
	};

	onMount(() => {
		let interval = setInterval(changeIndex, duration);
		return () => clearInterval(interval);
	});
</script>

<div class="py-2 !h-content relative">
	{#key index}
		<div
			in:fly={{ y: -100, delay: 200 }}
			out:fly={{ y: 40, duration: 200 }}
			class={`${words?.[index].class}  !h-content !absolute`}
		>
			<Typography variant={words?.[index].typography} class={words?.[index].class}>
				{words?.[index].text}
			</Typography>
		</div>
	{/key}
	<Typography variant={'p'} class={`${words?.[index].class} !m-0 !p-0 invisible`}>
		{words?.[index].text}
	</Typography>
	{@render (children ? children : () => null)()}
</div>
