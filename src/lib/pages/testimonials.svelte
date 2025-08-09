<script lang="ts">
	import TestimonialCard from '$lib/TestimonialCard/TestimonialCard.svelte';
	import Typography from '$lib/Typography/Typography.svelte';
	import { NeonEnum } from '$lib/Typography/Typography.types';
	import { onDestroy, onMount } from 'svelte';

	import { createSwapy, type Swapy } from 'swapy';

	let container: HTMLElement | null = null;
	let swapy: Swapy | null = null;

	onMount(() => {
		if (container) {
			swapy = createSwapy(container, {
				autoScrollOnDrag: true
				// swapMode: 'drop'
			});

			swapy.onSwap((event) => {
				console.log('Swapped:', event);
			});
		}
	});

	onDestroy(() => {
		if (swapy) {
			swapy.destroy();
		}
	});

	const testimonials = [
		{
			id: 'testimonial-1',
			testimonial: `"Pablo is such a productive, very detailed Front-end Developer. Working with him brings creativity to solve problems into a project. I highly recommend his work. It won't be hard for him to adapt to a team." `,
			author: 'Igor Chinchay',
			position: 'Frontend Engineer',
			company: 'Globant',
			logo: 'globant.png'
		},
		{
			id: 'testimonial-2',
			testimonial: `"Pablo is a proactive professional who collaborates dynamically with the team to achieve goals. He is also highly self-taught and solves problems with ease. These skills allow him to grow rapidly and satisfy clients in changing environments."`,
			author: 'Sara Vásquez Valarezo',
			position: 'Project Manager',
			company: 'Kruger',
			logo: 'kruger.png'
		},
		{
			id: 'testimonial-3',
			testimonial: `"I've had the privilege of working with Pablo since the early days of Ekolabs, and he consistently delivers exceptional quality work on time, every time. His commitment to continuous improvement and professional excellence makes him an invaluable team member. Pablo combines technical expertise with genuine integrity, as a professional and as a person. Any organization would be fortunate to work with him.""`,
			author: 'David Santos',
			position: 'Principal Consultant at ThoughtWorks',
			company: '',
			logo: 'kruger.png'
		}
	];
</script>

<div class="w-full flex justify-center md:mt-32 outlier:max-w-[1920px] mt-10" id="testimonials">
	<div class="w-10/12 flex flex-col lg:flex-row flex-wrap">
		<div class="w-full xl:w-1/3 flex flex-col justify-center">
			<Typography
				dataScrollSpeed="0.05"
				variant="h1"
				class="z-10 !text-full sm:!text-7xl text-left mb-5 break-words"
				neonType={NeonEnum.primary}
				gradient>Testimonials</Typography
			>
			<Typography dataScrollSpeed="0.05" variant="h2" class="!text-xl !break-words"
				>I've worked with a lot of teams during my time...</Typography
			>
			<Typography dataScrollSpeed="0.05" variant="h3" class="!text-xl font-normal !break-words"
				>Check out what they have to say</Typography
			>
		</div>

		<div
			class="w-full xl:w-2/3 mt-14 xl:mt-0 md:flex xl:flex-col justify-center flex-wrap xl:flex-wrap-reverse xl:h-auto xl:max-h-[150vh]"
			bind:this={container}
		>
			{#each testimonials as testimonial}
				<TestimonialCard {testimonial} />
			{/each}
		</div>
	</div>
</div>
