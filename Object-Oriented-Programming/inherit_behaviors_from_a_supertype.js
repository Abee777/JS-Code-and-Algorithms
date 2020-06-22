/* Creating a supertype called Animal that defines behaviors shared by all animals:

function Animal() { }

Animal.prototype.eat = function() {
  console.log("nom nom nom");
};

 I way:  inheriting behavior from the supertype (or parent) Animal

let animal = new Animal();

 II way (use this one):  inheriting behavior from the supertype (or parent) Animal

let animal = Object.create(Animal.prototype);
*/

/* Now we can reuse Animal's methods inside Bird and Dog without defining them 
again. It uses a technique called inheritance.
*/

function Animal() { }

Animal.prototype = {
  constructor: Animal, 
  eat: function() {
    console.log("nom nom nom");
  }
};

let duck = Object.create(Animal.prototype); 
let beagle = Object.create(Animal.prototype);

duck.eat(); // Should print "nom nom nom"
beagle.eat(); // Should print "nom nom nom" 


/* Subtype becoming instance of parent:
Set the prototype of the subtype(or child) in this case, Bird to be an instance of 
Animal.
*/
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
let pigeon = new Bird("Donald");
pigeon.eat(); // prints "nom nom nom"

console.log(pigeon.constructor);

/*But pigeon and all instances of Bird should show that they were constructed by Bird 
and not Animal. To do so, we can manually set Bird's constructor property to the 
Bird object:
*/
Bird.prototype.constructor = Bird;
console.log(pigeon.constructor); // prints: function Bird() {}

