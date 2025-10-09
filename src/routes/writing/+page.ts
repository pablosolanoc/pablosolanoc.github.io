import type { WritingEntry } from './types';

export function load() {
	const writingEntriesToShow: WritingEntry[] = [
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
