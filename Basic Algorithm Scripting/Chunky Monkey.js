/*TASK - Write a function that splits an array (first argument) into groups the 
length of size (second argument) and returns them as a two-dimensional array. */

// My Solution:

function chunkArrayInGroups(arr, size) {
  let a =[];
  let b =[];
  while (size<=arr.length){
    a = arr.splice(0,size)
    //console.log(a)
    b.push(a);
    //console.log(b)
  };
  if (arr.length!==0){
    b.push(arr);
  };
  return b;
}
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));

// Other's Code Solution:

function chunkArrayInGroups(arr, size) {
  var newArr = [];
  while (arr.length) {                  // Our while loop loops until the length of the array in our test is not 0.
    newArr.push(arr.splice(0,size));
  }
  return newArr;
}
