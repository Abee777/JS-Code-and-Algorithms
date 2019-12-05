// ***Use Destructuring Assignment to Extract Values from Objects***
//ES5 Code :

// I Example: 
const user = { name: 'John Doe', age: 34 };
const name = user.name; // name = 'John Doe'
const age = user.age; // age = 34

//Here's an equivalent assignment statement using the ES6 destructuring syntax:

const { name, age } = user;  // name = 'John Doe', age = 34

// II Example:
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const {tomorrow, today} = HIGH_TEMPERATURES;

console.log(today); // should be 77
console.log(tomorrow); // should be 80

----------------------
// ***Use Destructuring Assignment to Assign Variables from Objects***
// I Example: 
const user = { name: 'John Doe', age: 34 };
const { name: userName, age: userAge } = user;  // get the field 'name' and copy the value into 'userName'
// userName = 'John Doe', userAge = 34

// II Example:
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const {today: highToday, tomorrow:highTomorrow} = HIGH_TEMPERATURES;

----------------------
// ***Use Destructuring Assignment to Assign Variables from Nested Objects***
// I Example: 
const user = {
  johnDoe: { 
    age: 34,
    email: 'johnDoe@freeCodeCamp.com'
  }
};

const { johnDoe: { age, email }} = user;
const { johnDoe: { age: userAge, email: userEmail }} = user;

// II Example:
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};
  
const {today: {low:lowToday, high:highToday}} = LOCAL_FORECAST;

----------------------
//***Use Destructuring Assignment to Assign Variables from Arrays***

const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b); // 1, 2

const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c); // 1, 2, 5


let a = 8, b = 6;

 [a,b] = [b,a]

console.log(a); // should be 6
console.log(b); // should be 8
