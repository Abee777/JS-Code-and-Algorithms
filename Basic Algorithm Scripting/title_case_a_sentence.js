/*Return the provided string with the first letter of each word capitalized.
Make sure the rest of the word is in lower case. For the purpose of this
exercise, you should also capitalize connecting words like "the" and "of".*/

// My Code Solution:

function titleCase(str) {
let b=[];
let arr = str.split(' ');
let newstr = '';
str = '';
 for (let i=0; i<arr.length;i++){
  newstr = arr[i][0].toUpperCase();
   for (let j=1; j<arr[i].length;j++){
     newstr = newstr + arr[i][j].toLowerCase();
   }
   b.push(newstr);
   str = str + b[i] + ' ';
 }
  return str.substring(0, str.length - 1); // or str.slice(0, str.length - 1) || str.slice(0,-1)
}

console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));


// Intermediate Code Solution: 

function titleCase(str) {
  var convertToArray = str.toLowerCase().split(" ");
  var result = convertToArray.map(function(val){
      return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  return result.join(" ");
}

//  Advanced Code Solution:

function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
}

/* 

Regex explanation:
Find all non-whitespace characters (\S)
At the beginning of string (^)
Or after any whitespace character (\s)

    The g modifier searches for other such word pattern in the whole string
    and replaces them.

    This solution works with national symbols and accented letters as 
    illustrated by following examples 
    international characters: ‘бабушка курит трубку’ // ‘Бабушка Курит Трубку’
    accented characters: ‘località àtilacol’ // ‘Località Àtilacol’
*/


// My New Code Solution:

function titleCase(str) {
  let arr = str.split(' ');
  let newStr = ''; 
  let b = ''; 
  for (let i=0;i<arr.length;i++){
    newStr = arr[i][0].toUpperCase();
    for (let j=1;j<arr[i].length;j++){
      newStr = newStr + arr[i][j].toLowerCase();
    }
    b = b +" " + newStr
  //console.log(b);
  }
  return b.slice(1,);
}

console.log(titleCase("I'm a little tea pot"));