function binarySearch(array, value, start, end) {
  start = start === undefined ? 0 : start;
  end = end === undefined ? array.length : end;

  if (start > end) {
    return false;
  }

  const index = Math.floor((start + end) / 2);
  const item = array[index];

  //   console.log(start, end);
  if (item == value) {
    console.log(index);
    return index;
  } else if (item < value) {
    console.log(binarySearch(array, value, index + 1, end));
    return binarySearch(array, value, index + 1, end);
  } else if (item > value) {
    console.log(binarySearch(array, value, start, index - 1));
    return binarySearch(array, value, start, index - 1);
  }
}
console.log('1st');
binarySearch([3, 5, 6, 8, 11, 12, 14, 15, 17, 18], 8); // i = 3;
console.log('2nd');
binarySearch([3, 5, 6, 8, 11, 12, 14, 15, 17, 18], 16); // i = false (not in array)
