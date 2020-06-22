/* You will be provided with an initial array (the first argument in the destroyer 
function), followed by one or more arguments. Remove all elements from the initial 
array that are of the same value as these arguments.
*/

// My Solution:

function destroyer(arr) {
  let newArr = [];							
  for (let i of arguments){		
    newArr.push(i)
  }
  //console.log(newArr) -->  [ [ 1, 2, 3, 1, 2, 3 ], 2, 3 ]
  let a = newArr.shift();		
  //console.log(a) --> [ 1, 2, 3, 1, 2, 3 ]		
  return a.filter(item => !newArr.includes(item));	
  // or in one line: return newArr.shift().filter(item=> !newArr.includes(item))
}
//for loop can be replaced with: var args = Array.prototype.slice.call(arguments);

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroyer(["tree", "hamburger", 53], "tree", 53));


// Intermediate Code Solution:

function destroyer(arr) {
  var args = Array.from(arguments).slice(1);
  return arr.filter(function(val) {
    return !args.includes(val);
  });
}


//Advanced Code Solution:

const destroyer = (arr, ...args) => arr.filter(i => !args.includes(i));
