/*TASK - We have an array of objects representing different people in our 
contacts lists.
The function should check if name is an actual contact's firstName and the 
given property (prop) is a property of that contact.
If both are true, then return the "value" of that property.
If name does not correspond to any contacts then return "No such contact".
If prop does not correspond to any valid properties of a contact found to 
match name then return "No such property".*/

var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

// My Solution:

function lookUpProfile(name, prop){
    for (var i=0; i<contacts.length; i++){
        if (contacts[i].firstName === name && contacts[i].hasOwnProperty(prop)){
            return contacts[i][prop];
        } 
    }
    for (var j=0; j<contacts.length;j++){
    if (contacts[j].firstName !== name){
            return "No such contact";
        } else {
            return "No such property";
        }
    }
}

// FCC solution:

function lookUpProfile(name, prop){
    for (var i=0; i<contacts.length; i++){
        if (name===contacts[i].firstName){
            return contacts[i][prop] || "No such property";  // Return this value if it exist OR use different value 
        } 
    } 
    return "No such contact"
}

console.log(lookUpProfile("Akira", "likes"));
console.log(lookUpProfile("Kristian", "lastName"));