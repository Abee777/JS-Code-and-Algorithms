
//Add the own properties of canary to the array ownProps:
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];

// Add the own properties of canary to the array ownProps:
for (let property in canary){
  if(canary.hasOwnProperty(property)){
    ownProps.push(property);
  }
}

console.log(ownProps); // prints [ "name", "numLegs" ]

//CREATE PROTOTYPE

//Add a numLegs property to the prototype of Dog:
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4; //Now all instances of Dog have the numLegs property.

let beagle = new Dog("Snoopy");

console.log(beagle.numLegs); // prints 4

// Iterate Over All Properties

/* Add all of the own properties of beagle to the array ownProps. 
 Add all of the prototype properties of Dog to the array prototypeProps.*/

let ownProps = [];
let prototypeProps = [];

for (let property in beagle) {
  if(beagle.hasOwnProperty(property)) {s
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

console.log(ownProps); // prints ["name"]
console.log(prototypeProps); // prints ["numLegs"]