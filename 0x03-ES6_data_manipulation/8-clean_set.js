export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString === '') {
    return '';
  }
  let newString = '';
  let i = 0;
  set.forEach((element) => {
    if (element && element.startsWith(startString)) {
      if (i > 0) {
        newString += '-';
      }
      newString += element.substring(startString.length);
      i += 1;
    }
  });
  return newString;
}
