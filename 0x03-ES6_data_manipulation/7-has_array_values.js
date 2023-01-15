export default function hasValuesFromArray(set, array) {
  return array.every((n) => set.has(n));
}
