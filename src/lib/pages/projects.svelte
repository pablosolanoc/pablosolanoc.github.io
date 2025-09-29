<script lang="ts">
	import TiltedBanner from '$lib/TiltedBanner/TiltedBanner.svelte';
	import Typography from '$lib/Typography/Typography.svelte';
	import { NeonEnum } from '$lib/Typography/Typography.types';
	import type { ProjectsType } from './type';

	const projects: ProjectsType[] = [
		{
			title: 'Amcor Design (Now Laruci)',
			role: 'Junior Frontend Developer',
			description: 'Junior Frontend Developer',
			link: 'https://www.laruci.com/',
			image: 'amcor-banner.png',
			id: 1
		},
		{
			title: 'Summit Broadband - My Account',
			role: 'Frontend Lead Developer',
			description:
				'Built and led the front-end team for a large-scale web app at Summit Broadband. I streamlined dozens of APIs into a unified UI, restructured micro-frontends into a single app, and implemented features like 2FA, account session control, and dynamic form handling. Also led product demos and API strategy meetings in both english and spanish .',
			link: 'https://summit-broadband.com/my-account/',
			image: 'summit-banner.png',
			id: 2
		},
		{
			title: 'Avanti Cockpit',
			role: 'FullStack Lead Developer',
			description:
				'Built and led the front-end team for a large-scale web app at Summit Broadband. I streamlined dozens of APIs into a unified UI, restructured micro-frontends into a single app, and implemented features like 2FA, account session control, and dynamic form handling. Also led product demos and API strategy meetings in English.',
			link: 'https://tourcert.avanti.vision',
			image: 'avanti-banner.png',
			id: 3
		},
		{
			title: "Disney's Ensemble",
			role: 'Web UI Developer SSR',
			description: "Internal tool for Disney's handling of bookings and finance information",
			// link: 'https://ensemble.disney.com/app/login.html',
			image: 'ensemble-banner.png',
			id: 4
		},
		{
			title: "Disney's SpellBook",
			role: 'Web UI Developer SSR',
			description: "UI Library with hundred of components for Disney's project development",
			// link: 'Internal usage only',
			image: 'spellbook-banner.png',
			id: 5
		}
	];
</script>

<div
	class="pt-5 pb-40 relative flex flex-col skew w-full bg-[red]-comment justify-center items-center mt-10 outlier:max-w-[1920px]"
	id="projects"
>
	<Typography
		dataScrollSpeed="0.05"
		variant="h1"
		class="z-10 text-full sm:!text-7xl text-center mb-5"
		neonType={NeonEnum.primary}
		gradient>What I've built</Typography
	>
	<div class=" justify-center w-full flex mt-5 flex-wrap lg:flex-nowrap overflow-hidden">
		{#each projects as project}
			<TiltedBanner {project} />
		{/each}
	</div>
</div>
