import type { WritingEntry } from './types';

export function load() {
	const writingEntriesToShow: WritingEntry[] = [
		{
			id: '8',
			title: '3Sum',
			dateWritten: '2025-11-25', // "YYYY-MM-DD"
			category: 'codeProblems',
			route: '3Sum'
		},
		{
			id: '7',
			title: 'Letter Combinations Of A Phone',
			dateWritten: '2025-11-25', // "YYYY-MM-DD"
			category: 'codeProblems',
			route: 'letterCombinationsOfAPhone'
		},
		{
			id: '6',
			title: 'Add Two Numbers',
			dateWritten: '2025-11-25', // "YYYY-MM-DD"
			category: 'codeProblems',
			route: 'addTwoNumbers'
		},
		{
			id: '5',
			title: 'Vacation',
			dateWritten: '2025-11-25', // "YYYY-MM-DD"
			category: 'writing',
			route: 'vacation'
		},
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
