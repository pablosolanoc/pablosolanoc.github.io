<script>
	import Button from '$lib/Button/Button.svelte';
	import { AnimationTypeEnum, ButtonTypeEnum } from '$lib/Button/Button.types';
	import SectionButton from '$lib/SectionButton/SectionButton.svelte';
	import Typography from '$lib/Typography/Typography.svelte';
</script>

<div class="flex w-full justify-around shadow-xl">
	<div class="flex items-center">
		<!-- <Logo/> -->
		<span>mail</span>
	</div>
	<div class="flex justify-around">
		<SectionButton>
			<Typography animatedUnderline>Home</Typography>
		</SectionButton>
		<!-- <NavBarButton>About</NavBarButton>
		<NavBarButton>Experience</NavBarButton>
		<NavBarButton>Blog</NavBarButton>
		<NavBarButton>Contact</NavBarButton> -->

		<Button
			class=""
			buttonStyleType={ButtonTypeEnum.shell}
			animationType={AnimationTypeEnum.outward}>Hola 222</Button
		>
		<Button class="" buttonStyleType={ButtonTypeEnum.fill} animationType={AnimationTypeEnum.outward}
			>Hola 222</Button
		>
		<Button
			class=""
			buttonStyleType={ButtonTypeEnum.default}
			animationType={AnimationTypeEnum.outward}>Hola 222</Button
		>
	</div>
</div>
