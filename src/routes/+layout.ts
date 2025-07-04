import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ fetch }) => {
	try {
		const res = await fetch(`http://localhost:3000/api/pages`);
		const item = await res.json();
		return { item };
	} catch (error) {
		console.error(error);
	}
};
