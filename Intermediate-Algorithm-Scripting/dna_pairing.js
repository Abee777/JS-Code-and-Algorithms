/*The DNA strand is missing the pairing element. Take each character, get its pair,
and return the results as a 2d array. Base pairs are a pair of AT and CG. 
Match the missing element to the provided character.
Return the provided character as the first element in each array.
For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
The character and its pair are paired up in an array, and all the arrays are 
grouped into one encapsulating array. 
*/

// My Solution:

function pairElement(str) {
   let finalArr = [];
   for(let i=0;i<str.length;i++){
     let newArr = [];
     if(str[i]==='A'){
       newArr.push(str[i],'T');
     } else if (str[i]==='T'){
       newArr.push(str[i],'A');
     } else if (str[i]==='C'){
       newArr.push(str[i],'G');
     } else {
       newArr.push(str[i],'C')
     }
     finalArr.push(newArr);
   }
   return finalArr;
}

console.log(pairElement("GCG"));

// Intermediate Code Solution:

function pairElement(str) {
    //create object for pair lookup
    var pairs = {
      "A": "T",
      "T": "A",
      "C": "G",
      "G": "C"
    }
    //split string into array of characters
    var arr = str.split("");
    //map character to array of character and matching pair
    return arr.map(x => [x,pairs[x]]);
  }
  