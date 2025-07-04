export const width = 40;
export const height = 40;

const gridPattern: Array<[x: number, y: number]> = [];

for (let x = 0; x < width; x++) {
	for (let y = 0; y < height; y++) {
		gridPattern.push([x, y]);
	}
}

export function getGridPattern() {
	return gridPattern;
}

export default gridPattern;
