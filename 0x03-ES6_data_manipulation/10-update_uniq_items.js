export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw Error('Cannot process');
  }
  return map.forEach((value, key) => {
    if (value === 1) {
      map.set(key, 100);
    }
  });
}
