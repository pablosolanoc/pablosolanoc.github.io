import type { WritingEntry } from './types';

export function load() {
	const writingEntriesToShow: WritingEntry[] = [
		{
			id: '1',
			title: 'Testing Entry 1',
			dateWritten: '2025-08-26',
			category: 'tech',
			route: 'firstEntry'
		},
		{
			id: '2',
			title: 'Testing Entry 2 - Loooong title to test if it overflows correctly or not',
			dateWritten: '2025-08-26',
			category: 'tech',
			route: 'secondEntry'
		}
	];
	return {
		writingEntriesToShow
	};
}
