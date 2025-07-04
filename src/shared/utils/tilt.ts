// tilt.ts
export interface TiltSettings {
	scale?: number;
	max?: number;
	reverse?: boolean;
	top?: number;
	left?: number;
}

export function getSettings(settings?: TiltSettings): Required<TiltSettings> {
	return { scale: 1, max: 15, reverse: false, top: 0, left: 0, ...settings };
}

const TRANSITION_MS = 300;

export default function tilt(node: HTMLElement, settingsObj?: TiltSettings & { doTilt: boolean }) {
	const rect = node.getBoundingClientRect();
	const { width, height } = rect;
	let settings = getSettings(settingsObj);
	let reverse = settings.reverse ? -1 : 1;

	function onMouseMove(e: MouseEvent): void {
		const percX = (e.clientX - settings.left) / width;
		const percY = (e.clientY - settings.top) / height;

		const { max, scale } = settings;
		const twiceMax = max * 2;
		const tiltX = max - percX * twiceMax;
		const tiltY = percY * twiceMax - max;

		node.style.transform =
			`perspective(1000px) ` +
			`rotateX(${reverse * tiltY}deg) ` +
			`rotateY(${reverse * tiltX}deg) ` +
			`scale3d(${Array(3).fill(scale).join(', ')})`;
	}

	let transitionId: number;
	function smoothTransition(): void {
		clearTimeout(transitionId);
		node.style.willChange = 'transform';
		node.style.transition = `${TRANSITION_MS}ms`;
		transitionId = window.setTimeout(() => (node.style.transition = '0s'), TRANSITION_MS);
	}

	function onMouseLeave(): void {
		smoothTransition();
		node.style.transform =
			`perspective(1000px) ` + `rotateX(0deg) ` + `rotateY(0deg) ` + `scale3d(1, 1, 1)`;
	}

	function onMouseEnter(): void {
		smoothTransition();
		node.style.willChange = 'transform';
	}

	if (settingsObj?.doTilt) {
		node.addEventListener('mousemove', onMouseMove);
		node.addEventListener('mouseleave', onMouseLeave);
		node.addEventListener('mouseenter', onMouseEnter);
	}

	return {
		destroy(): void {
			node.removeEventListener('mousemove', onMouseMove);
			node.removeEventListener('mouseleave', onMouseLeave);
			node.removeEventListener('mouseenter', onMouseEnter);
		},
		update(newSettingsObj?: TiltSettings): void {
			settings = getSettings(newSettingsObj);
			reverse = settings.reverse ? -1 : 1;
		}
	};
}
