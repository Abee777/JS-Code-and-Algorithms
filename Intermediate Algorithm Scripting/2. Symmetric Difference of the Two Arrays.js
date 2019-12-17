/* Compare two arrays and return a new array with any items only found in one of the 
two given arrays, but not both. In other words, return the symmetric difference 
of the two arrays. */

// My Solution:

function diffArray(arr1, arr2) {
  var newArr = arr1.concat(arr2);
  var mainArr = [];
  for(let i = 0; i < newArr.length; i++){
    let sum = 0;
    for(let j = 0; j < newArr.length; j++){
      if(newArr[i] === newArr[j]){
        sum++; 
      }
    }
    if (sum == 1){
       mainArr.push(newArr[i]);
    }
  }
  return mainArr;
  
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"],["diorite", "andesite", "grass", "dirt", "dead shrub"]));


// Intermediate Code Solution (Declarative Solution):

 function diffArray(arr1, arr2) {
      return arr1.concat(arr2).filter(item => !arr1.includes(item) || !arr2.includes(item))}

    console.log(diffArray([1, 2, 3, 5, 7], [1, 2, 3, 4, 5]));

/*
  Explanation:
  The case of 1:
  Does arr1 includes 1? 1 is in arr1 therefore --NO-- OR Does arr2 includes 1?
  1 is in arr2 therefore --NO--.
  The case of 7:
  Does arr1 includes 7? 7 is in arr1 therefore --NO-- OR Does arr2 includes 7?
  7 is not in arr2 therefore --YES--.
*/


//Also try using indexOf() method
