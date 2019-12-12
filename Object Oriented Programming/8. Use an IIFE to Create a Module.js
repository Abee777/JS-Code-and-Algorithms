/*An immediately invoked function expression (IIFE) is often used to group related 
functionality into a single object or module. For example, an earlier challenge 
defined two mixins: 
*/

function glideMixin(obj) {
  obj.glide = function() {
    console.log("Gliding on the water");
  };
}
function flyMixin(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  };
}

//We can group these mixins into a module as follows:

let motionModule = (function() {
  return {
    glideMixin: function (obj) {
      obj.glide = function() {
        console.log("Gliding on the water");
      };
    },
    flyMixin: function(obj) {
      obj.fly = function() {
        console.log("Flying, wooosh!");
      };
    }
  }
}) ();

/*The advantage of the module pattern is that all of the motion behaviors 
can be packaged into a single object that can then be used by other parts of 
your code. Here is an example using it:
*/

motionModule.glideMixin(duck);
duck.glide();

// One more Module:

let funModule = (function() {
  return {
    isCuteMixin: function(obj) {
      obj.isCute = function() {
        return true;
      };
    },
    singMixin: function(obj) {
      obj.sing = function() {
        console.log("Singing to an awesome tune");
      };
    }
  }
}) ();

// Module -> IIFE which returns -> object which properties are methods
