<script lang="ts">
	import ExperienceCard from '$lib/ExperienceCard/ExperienceCard.svelte';
	import type { ExperienceEntry } from '$lib/ExperienceCard/ExperienceCard.types';
	import Typography from '$lib/Typography/Typography.svelte';
	import { NeonEnum } from '$lib/Typography/Typography.types';

	const experienceData: ExperienceEntry[] = [
		{
			name: 'Globant',
			color: 'bg-[#bfd732]',
			bgColor: '#bfd732',
			logo: 'globant.png',
			roles: [{ roleName: 'Web Developer UI', timeRange: ['Sep 2016', 'Sep 2017'] }]
		},
		{
			name: 'Kruger',
			color: 'bg-[#ff4800]',
			bgColor: '#ff4800',
			logo: 'kruger.png',
			roles: [
				{ roleName: 'Technical Leader', timeRange: ['Sep 2016', 'Sep 2017'] },
				{ roleName: 'Front End Leader', timeRange: ['Sep 2018', 'Sep 2019'] }
			]
		},
		{
			name: 'AmcorDesign',
			color: 'bg-[#41c1f0]',
			bgColor: '#41c1f0',
			logo: 'amcor.png',
			roles: [{ roleName: 'Technical Leader', timeRange: ['Sep 2015', 'Sep 2016'] }]
		}
	];
</script>

<div
	class="flex flex-col-reverse md:flex-row skew w-full bg-[red]-comment justify-center mt-10 outlier:max-w-[1920px]"
	id="experience"
>
	<div class="flex justify-center">
		<div class="md:skew-x-[-16deg] flex text-[#e9e8e8] w-96 bg-[blue]-comment flex-col">
			{#each experienceData as expData}
				<ExperienceCard data={expData} />
			{/each}
		</div>
	</div>
	<div data-scroll data-scroll-speed="0.7" class="flex flex-col justify-center my-10">
		<Typography
			variant="h1"
			class="!text-7xl ml-10 text-center "
			gradient
			neonType={NeonEnum.primary}>Experience</Typography
		>
	</div>
</div>
