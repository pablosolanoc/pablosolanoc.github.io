<script module lang="ts">
	export type MagicCardProps = {
		gradientSize: number;
		gradientColor?: string;
		gradientOpacity?: number;
		class: string;
		children: Snippet;
	};
</script>

<script lang="ts">
	import { Motion, useMotionValue, useMotionTemplate } from 'svelte-motion';
	import { onMount, type Snippet } from 'svelte';
	import { cn } from '$lib/utils';

	import { appState } from '../../routes/+layout.svelte';
	import { fromTheme } from 'tailwind-merge';
	import { getExtendedTheme } from '../../extendedTheme';

	const {
		gradientSize = 200,
		gradientColor: gradientColorProps,
		gradientOpacity = 0.8,
		class: className,
		children
	}: MagicCardProps = $props();

	let gradientColor = $derived(
		gradientColorProps
			? gradientColorProps
			: appState.isDarkMode
				? getExtendedTheme().colors.primary
				: getExtendedTheme().colors.primary
	);

	let gradSize = useMotionValue(gradientSize);
	let gradColor = $derived(useMotionValue(gradientColor));
	let mouseX = useMotionValue(-gradientSize);
	let mouseY = useMotionValue(-gradientSize);

	function handleMouseMove(e: MouseEvent) {
		const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
		mouseX.set(e.clientX - rect.left);
		mouseY.set(e.clientY - rect.top);
	}

	function handleMouseLeave() {
		mouseX.set(-gradientSize);
		mouseY.set(-gradientSize);
	}

	onMount(() => {
		mouseX.set(-gradientSize);
		mouseY.set(-gradientSize);
	});
	let bg = $derived(
		useMotionTemplate`radial-gradient(${gradSize}px circle at ${mouseX}px ${mouseY}px, ${gradColor}, transparent 100%)`
	);
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- I have added py-4 in below code, you can customize the component as per needs -->
<div
	onmousemove={handleMouseMove}
	onmouseleave={handleMouseLeave}
	class={cn(
		'group relative flex overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-900 border text-black dark:text-white justify-center py-4',
		className
	)}
>
	<div class="relative z-10">{@render children()}</div>
	<Motion
		style={{
			background: bg,
			opacity: gradientOpacity
		}}
		let:motion
	>
		<div
			use:motion
			class="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
		></div>
	</Motion>
</div>

<style>
	.size-full {
		width: 100%;
		height: 100%;
	}
</style>
