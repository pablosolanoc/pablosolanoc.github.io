<script module lang="ts">
	export interface ButtonProps extends HTMLButtonAttributes {
		class?: string;
		buttonStyleType: ButtonTypeEnum;
		animationType?: AnimationTypeEnum;
	}
</script>

<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import { AnimationTypeEnum, buttonTypeClasses, ButtonTypeEnum } from './Button.types';
	import { twMerge } from 'tailwind-merge';

	let {
		class: classes,
		children,
		buttonStyleType: buttonType = ButtonTypeEnum.shell,
		// animationType = AnimationTypeEnum.outward,
		...restProps
	}: ButtonProps = $props();
</script>

<button
	class={twMerge(`inline-block whitespace-nowrap ${buttonTypeClasses[buttonType]} ${classes}`)}
	{...restProps}
>
	{#if children}
		{@render children()}
	{/if}
</button>
