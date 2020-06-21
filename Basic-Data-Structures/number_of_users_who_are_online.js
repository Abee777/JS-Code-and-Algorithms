/* We've defined a function, countOnline; use a for...in statement within 
this function to loop through the users in the users object and return the 
number of users whose online property is set to true.*/

/* example:
for (let user in users) {
  console.log(user);
};

// logs:
Alan
Jeff
Sarah
Ryan  */

let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function countOnline(obj) {
  // change code below this line
  let num = 0;
  for (let user in obj){
    if (obj[user]['online'] === true){   // also works w/o: "=== true"
      num++;
    }
  }
   return num;
  // change code above this line
}

console.log(countOnline(users));

// interesantan nacin da se izbaci array sklopljen od keys od nekog object-a:
console.log(Object.keys(users));
