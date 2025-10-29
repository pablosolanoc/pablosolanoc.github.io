import type { WritingEntry } from './types';

export function load() {
	const writingEntriesToShow: WritingEntry[] = [
		{
			id: '4',
			title: 'Colors',
			dateWritten: '2025-10-29', // "YYYY-MM-DD"
			category: 'writing',
			route: 'colors'
		},
		{
			id: '3',
			title: 'Regret',
			dateWritten: '2025-10-16', // "YYYY-MM-DD"
			category: 'writing',
			route: 'regret'
		},
		// {
		// 	id: '2',
		// 	title: 'Memory',
		// 	dateWritten: '2025-10-15', // "YYYY-MM-DD"
		// 	category: 'all',
		// 	route: 'memory'
		// },
		{
			id: '1',
			title: 'Testing Entry 1',
			dateWritten: '2025-10-08', // "YYYY-MM-DD"
			category: 'writing',
			route: 'firstEntry'
		}
	];
	return {
		writingEntriesToShow
	};
}
