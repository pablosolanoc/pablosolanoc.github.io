import LocomotiveScroll from 'locomotive-scroll';

let scrollInstance: LocomotiveScroll | null = $state(null);

export function initLocomotiveScroll(options: LocomotiveScroll.InstanceOptions = {}) {
	if (typeof window !== 'undefined') {
		const instance = new LocomotiveScroll({
			el: document.getElementById('data-scroll-container') ?? undefined,
			...options
		});
		scrollInstance = instance;
	}
}

export function getScrollinstance() {
	return scrollInstance;
}
