<script lang="ts">
	import type { ProjectsType } from '$lib/pages/type';
	import { getIdHovered, setIdHovered } from '$lib/pages/utils/projects.svelte';

	import Typography from '$lib/Typography/Typography.svelte';
	import BellQuestion from '@tabler/icons-svelte/icons/bell-question';
	import type { Snippet } from 'svelte';
	import { slide } from 'svelte/transition';
	import { fade, fly } from 'svelte/transition';

	interface TiltedBannerProps {
		children?: Snippet;
		project: ProjectsType;
	}

	let { project }: TiltedBannerProps = $props();

	let visible = $derived(getIdHovered() === project.id);

	const onMouseOverImage = (indexHovered: number | null) => {
		setIdHovered(indexHovered);
	};
</script>

<div class="relative w-full md:w-[50%] h-[80vh] overflow-hidden skew-x-[-7deg] shadow-md right-5">
	{#if visible}
		<button
			class:notVisible={!visible}
			class:visible
			in:fly={{ opacity: 1, x: 100, y: 100 }}
			out:fade
			class="absolute top-0 z-50 bg-[gray] bg-opacity-80 w-full h-[80vh] overflow-visible"
			onmouseleave={() => onMouseOverImage(null)}
		>
			<Typography
				variant="h3"
				class=" text-white !text-full sm:!text-md !bg-opacity-20-comment h-[80vh] !bg-[purple] sm:p-10 "
				>{project.description}</Typography
			>
		</button>
	{/if}

	<img
		onmouseenter={() => onMouseOverImage(project.id)}
		transition:slide
		src={project.image}
		alt={project.title}
		class="w-full h-[80vh] object-cover skew-x-[7deg] clip border-10"
	/>
</div>

<style>
	.clip {
		clip-path: polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%);
	}
	.visible {
		display: block;
	}
	.notVisible {
		display: none;
	}
</style>
