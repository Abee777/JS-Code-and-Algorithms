/* Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case. */ 

function convertToRoman(num) {
    let arabic = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4 , 1];
    let roman = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
    let romanNumber = '';
    for (let i=0;i<arabic.length;i++){
        while (arabic[i]<=num){
            romanNumber += roman[i];
            num-=arabic[i];
        }
    }
 return romanNumber;
}

console.log(convertToRoman(3024));
