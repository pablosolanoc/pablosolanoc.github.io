<script lang="ts">
	import type { ExperienceEntry } from './ExperienceCard.types';

	import Typography from '$lib/Typography/Typography.svelte';
	import { TypographyEnum } from '$lib/Typography/Typography.types';
	import MagicCard from '$lib/MagicCard/MagicCard.svelte';

	interface ExperienceCardProps {
		data: ExperienceEntry;
	}

	const { data }: ExperienceCardProps = $props();

	const { roles, color, logo, name } = data;
</script>

<div data-scroll data-scroll-speed="0.07" class="w-full flex p-1 hover:hola">
	<div class={`w-7 ${color} rounded-l-md md:rounded-none`}></div>
	<div class="w-full">
		{#each roles as role}
			<MagicCard
				class="w-full dark:bg-gray-900  opacity-90 bg-[yellow]-comment transition-all duration-500 flex flex-col !shadow-2xl"
				gradientSize={300}
				gradientColor={data.bgColor}
				doTilt
			>
				<div class="h-full flex justify-between bg-[orange]-comment py-4">
					<Typography variant={TypographyEnum.h3} class="group-hover:text-sa ml-2"
						>{role.roleName}</Typography
					>
					<div
						class="flex justify-center dark:bg-gray-500 bg-[white] rounded-full doNotSkew w-20 h-20"
					>
						<img
							alt={`${name} logo`}
							class="w-[80%] h-[80%] rounded-full m-2 object-contain"
							src={logo}
						/>
					</div>
				</div>
				<div class="py-2 w-full bg-[white]-comment flex justify-end">
					<Typography
						variant="h3"
						class={'bg-primary dark:bg-transparent w-full text-right text-[white] text-lg'}
					>
						{role.timeRange[0]} - {role.timeRange[1]}
					</Typography>
				</div>
			</MagicCard>
		{/each}
	</div>
</div>

<style>
	.doNotSkew {
		-webkit-transform: skew(0, 0);
		transform: skew(0, 0);
		@media (min-width: 640px) {
			-webkit-transform: skew(16deg, 0);
			transform: skew(16deg, 0);
		}
	}
</style>
