function sumArray(array) {
  return array === null ? 0 : array.sort((a,b) => a-b).slice(1, array.length-1).reduce((sum,crr) => sum + crr, 0);
}