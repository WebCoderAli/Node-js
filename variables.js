// Variables in JavaScript
//let - block scope variable
//var - function scope variable
//const - block scope variable that cannot be reassigned
let name = "Ali Hamza";
name = "Hamza"
var age = 22;
age = 23;   

const country = "Pakistan";
console.log(name); // Output: Hamza
console.log(age); // Output: 23
console.log(country); // Output: Pakistan

country = "Japan"; // This will throw an error because country is a constant