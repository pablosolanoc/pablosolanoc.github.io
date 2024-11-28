<script lang="ts">
	import Button from '$lib/Button/Button.svelte';
	import { ButtonTypeEnum } from '$lib/Button/Button.types';
	import Metric from '$lib/Metric/Metric.svelte';
	import type { MetricType } from '$lib/Metric/Metric.svelte';
	import SocialMedia from '$lib/SocialMedia/SocialMedia.svelte';
	import Typography from '$lib/Typography/Typography.svelte';

	import me from '$lib/assets/me.png';
	import CarouselHorizontal from '@tabler/icons-svelte/icons/carousel-horizontal';
	import Download from '@tabler/icons-svelte/icons/download';

	const aboutMeMetrics: MetricType[] = [
		{ title: 'Years of Experience', metric: '4+' },
		{ title: 'Years of Experience', metric: '4+' },
		{ title: 'hours of advanced training', metric: '100+' },
		{ title: 'Industries server', metric: '4' }
	];
</script>

<div class="w-full bg-[red]-comment flex justify-center mt-24">
	<div class="flex flex-col">
		<div class="flex flex-col md:flex-row justify-center items-center">
			<div class="flex w-10/12 md:flex md:w-5/12 md:bg-[yellow]-comment flex-col justify-center">
				<div class="">
					<div class="flex items-center">
						<Typography
							variant="h2"
							class="lg:text-4xl mr-2 border-0 hover:border-b-2 group relative"
							animatedUnderline
							>Hi ! I am Pablo
						</Typography>
						<SocialMedia />
					</div>
					<Typography variant="h1" class="lg:text-7xl mt-4"
						>I'm a Full-Stack Software Engineer</Typography
					>
					<Button buttonStyleType={ButtonTypeEnum.shell} class="flex mt-12">
						Download CV <Download class="ml-2" />
					</Button>
				</div>
			</div>
			<div
				class="flex w-10/12 md:flex md:w-5/12 bg-[green]-comment justify-center items-center mt-6 md:mt-0"
			>
				<img
					alt="Pablo Solano"
					src={me}
					class="object-cover w-4/5 lg:w-3/5
            rounded-xl border-2
            hover:border-primary hover:border-4
            rotate-3
            hover:rotate-0
            ease-in-out
            duration-150"
				/>
			</div>
		</div>
		<div
			class="flex flex-row flex-wrap md:flex-nowrap justify-around md:justify-evenly mt-12 w-full"
		>
			{#each aboutMeMetrics as abtMeMetric}
				<Metric {...abtMeMetric}></Metric>
			{/each}
		</div>
	</div>
</div>
