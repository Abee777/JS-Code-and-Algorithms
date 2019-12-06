/*TASK - Fill in the urlSlug function so it converts a string title and returns 
the hyphenated version for the URL. Here are the requirements:

The input is a string with spaces and title-cased words
The output is a string with the spaces between words replaced by a hyphen (-)
The output should be all lower-cased letters
The output should not have any spaces */

// My First Solution:

var globalTitle = " Winter Is  Coming";


function urlSlug(title) {
  return title.toLowerCase().trim().split(/\s+/).join("-");
}

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"

console.log(winterComing)

------------------------------------------------

// My Second Solution:

var globalTitle = "Winter Is Coming";

function urlSlug(title) {
return title.split(/\W/).filter((obj)=>{
    return obj !=='';
  }).join('-').toLowerCase();
}

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"
