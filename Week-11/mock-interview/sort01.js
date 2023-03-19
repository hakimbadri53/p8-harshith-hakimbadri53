function sort(arr) {
  let low = 0;
  let high = arr.length - 1;
  while (low < high) {
    if (arr[high] === 1) {
      [arr[high], arr[low]] = [arr[low], arr[high]];
      low++;
    } else high--;
  }
  return arr;
}

const arr = [1, 0, 1, 0, 1, 0, 1, 1];

console.log(sort(arr));

// TC - O(N)
// SC - O(1)
