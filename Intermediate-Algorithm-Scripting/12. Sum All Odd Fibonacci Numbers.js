/*The first two numbers in the Fibonacci sequence are 1 and 1. 
Every additional number in the sequence is the sum of the two previous numbers. 
The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8. 
For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less 
than or equal to 10 are 1, 1, 3, and 5.*/

// My solution:

function sumFibs(num) {
  let arr = [1,1];
  for (let i = 1; i <= num/2; i++){
    arr.push(arr[i]+arr[i-1])
    console.log(arr)
  }
  return arr.filter(x=> x%2 ===1 && x<=num).reduce((x,y)=>x+y);
}

console.log(sumFibs(4));

// Interesting with while :

function sumFibs(num) {
    var prevNumber = 0;
    var currNumber = 1;
    var result = 0;
    while (currNumber <= num) {
        if (currNumber % 2 !== 0) {
            result += currNumber;
        }
        currNumber += prevNumber;
        prevNumber = currNumber - prevNumber;
    }
    return result;
}
