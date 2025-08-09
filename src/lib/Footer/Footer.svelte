<script>
	import Anchor from '$lib/Anchor/Anchor.svelte';
	import { ButtonTypeEnum } from '$lib/Button/Button.types';
	import Typography from '$lib/Typography/Typography.svelte';
	import { NeonEnum } from '$lib/Typography/Typography.types';
</script>

<footer class="flex justify-center py-8">
	<div class="mx-auto">
		<Typography neonType={NeonEnum.primary} gradient
			>&copy; {new Date().getFullYear()} Pablo Solano. All rights reserved ;)</Typography
		>
		<div class="flex justify-center mx-auto">
			<Typography neonType={NeonEnum.primary} gradient>Designed and developed &nbsp;</Typography>
			<Typography class="!p-0 !m-0" neonType={NeonEnum.extra} animatedUnderline gradient>
				<Anchor
					target="_blank"
					href="https://github.com/pablosolanoc/pablosolanoc.github.io"
					anchorStyleType={ButtonTypeEnum.default}>by me</Anchor
				>
			</Typography>
		</div>
	</div>
</footer>
