/*TASK - Return true if the string in the first element of the array contains all of 
the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the 
letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string 
"hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters 
in "line" are present in "Alien". */

// My First Solution: 

function mutation(arr) {
  let letters = arr[1].toLowerCase().split('');
  let text = arr[0].toLowerCase().split('');
  
  for (let i=0;i<letters.length; i++){
    if (text.indexOf(letters[i])=== -1){
      return false;
    }
  }
  return true;
}

mutation(["hello", "Hey"]);
mutation(["hello", "neo"]);
mutation(["voodoo", "nO"]);
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);

// My Second Solution:

function mutation(arr) {
  let a = arr[1].toLowerCase().split('');
  let b = arr[0].toLowerCase().split('');
  console.log(a);
  let num=0;
  for (let i = 0; i<a.length; i++){
    for (let j=0; j<arr[0].length; j++){
      if (a[i]===b[j]){
        num++;
        break;
      }
    }
  }
  console.log(num)
  return num===a.length;
}

console.log(mutation(["hello", "hey"]));
console.log(mutation(["Mary", "arMy"]));

// Intermediate Code Solution (Declarative):

function mutation(arr) {
  return arr[1].toLowerCase()
    .split('')
    .every(function(letter) {
      return arr[0].toLowerCase()
        .indexOf(letter) != -1;
    });
}

