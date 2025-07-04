let idHovered: number | null = $state(null);

export function getIdHovered() {
	return idHovered;
}

export function setIdHovered(indexHovered: number | null) {
	return (idHovered = indexHovered);
}
