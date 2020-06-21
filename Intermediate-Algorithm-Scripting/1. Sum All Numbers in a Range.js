/* We'll pass you an array of two numbers. Return the sum of those two numbers 
plus the sum of all the numbers between them. */

// My Solution:

function sumAll(arr) {
  let sum = 0;
  if (arr[0]>arr[1]){
    for (let i=arr[1];i<=arr[0];i++){
      sum += i;
    }
    return sum;
  } else {
     for (let i=arr[0];i<=arr[1];i++){
      sum += i;
    }
   return sum; 
  }
}

console.log(sumAll([1, 4]));
console.log(sumAll([5, 10]));
console.log(sumAll([10, 5]));

// More Elegant Solution:

function sumAll(arr) {
    var sum = 0;
    for (var i = Math.min(...arr); i <= Math.max(...arr); i++){
        sum += i;
    }
  return sum;
}

// Math Solution:

const sumAll = arr => {
  // Buckle up everything to one!
  const startNum = arr[0];
  const endNum = arr[1];

  // We can get the count of numbers in range by “Math.abs(arr[0] - arr[1]) + 1”
  const numCount = Math.abs(startNum - endNum) + 1;

  // Using Arithmetic Progression summing formula
  const sum = ((startNum + endNum) * numCount) / 2;
  return sum;
};
