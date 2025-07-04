<script module lang="ts">
	export type MetricType = {
		title: string;
		additional?: string;
		metric: number | string;
		initialValueForAnimation?: number | string;
	};

	type MetricProps = MetricType;
</script>

<script lang="ts">
	import MagicCard from '$lib/MagicCard/MagicCard.svelte';
	import NumberTicker from '$lib/NumberTicker/NumberTicker.svelte';

	import Typography from '$lib/Typography/Typography.svelte';

	const { metric, title, additional, initialValueForAnimation }: MetricProps = $props();
</script>

<MagicCard
	class="flex hover:border-primary justify-center   rounded-xl items-center duration-slow bg-[yellow]-comment border-0 md:border  transition-all"
	gradientSize={300}
	tiltScale={1.1}
>
	<div class="flex justify-center items-center px-12 py-4">
		<Typography
			variant="h1"
			class="text-6xl group-hover:text-secondary-comment md:text-7xl lg:text-7xl"
			><NumberTicker
				class="group-hover:text-secondary-comment"
				value={Number(metric)}
				initial={Number(initialValueForAnimation ?? 0)}
			></NumberTicker>{additional}
		</Typography>
		<Typography
			variant="p"
			class="ml-2 group-hover:text-secondary-comment w-[3rem] capitalize leading-5 font-bold"
			>{title}</Typography
		>
	</div>
</MagicCard>
