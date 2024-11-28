<script lang="ts">
	import type { ButtonProps } from '$lib/Button/Button.svelte';
	import Button from '$lib/Button/Button.svelte';
	import { ButtonTypeEnum } from '$lib/Button/Button.types';

	const {
		children,
		buttonStyleType: buttonType = ButtonTypeEnum.shell,
		...restProps
	}: Partial<ButtonProps> = $props();
</script>

<Button
	class={'shadow-0 rounded-md border-none font-normal text-secondary shadow-none hover:border-0 hover:bg-transparent hover:!text-secondary hover:shadow-sm dark:text-white hover:dark:!text-white'}
	buttonStyleType={buttonType}
	{...restProps}
>
	{#if children}
		{@render children()}
	{/if}
</Button>
