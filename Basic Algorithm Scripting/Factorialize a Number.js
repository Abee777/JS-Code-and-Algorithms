/*TASK - Return the factorial of the provided integer.
Only integers greater than or equal to zero will be supplied to the function. */

// My Initial Solution:

function factorialize(num) {
  for(let i=num-1; i>0;i--){
    num *= i;
  }
  if (num === 0){ return 1; }
  return num;
}

console.log(factorialize(5));

// Using Recursive Function:

function factorialize(num) {
  if (num === 0) { return 1; }
  return num * factorialize(num-1);
}
