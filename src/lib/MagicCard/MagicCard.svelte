<script module lang="ts">
	export type MagicCardProps = {
		gradientSize?: number;
		gradientColor?: string;
		gradientOpacity?: number;
		tiltScale?: number;
		doTilt?: boolean;
		class: string;
		children: Snippet;
	};
</script>

<script lang="ts">
	import { Motion, useMotionValue, useMotionTemplate } from 'svelte-motion';
	import { onMount, type Snippet } from 'svelte';
	import { cn } from '$lib/utils';

	import { appState } from '../../routes/+layout.svelte';

	import { getExtendedTheme } from '../../extendedTheme';
	import tilt from '../../shared/utils/tilt';

	const {
		gradientSize = 200,
		gradientColor: gradientColorProps,
		gradientOpacity = 0.8,
		class: className,
		tiltScale = 1,
		doTilt = false,
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

	let element: HTMLElement;
	let position = $state({ top: 0, left: 0, width: 0, height: 0 });

	const updatePosition = () => {
		if (element) {
			const rect = element.getBoundingClientRect();
			position = {
				top: rect.top,
				left: rect.left,
				width: rect.width,
				height: rect.height
			};
		}
	};

	onMount(() => {
		updatePosition(); // Get initial position
		window.addEventListener('resize', updatePosition);
		window.addEventListener('scroll', updatePosition);

		return () => {
			window.removeEventListener('resize', updatePosition);
			window.removeEventListener('scroll', updatePosition);
		};
	});
</script>

<div
	role="banner"
	bind:this={element}
	use:tilt={{
		scale: tiltScale,
		reverse: true,
		top: position.top,
		left: position.left,
		doTilt
	}}
	onmousemove={handleMouseMove}
	onmouseleave={handleMouseLeave}
	class={cn(
		'group relative flex overflow-hidden !bg-neutral-100 dark:!bg-neutral-900  text-black dark:text-white justify-center',
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
