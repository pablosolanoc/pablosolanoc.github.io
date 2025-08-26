<script lang="ts">
	import Anchor from '$lib/Anchor/Anchor.svelte';
	import Button from '$lib/Button/Button.svelte';
	import { ButtonTypeEnum } from '$lib/Button/Button.types';
	import Typography from '$lib/Typography/Typography.svelte';
	import type { WritingEntry } from './types';

	interface Category {
		id: string;
		name: string;
	}

	const { data }: { data: { writingEntriesToShow: WritingEntry[] } } = $props();

	const categories: Category[] = [
		{ id: 'all', name: 'All' },
		{ id: 'writing', name: 'Writing' }
	];

	let selectedCategory = $state('all');

	const filteredEntries = $derived(() => {
		if (selectedCategory === 'all') {
			return data.writingEntriesToShow;
		}
		return data.writingEntriesToShow.filter((entry) => entry.category === selectedCategory);
	});

	const selectCategory = (categoryId: string) => {
		selectedCategory = categoryId;
	};
</script>

<svelte:head>
	<title>Writing - Pablo's Portfolio</title>
	<meta
		name="description"
		content="Thoughts, insights, and experiences from my journey in software development, and things that come from my mind and heart"
	/>
</svelte:head>

<div class="w-full h-full py-20">
	<div class="w-full mx-auto px-4 md:px-6 lg:px-8">
		<div class="flex flex-col w-full lg:flex-row gap-12 justify-center items-start">
			<!-- Categories -->

			<div class="rounded-xl p-6 sticky top-24">
				<nav class="flex flex-row lg:flex-col">
					{#each categories as category}
						<Button
							buttonStyleType={selectedCategory === category.id
								? ButtonTypeEnum.fill
								: ButtonTypeEnum.shell}
							onclick={() => selectCategory(category.id)}
							class="w-full mx-1 flex flex-auto items-center justify-between px-4 py-3 text-left rounded-lg"
						>
							{selectedCategory === category.id ? '*' : ''}
							{category.name}
						</Button>
					{/each}
				</nav>
			</div>

			<!-- Writing entries -->
			<div class="lg:w-4/4 max-w-[800px] md:min-w-[800px] p-2">
				<div class="space-y-2">
					{#each filteredEntries() as entry}
						<Anchor
							anchorStyleType={ButtonTypeEnum.default}
							class="flex flex-col sm:flex-row items-start sm:items-center py-2 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-colors"
							href={`/entry/${entry.route}`}
						>
							<Typography
								variant="p"
								class="text-lg p-2 font-medium text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors "
							>
								{entry.title}
							</Typography>
							<div
								class="flex-1 mx-4 border-b border-dotted border-gray-300 dark:border-gray-600"
							></div>
							<span
								class="text-sm self-end text-gray-500 dark:text-gray-400 whitespace-nowrap flex-shrink-0"
							>
								{new Date(entry.dateWritten).toLocaleDateString('en-US', {
									year: 'numeric',
									month: 'short',
									day: 'numeric'
								})}
							</span>
						</Anchor>
					{/each}

					{#if filteredEntries().length === 0}
						<div class="text-center py-12">
							<p class="text-gray-500 dark:text-gray-400 text-lg">
								No entries found for this category.
							</p>
						</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>
