<script>
	import MagicCard from '$lib/MagicCard/MagicCard.svelte';

	// Credit to https://animation-svelte.vercel.app/magic/magic-card
	// import SvelteSvg from '$lib/svg/web/svelte.svg';
</script>

<div class="flex w-full flex-col gap-4 h-[250px] lg:flex-row">
	<MagicCard
		class="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl group hover:border-[#2effbd9e] transition-all duration-300"
		gradientColor="#043634"
		gradientSize={300}
	>
		<div
			class="group-hover:text-[#2EFFBD] transition-all duration-500 flex gap-1.5 justify-center items-center font-semibold"
		>
			Supabase
		</div>
	</MagicCard>
	<MagicCard
		class="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl group hover:border-[#ff770094] transition-all duration-300"
		gradientColor="#4D2506"
	>
		<div
			class="group-hover:text-[#FF7700] transition-all duration-500 flex gap-1.5 justify-center items-center font-semibold"
		>
			Svelte
		</div>
	</MagicCard>
</div>
