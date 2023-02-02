export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) throw new Error('Cannot process');
  map.forEach((x) => {
    if (x === 1) map.set(x, 100);
  });

  return map;
}
