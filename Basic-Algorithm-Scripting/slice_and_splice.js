/*TASK - Copy each element of arr1 to arr2 at index n. 
The input arrays should remain the same after function runs. */

// My First Code Solution:

function frankenSplice(arr1, arr2, n) {
  let copy2 = arr2.slice(0);
  for (let i=0; i<arr1.length; i++){
    copy2.splice(n+i,0,arr1[i]);
    console.log(copy2);
  }
  return copy2;
}

// My Second Code Solution:

function frankenSplice(arr1, arr2, n) {
  let newArr = [...arr2];		// also with slice: let newArr = arr2.slice(0,);
  newArr.splice(n,0,...arr1);
  return newArr;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

