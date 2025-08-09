<script lang="ts">
	import GridPattern from '$lib/GridPattern/GridPattern.svelte';
	import NestJsIcon from '$lib/Icons/NestJSIcon.svelte';

	import SkillCard from '$lib/SkillCard/SkillCard.svelte';
	import Typography from '$lib/Typography/Typography.svelte';
	import { NeonEnum } from '$lib/Typography/Typography.types';

	import {
		IconBrandCss3,
		IconBrandHtml5,
		IconBrandJavascript,
		IconBrandNodejs,
		IconBrandReact,
		IconBrandRedux,
		IconBrandTypescript,
		IconTestPipe,
		IconBrandTailwind,
		IconBrandSass,
		IconBrandNextjs,
		IconBrandVue,
		IconBrandSvelte,
		IconBrandGit,
		IconBrandGithub,
		IconBrandGitlab,
		IconBrandBitbucket,
		IconBrandDocker
	} from '@tabler/icons-svelte';
	import BrandAws from '@tabler/icons-svelte/icons/brand-aws';

	const skills: {
		name: string;
		logo: typeof IconBrandReact | typeof NestJsIcon;
		fill?: boolean;
	}[] = [
		{ name: 'React/React Native', logo: IconBrandReact },

		{ name: 'Typescript', logo: IconBrandTypescript },
		{ name: 'Javascript', logo: IconBrandJavascript },

		{ name: 'Tailwind', logo: IconBrandTailwind },
		{ name: 'Saas', logo: IconBrandSass },

		{ name: 'Next.js', logo: IconBrandNextjs },

		{ name: 'Jest/Vitest/Testing libraries', logo: IconTestPipe },

		{ name: 'Node.js', logo: IconBrandNodejs },

		{ name: 'State Management', logo: IconBrandRedux },

		{ name: 'Vue.js', logo: IconBrandVue },
		{ name: 'Svelte', logo: IconBrandSvelte },

		{ name: 'Git', logo: IconBrandGit },
		{ name: 'Github', logo: IconBrandGithub },
		{ name: 'Gitlab', logo: IconBrandGitlab },
		{ name: 'Bitbucket', logo: IconBrandBitbucket },

		{ name: 'Html5', logo: IconBrandHtml5 },
		{ name: 'Css3', logo: IconBrandCss3 },
		{ name: 'NestJS', logo: NestJsIcon, fill: true },
		{ name: 'Docker', logo: IconBrandDocker },
		{ name: 'AWS', logo: BrandAws }
	];
</script>

<div
	class="pt-10 pb-40 relative flex flex-col skew w-full bg-[red]-comment justify-center items-center mt-32 outlier:max-w-[1920px]"
	id="skills"
>
	<div
		class="z-10 h-[20%] w-full absolute top-[0] bg-gradient-to-b from-[white] dark:from-darkMode to-[transparent] dark:to-[transparent] pointer-events-none"
	></div>
	<GridPattern></GridPattern>

	<Typography
		dataScrollSpeed="0.05"
		variant="h1"
		class="z-10 !text-4xl sm:!text-7xl text-center"
		neonType={NeonEnum.primary}
		gradient>Skills</Typography
	>
	<Typography
		dataScrollSpeed="0.05"
		variant="h2"
		class="z-10 !text-2xl text-center mt-10 !break-words"
		>Tools and Technologies I use constantly</Typography
	>
	<div
		class="flex justify-around w-[80%] flex-wrap mt-8 items-center max-h-[100vh] md:overflow-visible md:max-h-auto"
	>
		{#each skills as skill, index}
			<div data-scroll data-scroll-speed={`${0.2 - 0.01 * index}`}>
				<SkillCard {skill} />
			</div>
		{/each}
	</div>
	<div
		class="z-5 h-[30%] absolute w-full bottom-[0] bg-gradient-to-b from-[transparent] dark:from-[transparent] to-[white] dark:to-darkMode pointer-events-none"
	></div>
</div>
