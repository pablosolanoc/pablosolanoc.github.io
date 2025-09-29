<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import Button from '$lib/Button/Button.svelte';
	import { ButtonTypeEnum } from '$lib/Button/Button.types';
	import Typography from '$lib/Typography/Typography.svelte';

	let showConsent = $state(false);

	onMount(() => {
		if (!browser) return;

		const consent = localStorage.getItem('cookie-consent');
		if (!consent) {
			showConsent = true;
		}
	});

	const acceptCookies = () => {
		localStorage.setItem('cookie-consent', 'accepted');
		showConsent = false;
	};

	const declineCookies = () => {
		localStorage.setItem('cookie-consent', 'declined');
		showConsent = false;
		// Disable analytics if user declines
		if (window.gtag) {
			window.gtag('consent', 'update', {
				analytics_storage: 'denied'
			});
		}
	};
</script>

{#if showConsent}
	<div
		class="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-4 z-50 shadow-lg"
	>
		<div class="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
			<div class="flex-1">
				<Typography variant="p" class="text-sm">
					This website uses cookies to analyze site usage and improve your experience.
					<a
						href="https://policies.google.com/privacy"
						target="_blank"
						class="underline text-primary hover:text-secondary"
					>
						Learn more about our privacy practices
					</a>
				</Typography>
			</div>
			<div class="flex gap-2">
				<Button
					buttonStyleType={ButtonTypeEnum.shell}
					onclick={declineCookies}
					class="text-sm px-4 py-2"
				>
					Decline
				</Button>
				<Button
					buttonStyleType={ButtonTypeEnum.fill}
					onclick={acceptCookies}
					class="text-sm px-4 py-2"
				>
					Accept
				</Button>
			</div>
		</div>
	</div>
{/if}
