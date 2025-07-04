export const getScrollDirection = (newY: number, previousY: number) => {
	const direction = !previousY || newY > previousY ? 'down' : 'up';
	previousY = newY;

	return direction;
};
