/* Behavior is shared through inheritance. However, there are cases when inheritance 
is not the best solution. Inheritance does not work well for unrelated objects like 
Bird and Airplane. They can both fly, but a Bird is not a type of Airplane and vice
versa.

For unrelated objects, it's better to use mixins. A mixin allows other objects 
to use a collection of functions. */

let flyMixin = function(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  }
};

//The flyMixin takes any object and gives it the fly method.

let bird = {
  name: "Donald",
  numLegs: 2
};

let plane = {
  model: "777",
  numPassengers: 524
};

flyMixin(bird);
flyMixin(plane);

bird.fly(); // prints "Flying, wooosh!"
plane.fly(); // prints "Flying, wooosh!"


/*TASK - Create a mixin named glideMixin that defines a method named glide. 
Then use the glideMixin to give both bird and boat the ability to glide.*/

let boat = {
  name: "Warrior",
  type: "race-boat"
};

let glideMixin = function (obj){
  obj.glide = function (){
    console.log("Gliding");
  }
}
glideMixin(bird);   //adding glide method to bird
glideMixin(boat);   //adding glide method to boat

bird.glide(); // prints "Gliding"
boat.glide(); // prints "Gliding"
