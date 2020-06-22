/* Find the smallest common multiple of the provided parameters that can be evenly 
divided by both, as well as by all sequential numbers in the range between these 
parameters. The range will be an array of two numbers that will not necessarily be 
in numerical order. */

// My solution:

function smallestCommons(arr) {
  //sorting arr from low to high
  var arr1 =[], i, final = [];
    if (arr[0] > arr[1]){
    arr1.push(arr[1], arr[0]);
  } else{
    arr1 = arr;
  }
  //final is range array of arr
  for (i = arr1[0]; i <= arr1[1]; i++){
    final.push(i);
  }
  //finding LCM(least common multiple) of integer array final, using the 
  //associative law:  lcm ⁡ ( a , b , c ) = lcm ⁡ ( lcm ⁡ ( a , b ) , c ) ,  
  function lcm(final){
  var a = Math.abs(final[0]);
    for ( i = 1; i < final.length; i++){
      var b = Math.abs(final[i]), c = a;
       while (a && b){ a > b ? a %= b : b %= a; } 
       a = Math.abs(c*final[i])/(a+b);
    }
    return a;
  }
  return lcm(final);
}

console.log(smallestCommons([5, 1])) // 60
console.log(smallestCommons([2, 10])) // 2520

//Greatest Common Divisor:

function gcd(a, b) {
  var R;
  while ((a % b) > 0)  {
    R = a % b;
    a = b;
    b = R;
  }
  return b;
}

// Performing GCD using Recursion:

function gcd(a, b) {
  if (b == 0)
    return a;
  else
    return gcd(b, (a % b));
}