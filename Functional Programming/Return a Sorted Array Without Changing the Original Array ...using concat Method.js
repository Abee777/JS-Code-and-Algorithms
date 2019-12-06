/* A side effect of the sort method is that it changes the order of the elements in 
the original array. In other words, it mutates the array in place. One way to avoid 
this is to first concatenate an empty array to the one being sorted (remember that 
concat returns a new array), then run the sort method.*/

/*TASK - Use the sort method in the nonMutatingSort function to sort the elements of an 
array in ascending order. The function should return a new array, and not mutate 
the globalArray variable.*/


var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  return [].concat(arr).sort(function(a,b){return a-b});
}
nonMutatingSort(globalArray);
