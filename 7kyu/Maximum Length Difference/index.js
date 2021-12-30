function mxdiflg(a1, a2) {
	// your code
	const a1Smallest = Math.min(...a1.map((x) => x.length));
	const a1Longest = Math.max(...a1.map((x) => x.length));
	const a2Smallest = Math.min(...a2.map((x) => x.length));
	const a2Longest = Math.max(...a2.map((x) => x.length));

	const answerOne = Math.abs(a1Longest - a2Smallest);
	const answerTwo = Math.abs(a2Longest - a1Smallest);

	if (a1.length === 0 || a2.length === 0) {
		return -1;
	}

	return answerOne > answerTwo ? answerOne : answerTwo;
}
