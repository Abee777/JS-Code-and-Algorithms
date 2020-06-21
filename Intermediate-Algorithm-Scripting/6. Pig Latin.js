/*
Translate the provided string to pig latin. Pig Latin takes the first consonant 
(or consonant cluster) of an English word, moves it to the end of the word and 
suffixes an "ay".
If a word begins with a vowel you just add "way" to the end.
If a word does not contain a vowel, just add "ay" to the end.
Input strings are guaranteed to be English words in all lowercase.
*/

function translatePigLatin(str) {
  let regex= /[aeiou]/;
  let pigLatin ='';
  if (str[0].match(regex)){
    pigLatin = str + "way";
  } else if (str.match(regex)===null){
    pigLatin = str + "ay";
  } else {
    let vowelStart = str.indexOf(str.match(regex));
    pigLatin = str.substr(vowelStart) + str.substr(0,vowelStart) + "ay";
  }
  return pigLatin;
}

console.log(translatePigLatin("casv"));
console.log(translatePigLatin("california"));
