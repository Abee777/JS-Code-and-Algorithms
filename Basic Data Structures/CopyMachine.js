/* We have defined a function, copyMachine which takes arr (an array) 
and num (a number) as arguments. The function is supposed to return a 
new array made up of num copies of arr. Modify the function using 
spread syntax so that it works correctly. */

function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // change code below this line
 let a = [...arr];            
 newArr.push([...arr]);      // newArr = newArr.concat(a) -> this will make copies in a signle array
    // change code above this line
    num--;
  }
  return newArr;
}

// change code here to test different cases:
console.log(copyMachine([true, false, true], 2));
console.log(copyMachine([1, 2, 3], 5));
console.log(copyMachine(["it works"], 3));
