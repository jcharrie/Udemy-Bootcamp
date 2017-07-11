// takes an array as an argument and prints out the elements in the
// array in reverse order

  function printReverse(normal){
    for(var i = normal.length - 1; i >= 0; i--){
      console.log(normal[i]);
    }
  }

// takes an array as an argument and returns true if all elements in the
// array are identical

function isUniform(arr){
  var firstElem = arr[0];
  for (i = 1; i < arr.length; i++){
    if (firstElem !== arr[i]){
      return false;
    }
  }
  return true;
}

// acccepts an array of numbers and returns the sum of all numbers in the array

function sumArray(nums){
  var result = 0;
  nums.forEach(function(num){
    result += num;
  });
  return result;
}

// accepts an array of numbers and returns the maximum number in the array

function max(nums){
  var maxNum = nums[0];
  nums.forEach(function(num){
    if (maxNum < num){
      maxNum = num;
    }
  });
  return maxNum;
}