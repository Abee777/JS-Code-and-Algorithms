const getMousePosition = (x, y) => ({
  x: x,
  y: y
});

/*ES6 provides the way to eliminate the redundancy of having to write x: x. 
You can simply write x once, and it will be converted to x: x (or something 
equivalent) under the hood. */

const getMousePosition = (x, y) => ({ x, y });


// Example:

const createPerson = (name, age, gender) => {
  "use strict";
  return {
    name: name,
    age: age,
    gender: gender
  };
  
};

// Concise Object Literal:
const createPerson = (name, age, gender) => {
  "use strict";
  return {name, age, gender};
};

console.log(createPerson("Zodiac Hasbro", 56, "male"));
//Returns {"name":"Zodiac Hasbro","age":56,"gender":"male"}
