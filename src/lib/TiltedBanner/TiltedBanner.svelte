<script lang="ts">
	import type { ProjectsType } from '$lib/pages/type';
	import { getIdHovered, setIdHovered } from '$lib/pages/utils/projects.svelte';

	import Typography from '$lib/Typography/Typography.svelte';
	import { cn } from '$lib/utils';
	import { trackProjectClick } from '$lib/utils/analytics';
	import type { Snippet } from 'svelte';
	import { slide } from 'svelte/transition';
	import { fade, fly } from 'svelte/transition';

	import IconPlayerPlayFilled from '@tabler/icons-svelte/icons/player-play-filled';

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

<div class={cn('mx-4 relative w-full md:w-[50%] h-[80vh] skew-x-[-7deg] right-5 ')}>
	{#if visible}
		<button
			class:notVisible={!visible}
			class:visible
			in:fly={{ opacity: 1, x: 100, y: 100 }}
			out:fade
			class="absolute top-0 z-50 bg-[gray] bg-opacity-80 w-full h-[80vh] overflow-visible flex flex-col"
			onmouseleave={() => onMouseOverImage(null)}
			onclick={() => {
				trackProjectClick(project.title);
				if (project.link) {
					window.open(project.link, '_blank');
				}
			}}
		>
			<Typography
				variant="h3"
				class=" text-white !text-full sm:!text-md !bg-opacity-50 h-[80vh] !bg-primary sm:p-10 flex flex-col justify-center items-center"
			>
				<span class="mb-4 underline"> {project.title}</span>
				{#if project.link}
					<IconPlayerPlayFilled class="w-[30%] h-auto mt-3" />
				{:else}
					{project.description}
				{/if}
			</Typography>
		</button>
	{/if}

	<button class={cn()}>
		<img
			onmouseenter={() => onMouseOverImage(project.id)}
			transition:slide
			src={project.image}
			alt={project.title}
			class={'w-full h-[80vh] object-cover skew-x-[7deg] clip border-10'}
		/>
	</button>
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
