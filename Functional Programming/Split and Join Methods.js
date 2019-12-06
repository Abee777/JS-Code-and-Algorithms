//Example: 

var otherString = "How9are7you2today";
var byDigits = otherString.split(/\d/);
// Sets byDigits to ["How", "are", "you", "today"]


/* Use the split method inside the splitify function to split str into an array 
of words. The function should return the array. Note that the words are not 
always separated by spaces, and the array should not contain punctuation. */

function splitify(str) {
  return str.split(/\W/);
}
console.log(splitify("Hello World,I-am code"));


/* Use the join method (among others) inside the sentensify function to make a 
sentence from the words in the string str. The function should return a string. 
For example, "I-like-Star-Wars" would be converted to "I like Star Wars". 
For this challenge, do not use the replace method. */

function sentensify(str) {
  return str.split(/\W/).join(" ");
}
console.log(sentensify("May-the-force-be-with-you"));
