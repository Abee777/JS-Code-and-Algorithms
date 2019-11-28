/*TASK - Check if a string (first argument, str) ends with the given target 
string (second argument, target).

This challenge can be solved with the .endsWith() method, which was 
introduced in ES2015. But for the purpose of this challenge, we would like 
you to use one of the JavaScript substring methods instead. */

// My first solution:

function confirmEnding(str, target) {
 let a = 0;
 for (let i=0; i<target.length;i++){
   if(str.split('').reverse()[i] === target.split('').reverse()[i]){
     a++;
   }
 }
return a === target.length;				//posto ovo radi isto sto i "if"
}

// My second solution:

function confirmEnding (str, target){
  return str.slice(str.length - target.length) === target;
}

// Using endsWith() Method

function confirmEnding(str, target) {
 return str.endsWith(target)		
}