/* eslint-disable valid-typeof */
export default function cleanSet(set, startString) {
  if (typeof set !== 'object') return '';
  if (typeof startString !== 'string') return '';
  if (typeof startString.length === 0) return '';

  const myString = [];
  [...set].forEach((y) => {
    if (y && y.indexOf(startString) === 0) myString.push(y.replace(myString, ''));
  });
  return myString;
}
