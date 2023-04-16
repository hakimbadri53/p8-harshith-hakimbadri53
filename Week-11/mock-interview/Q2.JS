// [1, 9, 2, 10, 3, 20, 4]  => 4
// [32, 41, 56, 33, 44, 34, 35, 92, 43, 36, 42] => 5

function longestSubsequenceByStack(arr) {
  let s1 = [arr[0]];
  let s2 = [];
  let maxSubsequence = 0;
  for (let i = 1; i < arr.length; i++) {
    // check if current element is subsequent to s1 top
    if (arr[i] - s1[s1.length - 1] === 1) {
      s1.push(arr[i]);
    }
    // check if current element is subsequent to s2 top
    else {
      // if s2 is empty directly push
      if (s2.length === 0) {
        s2.push(arr[i]);
      }
      // check if current element is subsequent to s2 top, in case its not, empty the stack with lower subsequence
      else {
        if (arr[i] - s2[s2.length - 1] === 1) {
          s2.push(arr[i]);
        } else {
          if (s1.length < s2.length) {
            s1 = [];
            s1.push(arr[i]);
          } else if (s1.length > s2.length) {
            s2 = [];
            s2.push(arr[i]);
          }
        }
      }
    }
  }

  // let currentSubsequence = 1;
  // for (let j = i + 1; j < arr.length; j++) {
  //   if (arr[j] - arr[i] === currentSubsequence) {
  //     ++currentSubsequence;
  //   }
  // }
  // if (currentSubsequence > maxSubsequence) {
  //   maxSubsequence = currentSubsequence;
  // }

  maxSubsequence = Math.max(s1.length, s2.length);
  return maxSubsequence;
}

function longestConsecutiveSubsequence(arr) {
  let longestSubsequence = 1;
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], i);
  }
  console.log(map);

  for (let i = 0; i < arr.length; i++) {
    let currentLongestSubsequence = 1;
    let key = arr[i];
    let currentIndex = i;
    if (!map.has(key - 1)) {
      let nextValue = key + 1;
      while (map.has(nextValue)) {
        if (map.get(nextValue) < currentIndex) {
          break;
        }
        currentIndex = map.get(nextValue);
        nextValue++;
        currentLongestSubsequence++;
      }
    }

    longestSubsequence = Math.max(
      currentLongestSubsequence,
      longestSubsequence
    );
  }
  return longestSubsequence;
}

// const arr1 = [1, 9, 2, 10, 3, 20, 4];
const arr2 = [48, 41, 56, 38, 37, 44, 34, 35, 92, 43, 36, 42];
// console.log(longestSubsequence(arr1));
// console.log(longestSubsequenceByStack(arr2));
console.log(longestConsecutiveSubsequence(arr2));
