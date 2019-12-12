/*A constructor function that inherits its prototype object 
from a supertype constructor function can still have its own methods in addition 
to inherited methods.*/

function Animal() { }

Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;

// We want Bird to also have unique behavior:

Bird.prototype.fly = function() {
  console.log("I'm flying!");
};

// Now instances of Bird will have both eat() and fly() methods:

let duck = new Bird();
duck.eat(); // prints "nom nom nom"
duck.fly(); // prints "I'm flying!"

