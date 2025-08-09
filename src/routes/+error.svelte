<script lang="ts">
	import { page } from '$app/stores';
	import Typography from '$lib/Typography/Typography.svelte';
	import { NeonEnum, TypographyEnum } from '$lib/Typography/Typography.types';
	import Anchor from '$lib/Anchor/Anchor.svelte';
	import { ButtonTypeEnum } from '$lib/Button/Button.types';
	import Home from '@tabler/icons-svelte/icons/home';
	import AlertTriangle from '@tabler/icons-svelte/icons/alert-triangle';
</script>

<svelte:head>
	<title>{$page.error?.message ? `Error: ${$page.error.message}` : 'Page Not Found'} - Pablo Solano</title>
</svelte:head>

<div class="w-full flex justify-center items-center min-h-[80vh] outlier:max-w-[1920px]">
	<div class="flex flex-col items-center justify-center text-center px-4">
		<div class="mb-8">
			<AlertTriangle class="w-24 h-24 text-primary mx-auto mb-4" />
		</div>
		
		<div class="mb-6">
			<Typography 
				variant={TypographyEnum.h1} 
				class="!text-6xl sm:!text-8xl mb-4"
				neonType={NeonEnum.extra}
			>
				{$page.status || 404}
			</Typography>
			
			<Typography 
				variant={TypographyEnum.h2} 
				class="!text-2xl sm:!text-3xl mb-4"
				gradient={true}
			>
				{#if $page.status === 404}
					Page Not Found
				{:else if $page.error?.message}
					{$page.error.message}
				{:else}
					Something went wrong
				{/if}
			</Typography>
		</div>

		<div class="mb-8 max-w-md">
			<Typography variant={TypographyEnum.p} class="text-lg opacity-80">
				{#if $page.status === 404}
					The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
				{:else}
					We encountered an unexpected error. Please try again or return to the home page.
				{/if}
			</Typography>
		</div>

		<div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
			<Anchor
				href="/"
				anchorStyleType={ButtonTypeEnum.shell}
				class="!flex items-center justify-center !w-48"
			>
				<Home class="mr-2" />
				Back to Home
			</Anchor>
			
			<Anchor
				href="javascript:history.back()"
				anchorStyleType={ButtonTypeEnum.fill}
				class="!flex items-center justify-center !w-48"
			>
				Go Back
			</Anchor>
		</div>
	</div>
</div>