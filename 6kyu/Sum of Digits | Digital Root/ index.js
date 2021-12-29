function digital_root(n) {
	let number = n;
	while (number > 9) {
		number = number
			.toString()
			.split('')
			.map(Number)
			.reduce((a, b) => a + b, 0);
	}
	return number;
}
