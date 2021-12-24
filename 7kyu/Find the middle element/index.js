const gimme = function (inputArray) {
	const coppyArray = [...inputArray];
	const middleNumber = coppyArray.sort((a, b) => a - b)[1];

	for (let i = 0; i < inputArray.length; i++) {
		if (inputArray[i] === middleNumber) {
			return i;
		}
	}
};