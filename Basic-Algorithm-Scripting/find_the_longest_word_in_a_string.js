/*TASK - Return the length of the longest word in the provided sentence.
Your response should be a number. */

// My Initial Solution:

function findLongestWordLength(str) {
let regex = /\w+/g;
let result = str.match(regex);
let max= result[0];

for (let i=1; i<result.length; i++){
  if (max.length>result[i].length){
  } else {
    max= result[i];
    console.log(max);
  }
}
  return max.length;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

// Smoother Solution than mine (gives number right away):

function findLongestWordLength(str) {
  var words = str.split(' ');
  var maxLength = 0;

  for (var i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }
  return maxLength;
}

// Other's Solution with .reduce():

function findLongestWordLength(s) {
  return s.split(' ').reduce(function(x, y){
    return Math.max(x, y.length)
    }, 0);
}

// Other's Solution with .map():

function findLongestWordLength(str) {
  return Math.max(...str.split(" ").map(word => word.length));
}
