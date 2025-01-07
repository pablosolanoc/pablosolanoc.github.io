<script lang="ts">
	import type { Snippet } from 'svelte';
	import { NeonEnum, TypographyEnum } from './Typography.types';
	import { twMerge } from 'tailwind-merge';
	import AnimatedUnderline from '$lib/AnimatedUnderline/AnimatedUnderline.svelte';

	interface TypographyProps {
		variant?: TypographyEnum | string;
		children?: Snippet;
		class?: string;
		animatedUnderline?: boolean;
		neonType?: NeonEnum;
	}

	const {
		variant = TypographyEnum.p,
		children,
		class: classes,
		animatedUnderline,
		neonType
	}: TypographyProps = $props();

	const extraClasses = [
		classes,
		'duration-veryslow',
		animatedUnderline ? 'relative group' : undefined,
		neonType === NeonEnum.primary
			? 'neon-hover-primary'
			: neonType === NeonEnum.extra
				? 'neon-hover-extra'
				: ''
	];
</script>

{#if children}
	{#if variant === TypographyEnum.h1}
		<h1
			class={twMerge(
				`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-black dark:text-white`,
				...extraClasses
			)}
		>
			{@render children()}
			<AnimatedUnderline show={animatedUnderline} />
		</h1>
	{:else if variant === TypographyEnum.h2}
		<h2
			class={twMerge(
				`scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 text-black dark:text-white`,
				...extraClasses
			)}
		>
			{@render children()}
			<AnimatedUnderline show={animatedUnderline} />
		</h2>
	{:else if variant === TypographyEnum.h3}
		<h3
			class={twMerge(
				`scroll-m-20 text-2xl font-semibold tracking-tight text-black dark:text-white`,
				...extraClasses
			)}
		>
			{@render children()}
			<AnimatedUnderline show={animatedUnderline} />
		</h3>
	{:else if variant === TypographyEnum.h4}
		<h4
			class={twMerge(
				`scroll-m-20 text-xl font-semibold tracking-tight text-black dark:text-white`,
				...extraClasses
			)}
		>
			{@render children()}
			<AnimatedUnderline show={animatedUnderline} />
		</h4>
	{:else if variant === TypographyEnum.p}
		<p
			class={twMerge(
				`leading-7 [&:not(:first-child)]:mt-6 text-black dark:text-white`,
				...extraClasses
			)}
		>
			{@render children()}
			<AnimatedUnderline show={animatedUnderline} />
		</p>
	{:else if variant === TypographyEnum.blockquote}
		<blockquote
			class={twMerge(`mt-6 border-l-2 pl-6 italic text-black dark:text-white`, ...extraClasses)}
		>
			{@render children()}
			<AnimatedUnderline show={animatedUnderline} />
		</blockquote>
	{/if}
{/if}
