<script lang="ts">
	import type { ButtonProps } from '$lib/Button/Button.svelte';
	import Button from '$lib/Button/Button.svelte';
	import { ButtonTypeEnum } from '$lib/Button/Button.types';

	let {
		children,
		buttonStyleType: buttonType = ButtonTypeEnum.shell,
		index,
		activeIndex,
		...restProps
	}: Partial<
		{ index: number; activeIndex: number; buttonStyleType: ButtonTypeEnum } & ButtonProps
	> = $props();
</script>

<Button
	class={`group relative z-[1]  shadow-0 rounded-md border-0! px-5 text-secondary shadow-none hover:border-0 hover:bg-transparent hover:!text-secondary hover:shadow-sm dark:text-white hover:dark:!text-white font-bold text-lg ${
		activeIndex === index ? 'z-0' : ''
	}`}
	buttonStyleType={buttonType}
	{...restProps}
>
	{#if children}
		{@render children()}
	{/if}
</Button>
