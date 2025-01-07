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

	import { appState } from '../../routes/+layout.svelte';

	const { metric, title, additional, initialValueForAnimation }: MetricProps = $props();
</script>

<MagicCard
	class="flex hover:border-primary justify-center items-center duration-slow bg-[yellow]-comment border-0 md:border  transition-all"
	gradientSize={300}
>
	<div class="flex justify-center items-center px-12">
		<Typography variant="h1" class="text-6xl group-hover:text-secondary md:text-7xl lg:text-7xl"
			><NumberTicker
				class="group-hover:text-secondary"
				value={Number(metric)}
				initial={Number(initialValueForAnimation ?? 0)}
			></NumberTicker>{additional}
		</Typography>
		<Typography variant="p" class="ml-2 group-hover:text-secondary w-[3rem] capitalize leading-5"
			>{title}</Typography
		>
	</div>
</MagicCard>
