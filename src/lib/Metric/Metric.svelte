<script module lang="ts">
	export type MetricType = {
		title: string;
		metric: string;
	};

	type MetricProps = MetricType;
</script>

<script lang="ts">
	import Typography from '$lib/Typography/Typography.svelte';

	const { metric, title }: MetricProps = $props();
</script>

<div class="flex justify-center items-center w-full sm:w-[40%] md:w-full bg-[yellow]-comment">
	<Typography variant="h1" class="text-6xl md:text-7xl lg:text-7xl">{metric}</Typography>
	<Typography variant="p" class="ml-2 w-[3rem] capitalize leading-5">{title}</Typography>
</div>
