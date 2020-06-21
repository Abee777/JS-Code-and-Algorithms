/*TASK - Repeat a given string str (first argument) for num times 
(second argument). Return an empty string if num is not a positive number. */

// My Code Solution:

function repeatStringNumTimes(str, num) {
  let newstr="";
  for (let i=1; i<=num; i++){
    newstr+=str; 		
  }
  return newstr;
}

console.log(repeatStringNumTimes("abc", 3));
console.log(repeatStringNumTimes("*", 3));
console.log(repeatStringNumTimes("abc", -2));


// Other's Code Solution :

function repeatStringNumTimes(str, num) {
  return num > 0 ? str.repeat(num) : '';
}

repeatStringNumTimes("abc", 3);