export default function concateArrays(array1, array2, string) {
  const x = array1.concat(array2, ...string);
  return x;
}
