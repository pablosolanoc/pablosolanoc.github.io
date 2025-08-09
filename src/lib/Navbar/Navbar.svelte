<script lang="ts">
	import { ButtonTypeEnum } from '$lib/Button/Button.types';
	import Toogle from '$lib/Toogle/Toogle.svelte';
	import AnimatedUnderline from '$lib/AnimatedUnderline/AnimatedUnderline.svelte';
	import Anchor from '$lib/Anchor/Anchor.svelte';
	import { getScrollinstance } from '$lib/ScrollWrapper/initLocomotiveScroll.svelte';
	import { goto } from '$app/navigation';

	const sections = [
		{ title: 'Home', href: '/home' },
		{ title: 'Experience', href: '/#experience' },
		{ title: 'Testimonials', href: '/#testimonials' },
		{ title: 'Skills', href: '/#skills' },
		{ title: 'Projects', href: '/#projects' }
		// { title: 'Blog', href: '/blog' }
	];

	let previousY: number | undefined;
	let currentY: number | undefined = $state();
	let clientHeight: number | undefined = $state();

	let activeIdx = $state(0);

	const getScrollDirection = (newY: number | undefined) => {
		let direction = 'down';
		if (previousY && newY && previousY > newY) {
			direction = 'up';
		}
		previousY = newY;

		return direction;
	};

	const scrollDirection = $derived(getScrollDirection(currentY));
	const offScreen = $derived(
		scrollDirection === 'down' && currentY && clientHeight && currentY > clientHeight * 4
	);
</script>

<svelte:window bind:scrollY={currentY} />

<header
	class="sticky top-0 z-[50] flex items-center justify-center transition-transform ease-in"
	class:motion-safe:-translate-y-full={offScreen}
	bind:clientHeight
>
	<div
		class="flex flex-wrap justify-center bg-[white] shadow-2xl dark:bg-darkMode px-3 rounded-b-xl"
	>
		{#each sections as item, i}
			<Anchor
				anchorStyleType={activeIdx === i ? ButtonTypeEnum.fill : ButtonTypeEnum.shell}
				class="group shadow-none  border-none relative mx-1 z-[1] rounded-full px-3 py-2"
				onclick={(event) => {
					event.preventDefault();

					let anchorId = item.href.replace('#', '');
					anchorId = anchorId.replace('/', '');

					const anchor = document.getElementById(anchorId);
					if (anchor) {
						getScrollinstance()?.scrollTo(anchor, { offset: -100 });
					} else {
						goto(item.href, {
							replaceState: true, // Replace current history entry
							invalidateAll: true // Invalidate all data
						});
					}
				}}
				href={item.href}
			>
				{item.title}
				<AnimatedUnderline show={activeIdx === i} />
			</Anchor>
		{/each}
		<Toogle />
	</div>
</header>
