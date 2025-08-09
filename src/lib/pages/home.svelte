<script lang="ts">
	import Anchor from '$lib/Anchor/Anchor.svelte';
	import Button from '$lib/Button/Button.svelte';
	import { ButtonTypeEnum } from '$lib/Button/Button.types';

	import Metric from '$lib/Metric/Metric.svelte';
	import type { MetricType } from '$lib/Metric/Metric.svelte';
	import SocialMedia from '$lib/SocialMedia/SocialMedia.svelte';
	import Typography from '$lib/Typography/Typography.svelte';
	import { NeonEnum } from '$lib/Typography/Typography.types';

	import Download from '@tabler/icons-svelte/icons/download';

	const aboutMeMetrics: MetricType[] = [
		{ title: 'Years of Experience', metric: 4, additional: '+' },
		{
			title: 'hours of advanced training',
			metric: 100,
			additional: '+',
			initialValueForAnimation: 60
		},
		{ title: 'Industries served', metric: 4 }
	];
</script>

<div class="w-full bg-[red]-comment flex justify-center md:mt-32 outlier:max-w-[1920px]" id="home">
	<div data-scroll data-scroll-section class="flex flex-col w-full">
		<div class="flex flex-col-reverse md:flex-row justify-center items-center">
			<div
				class="flex w-10/12 md:flex md:w-5/12 xl:w-5/12 md:bg-[yellow]-comment flex-col justify-center"
			>
				<div data-scroll data-scroll-speed="0.9" class="">
					<div
						class="z-20 flex items-center flex-col-reverse md:flex-row bg-lightMode dark:bg-darkMode p-4"
					>
						<Typography variant="h2" class="lg:text-4xl mr-2 text-center" animatedUnderline
							>Hi ! I am Pablo
						</Typography>
						<div class="flex">
							<SocialMedia />
						</div>
					</div>
					<div
						data-scroll
						data-scroll-speed="0.1"
						class="min-h-64 flex md:block flex-col items-center !z-10"
					>
						<Typography variant="h1" class="break-keep text-center md:text-left">I'm a</Typography>
						<Typography
							variant="h1"
							class="!text-full !break-words sm:!text-7xl text-center md:text-left "
							neonType={NeonEnum.extra}>Full Stack Developer</Typography
						>
						<Anchor
							target="_blank"
							href={'https://github.com/pablosolanoc/CV/blob/main/Pablo%20Solano_En.pdf'}
							anchorStyleType={ButtonTypeEnum.shell}
							class="!flex mt-6 justify-center !w-[70%] sm:!w-[15rem]"
						>
							Download CV <Download class="ml-2" />
						</Anchor>
					</div>
				</div>
			</div>
			<div
				data-scroll
				data-scroll-speed="0.3"
				class="ease-in-out duration-100 flex w-8/12 sm:w-8/12 md:w-6/12 lg:w-6/12 xl:w-4/12 h-full min-h-[50vw] md:min-h-[0] bg-[green]-comment mt-6 md:mt-0 box-border justify-center items-center mb-12 md:mb-0"
			>
				<div class="flex md:flex w-4/5 lg:w-3/5 h-full relative justify-center items-center">
					<img
						alt="Pablo Solano"
						srcset="/me-400.webp 400w, /me-600.webp 600w, /me-800.webp 800w, /me-1200.webp 1200w"
						sizes="(max-width: 640px) 66vw, (max-width: 768px) 66vw, (max-width: 1024px) 50vw, (max-width: 1280px) 40vw, 33vw"
						class="object-cover w-full h-full md:h-auto rounded-xl border-2 hover:border-primary hover:border-4
					box-border rotate-3 hover:rotate-0 ease-in-out duration-150"
					/>
				</div>
			</div>
		</div>
		<div
			data-scroll
			data-scroll-speed="0.4"
			class="flex flex-row flex-wrap md:flex-nowrap justify-around md:justify-evenly md:mt-24 w-full"
		>
			{#each aboutMeMetrics as abtMeMetric}
				<Metric {...abtMeMetric}></Metric>
			{/each}
		</div>
	</div>
</div>
