<script>
	import Button from '$lib/Button/Button.svelte';
	import { AnimationTypeEnum, ButtonTypeEnum } from '$lib/Button/Button.types';
	import SectionButton from '$lib/SectionButton/SectionButton.svelte';
	import Typography from '$lib/Typography/Typography.svelte';
	import { NeonEnum } from '$lib/Typography/Typography.types';
	import { appState, updateAppState } from '../../routes/+layout.svelte';

	const sections = [
		{ title: 'Home', link: '' },
		{ title: 'Experience', link: '' },
		{ title: 'Skills', link: '' },
		{ title: 'Projects', link: '' },
		{ title: 'Blog', link: '' }
	];
</script>

<div class="flex w-full justify-around shadow-xl">
	<div class="flex items-center">
		<!-- <Logo/> -->
		<span>mail</span>
	</div>
	<div class="flex justify-around">
		{#each sections as section}
			<SectionButton>
				<Typography neonType={NeonEnum.primary} animatedUnderline>{section.title}</Typography>
			</SectionButton>
		{/each}

		<Button
			class=""
			buttonStyleType={ButtonTypeEnum.shell}
			animationType={AnimationTypeEnum.outward}>Hola 222</Button
		>
		<Button
			class="neon-hover-primary"
			buttonStyleType={ButtonTypeEnum.fill}
			animationType={AnimationTypeEnum.outward}>Hola 222</Button
		>
		<Button
			class=""
			buttonStyleType={ButtonTypeEnum.default}
			animationType={AnimationTypeEnum.outward}>Hola 222</Button
		>
		<button class="font-ubuntu" onclick={updateAppState}>Toogle</button>
	</div>
</div>
