/*TASK - Write your own Array.prototype.myFilter(), which should behave exactly 
like Array.prototype.filter(). You may use a for loop or the 
Array.prototype.forEach() method.*/

// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){
  var newArray = [];
  this.forEach(function(x){
    if (callback(x)){
      newArray.push(x);
    }
  });
  return newArray;
};

var new_s = s.myFilter(function(item){
  return item % 2 === 1;
});

console.log(new_s)


// Solution using for loop:

Array.prototype.myFilter = function(callback){
  var newArray = [];
  for (let i=0; i<this.length;i++){
    if(callback(this[i])=== true ){
      newArray.push(this[i]);
    }
  }
  return newArray;
};

var new_s = s.myFilter(function(item){
  return item % 2 === 1;
});