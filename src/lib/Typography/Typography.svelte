<script lang="ts">
	import type { Snippet } from 'svelte';
	import { NeonEnum, TypographyEnum } from './Typography.types';
	import { twMerge } from 'tailwind-merge';
	import AnimatedUnderline from '$lib/AnimatedUnderline/AnimatedUnderline.svelte';
	import { appState } from '../../routes/+layout.svelte';

	interface TypographyProps {
		variant?: TypographyEnum | string;
		children?: Snippet;
		class?: string;
		animatedUnderline?: boolean;
		neonType?: NeonEnum;
		gradient?: boolean;
		dataScroll?: boolean;
		dataScrollSpeed?: string;
	}

	const {
		variant = TypographyEnum.p,
		children,
		class: classes,
		animatedUnderline,
		neonType,
		gradient,
		dataScrollSpeed
	}: TypographyProps = $props();

	const extraClasses = $derived([
		classes,
		'duration-veryslow',
		animatedUnderline ? 'relative group' : undefined,
		appState.isDarkMode && neonType === NeonEnum.primary
			? 'neon-hover-primary'
			: appState.isDarkMode && neonType === NeonEnum.extra
				? 'neon-hover-extra'
				: '',
		appState.isDarkMode && gradient
			? 'bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'
			: !appState.isDarkMode && gradient
				? 'bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'
				: ''
	]);
</script>

{#if children}
	{#if variant === TypographyEnum.h1}
		<h1
			data-scroll={!!dataScrollSpeed}
			data-scroll-speed={dataScrollSpeed}
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
			data-scroll={!!dataScrollSpeed}
			data-scroll-speed={dataScrollSpeed}
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
			data-scroll={!!dataScrollSpeed}
			data-scroll-speed={dataScrollSpeed}
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
			data-scroll={!!dataScrollSpeed}
			data-scroll-speed={dataScrollSpeed}
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
			data-scroll={!!dataScrollSpeed}
			data-scroll-speed={dataScrollSpeed}
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
			data-scroll={!!dataScrollSpeed}
			data-scroll-speed={dataScrollSpeed}
			class={twMerge(`mt-6 border-l-2 pl-6 italic text-black dark:text-white`, ...extraClasses)}
		>
			{@render children()}
			<AnimatedUnderline show={animatedUnderline} />
		</blockquote>
	{/if}
{/if}
