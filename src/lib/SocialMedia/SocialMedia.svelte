<script lang="ts">
	import Anchor from '$lib/Anchor/Anchor.svelte';
	import Button from '$lib/Button/Button.svelte';
	import { ButtonTypeEnum } from '$lib/Button/Button.types';
	import { trackContactClick } from '$lib/utils/analytics';
	import {
		IconBrandLinkedinFilled,
		IconBrandGithubFilled,
		IconBrandGmail
	} from '@tabler/icons-svelte';

	type SocialMediaType = { name: string; link: string; icon: typeof IconBrandLinkedinFilled };

	const socialMedia: SocialMediaType[] = [
		{
			name: 'linkedin',
			link: 'https://www.linkedin.com/in/pablo-solano-2bb968216/',
			icon: IconBrandLinkedinFilled
		},
		{ name: 'github', link: 'https://github.com/pablosolanoc', icon: IconBrandGithubFilled },
		{ name: 'mail', link: 'mailto:pablosolano61098@gmail.com', icon: IconBrandGmail }
	];
</script>

{#each socialMedia as social}
	<Anchor
		anchorStyleType={ButtonTypeEnum.shell}
		class="border-2 mx-1 border-primary rounded-full p-2"
		target="_blank"
		onclick={() => {
			trackContactClick(social.name);
		}}
		href={social.link}
	>
		<svelte:component this={social.icon} {...{ size: 24, stroke: 1 }}></svelte:component>
	</Anchor>
{/each}
