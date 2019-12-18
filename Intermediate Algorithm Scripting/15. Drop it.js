// Drop elements which don't satisfy given function:

function dropElements(arr, func) {
  // Drop them elements.
  return arr.filter(function(x){
    return func(x);
  })
}

console.log(dropElements([1, 2, 3], function(n) {return n < 3; })) // [ 1, 2, 3 ]
console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;})) // [1, 0, 1]
console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;})) // [ 3, 9, 2 ]
console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;})); // []

/* Given the array arr, iterate through and remove each element starting from the 
first element (the 0 index) until the function func returns true when the iterated 
element is passed through it.
Then return the rest of the array once the condition is satisfied, otherwise, 
arr should be returned as an empty array.*/

// My solution:
function dropElements(arr, func) {
 while (!func(arr[0])){
   arr.shift()
   if(arr.length == 0){
     return [];
   } 
 }
  return arr ;
}

// Iteresting Itermediate Solution:
function dropElements(arr, func) {
  return arr.slice(arr.findIndex(func) >= 0 ? arr.findIndex(func): arr.length, arr.length);
}

/* The findIndex() method returns the index of the first element in an array that 
pass a test (provided as a function).
The findIndex() method executes the function once for each element present in the 
array:
    If it finds an array element where the function returns a true value, 
    findIndex() returns the index of that array element (and does not check the 
    remaining values)
    Otherwise it returns -1
Note: findIndex() does not execute the function for array elements without values.
Note: findIndex() does not change the original array. 
*/ 
