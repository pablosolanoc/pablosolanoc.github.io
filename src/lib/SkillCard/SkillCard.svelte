<script module lang="ts">
	export type SkillCardProps = {
		skill: { name: string; logo: typeof IconBrandReact | typeof NestJsIcon; fill?: boolean };
	};
</script>

<script lang="ts">
	import MagicCard from '$lib/MagicCard/MagicCard.svelte';
	import Typography from '$lib/Typography/Typography.svelte';
	import type { IconBrandReact } from '@tabler/icons-svelte';
	import { appState } from '../../routes/+layout.svelte';
	import NestJsIcon from '$lib/Icons/NestJSIcon.svelte';

	let { skill }: SkillCardProps = $props();

	const fillClassesDarkMode = skill.fill ? 'fill-[white]' : '';
	const fillClasses = skill.fill ? 'fill-secondary' : '';

	let isHovered = $state(false);
	let stroke = $derived(
		appState.isDarkMode
			? isHovered
				? `stroke-[white] ${fillClassesDarkMode}`
				: `stroke-[white] ${fillClassesDarkMode} shadow`
			: isHovered
				? `stroke-[white] ${fillClassesDarkMode}`
				: `stroke-secondary ${fillClasses}`
	);
</script>

<MagicCard
	class="flex flex-col mx-3 hover:border-primary rounded-xl justify-center items-center duration-slow bg-[yellow]-comment border-0 md:border  transition-all my-3 py-4"
	gradientSize={300}
	doTilt
>
	<div
		role="banner"
		class={`flex sm:min-w-[10rem] sm:max-w-[10rem]  flex-col justify-center items-center`}
		onmouseenter={() => (isHovered = true)}
		onmouseleave={() => (isHovered = false)}
	>
		<skill.logo class={`${stroke} size-10 md:size-14`} stroke={1} />
		<Typography
			variant="h2"
			class="!text-sm !w-full hidden sm:block text-center mt-2 group-hover:text-secondary capitalize leading-5"
			gradient
			>{skill.name}
		</Typography>
	</div>
</MagicCard>
