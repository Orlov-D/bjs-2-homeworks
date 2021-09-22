// Задание 1
function getArrayParams(arr) {
  let min = Math.max(...arr),max = Math.min(...arr),sum = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    sum += arr[i];
  }
  return { min:min, max:max, avg:+(sum / arr.length).toFixed(2) };
}

// Задание 2
function worker(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = {};
  let maxSum = -Infinity;
  let index = -1;
  for (i = 0; i < arrOfArr.length; i++) {
    if (maxSum < func(arrOfArr[i])){
      maxSum = func(arrOfArr[i]);
      index = i;
    }
  }
  max.maxSum = maxSum;
  max.maxArr = arrOfArr[index];
  return maxSum
}

// Задание 3
function worker2(arr) {
  return Math.abs(Math.max(...arr) - Math.min(...arr));
}
