<script lang="ts">
	import MagicCard from '$lib/MagicCard/MagicCard.svelte';
	import Typography from '$lib/Typography/Typography.svelte';

	const {
		testimonial
	}: {
		testimonial: {
			id: string;
			testimonial: string;
			author: string;
			position: string;
			company: string;
			logo: string;
		};
	} = $props();
</script>

<div data-swapy-slot={testimonial.id} class={'w-full md:w-1/2'}>
	<div data-swapy-item={testimonial.id}>
		<MagicCard
			gradientSize={900}
			class={`drop-shadow-3xl hover:drop-shadow-sm inset-shadow-sm inset-shadow-indigo-500 hover:shadow-lg ease-in-out mt-10 card p-10 m-2 rounded-lg `}
			doTilt={false}
			tiltScale={1.01}
			gradientOpacity={900}
		>
			<img
				alt={`${testimonial.company} logo`}
				class="w-[5rem] h-auto rounded-full m-2 object-contain"
				src={testimonial.logo}
			/>
			<Typography variant="p" class="mt-2">
				{testimonial.testimonial}
			</Typography>
			<div class="flex flex-col mt-6 ml-2">
				<Typography variant="h2" class="text-xl">{testimonial.author}</Typography>
				<Typography variant="p" class="!mt-0">{testimonial.position}</Typography>
			</div>
		</MagicCard>
	</div>
</div>

<style>
</style>
