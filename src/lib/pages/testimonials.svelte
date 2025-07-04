<script>
	import Typography from '$lib/Typography/Typography.svelte';
	import { NeonEnum } from '$lib/Typography/Typography.types';
</script>

<div class="w-full bg-[red] flex justify-center md:mt-32 outlier:max-w-[1920px]" id="testimonials">
	<div class="w-4/5 flex">
		<div class="w-1/3 flex flex-col justify-center">
			<Typography
				dataScrollSpeed="0.05"
				variant="h1"
				class="z-10 !text-7xl text-center mb-5"
				neonType={NeonEnum.primary}
				gradient>Testimonials</Typography
			>
		</div>
		<div class="w-2/3"></div>
	</div>
</div>
