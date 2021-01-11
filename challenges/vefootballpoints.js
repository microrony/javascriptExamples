const footballPoints = (wins, draws, losses) => {
	let winsPoints = wins * 3;
	let drawsPoints = draws * 1;
	let totalPoints = (winsPoints + drawsPoints);
	return totalPoints;
}
