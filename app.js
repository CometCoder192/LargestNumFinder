function largestOfFour(arr) {
  let largestNum = 0;
  let simpleArr = [];
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++){
      simpleArr.push(arr[i][j]);

    }
  }
  for (var k = 0; k < simpleArr.length; k++) {
    if (largestNum < simpleArr[k]) {
      largestNum = simpleArr[k];
    }
  } 
  return largestNum;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1, ]]));
