function sumDigits(number) {
    return Math.abs(number)
    .toString()
    .split('')
    .map(Number)
    .reduce((a, b) => a + b, 0);
}

// .map(Number) as same as .map(x => Number(x))