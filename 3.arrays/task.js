function compareArrays(arr1, arr2) {
  let result;
  function isEqual(number, index) {
    return number === arr2[index];
  }
  if (arr1.length != arr2.length) {
    return false;
  } else {
    result = arr1.every(isEqual, arr2);
  }
  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;
  resultArr = arr.filter(number => (number > 0) && (number % 3 === 0)).map(number => number = number * 10);
  return resultArr; // array
}
