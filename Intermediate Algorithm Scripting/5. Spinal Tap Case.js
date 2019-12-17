
/* Convert a string to spinal case. Spinal case is 
all-lowercase-words-joined-by-dashes.*/

// My Solution:

function spinalCase(str) {
  let regex = /\W+|_/g;	
  //adds space between a lowercase and uppercase in one string:
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');	
  return str.replace(regex, "-").toLowerCase();
}

console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("AllThe-small Things"))


//Intermediate Code Solution: 

function spinalCase(str) {
  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  // Split on whitespace and underscores and join with dash
  return str.toLowerCase().split(/(?:_| )+/).join('-');
}


//Advanced Code Solution:

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins

  return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase()
}

/*Code Explanation:

    Split the string at one of the following conditions (converted to an array)
        a whitespace character [\s] is encountered
        underscore character [_] is encountered
        or is followed by an uppercase letter [(?=[A-Z])]
    Join the array using a hyphen (-)
    Lowercase the whole resulting string
*/