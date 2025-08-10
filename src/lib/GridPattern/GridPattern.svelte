<script lang="ts">
	import { cn } from '$lib/utils';

	import { width, height, getGridPattern } from './grid';

	let x = -1;
	let y = -1;
	let strokeDashArray: string = '';

	const { ...restProps } = $props();

	let id = `grid-pattern-${Math.random().toString(36).slice(2, 10)}`;
	let fillColor = 'rgb(156 163 175 / 0.3)';

	let strokeWidth = 1;
</script>

<svg
	aria-hidden="true"
	class={cn('pointer-events-none  absolute inset-0 h-full w-full')}
	{...restProps}
	stroke={fillColor}
	stroke-width={strokeWidth}
>
	<defs>
		<pattern {id} {width} {height} patternUnits="userSpaceOnUse" {x} {y}>
			<path d="M.5 {height}V.5H{width}" fill="none" stroke-dasharray={strokeDashArray} />
		</pattern>
	</defs>
	<rect width="100%" height="100%" stroke-width={0} fill="url(#{id})" />
	{#if getGridPattern()}
		<svg {x} {y} class="sdas-visible">
			{#each getGridPattern() as sq}
				<rect
					class="bar dark:shadow"
					aria-label="Square"
					width={width - 1}
					height={height - 1}
					x={sq[0] * width + 1}
					y={sq[1] * height + 1}
				>
				</rect>
			{/each}
		</svg>
	{/if}
</svg>

<style>
	.bar {
		fill: none !important;
		pointer-events: all !important;
		stroke-width: 0 !important;
		&:hover {
			fill: theme('colors.primary') !important;
			stroke-width: 1px !important;
		}
	}
</style>
