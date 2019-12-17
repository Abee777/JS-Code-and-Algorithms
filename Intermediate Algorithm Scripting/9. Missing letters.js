/*Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.*/

// My Solution:

 function fearNotLetter(str) {
  for (let i = 0; i < str.length-1; i++){
    let code1 = str.charCodeAt(i);
    let code2 = str.charCodeAt(i+1);
    if (code2-code1 > 1){
      return String.fromCharCode(code1+1);
    }
  }
  return undefined;
}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("bcdf"));

// Advanced Code Solution:

function fearNotLetter(str) {
  for (let i = 1; i < str.length; ++i) {
    if (str.charCodeAt(i) - str.charCodeAt(i-1) > 1) {
      return String.fromCharCode(str.charCodeAt(i - 1) + 1);
    }
  }
}
