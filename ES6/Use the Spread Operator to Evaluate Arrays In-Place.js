
//The ES5 code below uses apply() to compute the maximum value in an array:
var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr); // returns 89

/* We had to use Math.max.apply(null, arr) because Math.max(arr) returns NaN. 
Math.max() expects comma-separated arguments, but not an array.
The spread operator makes this syntax much better to read and maintain.*/

const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr); // returns 89

//...arr returns an unpacked array. In other words, it spreads the array.