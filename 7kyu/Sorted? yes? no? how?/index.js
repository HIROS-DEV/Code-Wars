function isSortedAndHow(array) {
	let copyArrAscending = [...array].sort((a, b) => a - b);
	let copyArrDecending = [...array].sort((a, b) => b - a);

	if (copyArrAscending.toString() === array.toString()) {
		return 'yes, ascending';
	} else if (
		copyArrDecending.toString() === array.toString()
	) {
		return 'yes, descending';
	} else {
		return 'no';
	}
}
