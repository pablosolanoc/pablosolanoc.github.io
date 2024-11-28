<script lang="ts">
	import Button from '$lib/Button/Button.svelte';
	import { ButtonTypeEnum } from '$lib/Button/Button.types';
	import {
		IconBrandLinkedinFilled,
		IconBrandGithubFilled,
		IconBrandGmail
	} from '@tabler/icons-svelte';

	type SocialMediaType = { name: string; link: string; icon: typeof IconBrandLinkedinFilled };

	const socialMedia: SocialMediaType[] = [
		{ name: 'linkedin', link: '', icon: IconBrandLinkedinFilled },
		{ name: 'github', link: '', icon: IconBrandGithubFilled },
		{ name: 'mail', link: '', icon: IconBrandGmail }
	];
</script>

{#each socialMedia as social}
	<Button
		buttonStyleType={ButtonTypeEnum.shell}
		class="border-2 mx-1 border-primary rounded-full p-2 "
	>
		<svelte:component this={social.icon} {...{ size: 24, stroke: 1 }}></svelte:component>
	</Button>
{/each}
