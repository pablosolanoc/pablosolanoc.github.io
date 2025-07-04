<script module lang="ts">
	export interface AnchorProps extends Omit<HTMLAnchorAttributes, never> {
		class?: string;
		anchorStyleType: AnchorTypeEnum;
		animationType?: AnimationTypeEnum;
	}
</script>

<script lang="ts">
	import type { HTMLAnchorAttributes } from 'svelte/elements';
	import {
		AnimationTypeEnum,
		buttonTypeClasses,
		ButtonTypeEnum as AnchorTypeEnum
	} from '../Button/Button.types';
	import { twMerge } from 'tailwind-merge';

	let {
		class: classes,
		children,
		anchorStyleType: buttonType = AnchorTypeEnum.shell,
		// animationType = AnimationTypeEnum.outward,
		...restProps
	}: AnchorProps = $props();
</script>

<a
	class={twMerge(`${buttonTypeClasses[buttonType]} ${classes} cursor-pointer glow`)}
	{...restProps}
>
	{#if children}
		{@render children()}
	{/if}
</a>
