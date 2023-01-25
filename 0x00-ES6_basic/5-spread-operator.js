function concateArrays(array1, array2, string) {
  return [...array1, ...array2, ...string];
}

console.log(concateArrays(['a', 'b'], ['c', 'd'], 'hello'));
