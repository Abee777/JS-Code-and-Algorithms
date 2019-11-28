/*TASK - Create a function that looks through an array (first argument) and 
returns the first element in the array that passes a truth test (second 
argument). If no element passes the test, return undefined. */

// My Initial Solution:

function findElement(arr, func) {
 let item = arr.filter(func).slice(0,1);
 //console.log(item)
 if (item.length === 0){   
   return undefined;
 }
 return item[0]; 
}
console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));
console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }));
console.log(findElement([1, 3, 7, 9], function(num) { return num % 2 === 0; }));

//Other's Solution:

function findElement(arr, func) {
  for (let i=0; i<arr.length; i++){
    let num= arr[i];					// without let:
    if (func(num)){						// if (func(arr[i])){ return arr[i]}
      return num;
    }
  }
  return undefined;
}

// Other's Solution with .find():

function findElement(arr, func) {
 var item = arr.find(func);
  return item;
}

// Interesting Solution with .indexOf():

function findElement(arr, func) {
  return arr[arr.map(func).indexOf(true)];
}