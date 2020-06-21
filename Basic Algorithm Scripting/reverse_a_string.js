/*TASK - Reverse the provided string.You may need to turn the string into 
an array before you can reverse it.Your result must be a string. */

// My First Code Solution:

function reverseString(str) {
  let a = str.length-1;
  let b = [];
  let c = "";
  for (let i=a; i>=0;i--){
    b.push(str[i]);
  }
  for (let j=0; j<b.length;j++){
    c = c + b[j];
  }
  return str =c;
}

// My Second Code Solution:

function reverseString(str) {
  let arr = str.split('')
  let arr1 = arr.reverse()
  str = arr1.join('')
  return str 
}

// Smoothest Code Solution:

function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString("hello"));