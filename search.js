console.log("C");

const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return 1;
  }
  return -1;
};
//return target if target in array, else -1
//find middle index number
//compare middle index to target
//discard half of array that doesn't include target
//repeat

const search = (arr, target) => {
  let nextArr = arr;
  let finalIndex = 0;

  while (nextArr.length >= 1) {
    let middleIndex =
      (nextArr.length / 2) % 2 === 0
        ? nextArr.length / 2
        : Math.floor(nextArr.length / 2);

    finalIndex += middleIndex;

    if (target === nextArr[middleIndex]) {
      return target;
    }

    let trimmedArr =
      target > nextArr[middleIndex]
        ? nextArr.slice(middleIndex + 1)
        : nextArr.slice(0, middleIndex);

    nextArr = trimmedArr;
  }

  return -1;
};

//return index of target if target in array, else -1

const binarySearch2 = (arr, target) => {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    let middleVal = arr[middleIndex];
    if (middleVal < target) {
      leftIndex = middleIndex + 1;
    } else if (middleVal > target) {
      rightIndex = middleIndex - 1;
    } else {
      return middleIndex;
    }
  }
  return -1;
};

//Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, which returns the number of zeroes in the array.

//1. Time Complexity: O(n)
const countZeroesFirstAttempt = (arr) => {
  count = 0;
  for (let num of arr) {
    if (num === 0) {
      count++;
    }
  }
  return count;
};

//2. Time Complexity: O(log N)
const countZeroesSecondAttempt = (arr) => {
  //find middle index
  //compare num at middle index to 0
  //repeat
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  while (leftIndex < rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    let middleVal = arr[middleIndex];
    if (middleVal === 1) {
      leftIndex = middleIndex + 1;
    } else if (middleVal === 0) {
      rightIndex = middleIndex - 1;
    }
    console.log(leftIndex, rightIndex);
  }
  return arr.length - rightIndex - 1;
};

//3.
function countZeroes(arr) {
  // add whatever parameters you deem necessary - good luck!
  let firstZero = findFirst(arr);
  if (firstZero === -1) return 0;

  return arr.length - firstZero;
}

function findFirst(arr, low = 0, high = arr.length - 1) {
  if (high >= low) {
    let mid = low + Math.floor((high - low) / 2);
    if ((mid === 0 || arr[mid - 1] === 1) && arr[mid] === 0) {
      return mid;
    } else if (arr[mid] === 1) {
      return findFirst(arr, mid + 1, high);
    }
    return findFirst(arr, low, mid - 1);
  }
  return -1;
}

//Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array
//O(n)

const sortedFrequencyFirstAttempt = (arr, target) => {
  let count = 0;
  for (let num of arr) {
    if (num === target) count++;
  }
  return count;
};

//2. Time Complexity: O(log N)
function sortedFrequency(arr, num) {
  let firstIdx = findFirst(arr, num);
  if (firstIdx == -1) return firstIdx;
  let lastIdx = findLast(arr, num);
  return lastIdx - firstIdx + 1;
}

function findFirst(arr, num, low = 0, high = arr.length - 1) {
  if (high >= low) {
    let mid = Math.floor((low + high) / 2);
    if ((mid === 0 || num > arr[mid - 1]) && arr[mid] === num) {
      return mid;
    } else if (num > arr[mid]) {
      return findFirst(arr, num, mid + 1, high);
    } else {
      return findFirst(arr, num, low, mid - 1);
    }
  }
  return -1;
}

function findLast(arr, num, low = 0, high = arr.length - 1) {
  if (high >= low) {
    let mid = Math.floor((low + high) / 2);
    if ((mid === arr.length - 1 || num < arr[mid + 1]) && arr[mid] === num) {
      return mid;
    } else if (num < arr[mid]) {
      return findLast(arr, num, low, mid - 1);
    } else {
      return findLast(arr, num, mid + 1, high);
    }
  }
  return -1;
}
