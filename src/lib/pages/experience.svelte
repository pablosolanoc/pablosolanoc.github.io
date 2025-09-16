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
			logo: '/company/globant.webp',
			roles: [{ roleName: 'Ssr Software Engineer', timeRange: ['Jun. 2024', 'Present'] }]
		},
		{
			name: 'Kruger',
			color: 'bg-[#ff4800]',
			bgColor: '#ff4800',
			logo: '/company/kruger.webp',
			roles: [
				{ roleName: 'Technical Leader', timeRange: ['Jul. 2023', 'Jun. 2024'] },
				{ roleName: 'Front End Leader', timeRange: ['Aug. 2022', 'Jul. 2023'] }
			]
		},
		{
			name: 'AmcorDesign',
			color: 'bg-[#41c1f0]',
			bgColor: '#41c1f0',
			logo: '/company/amcor.webp',
			roles: [{ roleName: 'Junior Software Engineer', timeRange: ['Mar. 2022', 'Aug. 2022'] }]
		}
	];
</script>

<div
	class="flex flex-col-reverse md:flex-row skew w-full bg-[red]-comment justify-center mt-10 outlier:max-w-[1920px]"
	id="experience"
>
	<div class="flex justify-center z-20 w-full md:w-[40%]">
		<div
			class="md:skew-x-[-16deg] flex text-[#e9e8e8] w-full max-w-96 bg-[blue]-comment flex-col items-center"
		>
			{#each experienceData as expData}
				<ExperienceCard data={expData} />
			{/each}
		</div>
	</div>
	<div
		data-scroll
		data-scroll-speed="0.3"
		class="flex flex-col justify-center md:items-center my-10 w-full md:w-[40%] z-10"
	>
		<Typography
			variant="h1"
			class="!text-full sm:!text-7xl text-center"
			gradient
			neonType={NeonEnum.primary}>Experience</Typography
		>
	</div>
</div>
