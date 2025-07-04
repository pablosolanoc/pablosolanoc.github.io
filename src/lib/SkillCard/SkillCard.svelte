<script module lang="ts">
	export type SkillCardProps = {
		skill: { name: string; logo: typeof IconBrandReact };
	};
</script>

<script lang="ts">
	import MagicCard from '$lib/MagicCard/MagicCard.svelte';
	import Typography from '$lib/Typography/Typography.svelte';
	import type { IconBrandReact } from '@tabler/icons-svelte';
	import { appState } from '../../routes/+layout.svelte';

	let { skill }: SkillCardProps = $props();

	let isHovered = $state(false);
	let stroke = $derived(
		appState.isDarkMode
			? isHovered
				? 'stroke-[white] '
				: 'stroke-[white] shadow'
			: isHovered
				? 'stroke-[white]'
				: 'stroke-secondary'
	);
</script>

<MagicCard
	class="flex flex-col mx-3 hover:border-primary rounded-xl justify-center items-center duration-slow bg-[yellow]-comment border-0 md:border  transition-all my-3 py-4"
	gradientSize={300}
	doTilt
>
	<div
		role="banner"
		class={`flex  min-w-[10rem] max-w-[10rem] flex-col justify-center items-center my-4}`}
		onmouseenter={() => (isHovered = true)}
		onmouseleave={() => (isHovered = false)}
	>
		<skill.logo class={`${stroke} `} size={60} stroke={1} />
		<Typography
			variant="h2"
			class="!text-sm !w-full  text-center mt-2 group-hover:text-secondary capitalize leading-5"
			gradient
			>{skill.name}
		</Typography>
	</div>
</MagicCard>
