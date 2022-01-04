function rentalCarCost(d) {
	// Your solution here
	if (d < 3) {
		return d * 40;
	}
	if (3 <= d && d < 7) {
		return d * 40 - 20;
	}
	if (d >= 7) {
		return d * 40 - 50;
	}
}
