/*TASK - Refactor (rewrite) the code so the global array "bookList" is not 
changed inside either function. The "add" function should add the given 
"bookName" to the end of an array. The "remove" function should remove the 
given "bookName" from an array. Both functions should return an array, and any
new parameters should be added before the bookName one. */

// the global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

/* This function should add a book to the list and return the list */
// New parameters should come before the bookName one

function add (arr,bookName) {
  let a = [...arr];
  a.push(bookName);
  return a;
}

/* This function should remove a book from the list and return the list */
// New parameters should come before the bookName one

function remove (arr,bookName) {
  let a = [...arr];
  if (a.indexOf(bookName) >= 0) {
    a.splice(a.indexOf(bookName),1);
    return a;
  }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);


// SOLUTION 2:

function add (list,bookName){
  return [...list,bookName];
}

function remove (list,bookName) {
  if (list.indexOf(bookName) >= 0) {
    return list.filter((item) => item !== bookName);
    }
}