const isAnagram = function (test, original) {
	let testArray = test
		.toUpperCase()
		.split('')
		.sort()
		.join('');
	let originalArray = original
		.toUpperCase()
		.split('')
		.sort()
		.join('');

	return testArray === originalArray;
};
