//primitive data types
let name = "Ali"; //string
let age = 30; //number
let isStudent = true; //boolean
let nullValue = null; //null
let undefinedValue; //undefined

console.log(name); // Output: Ali
console.log(age); // Output: 30
console.log(isStudent); // Output: true
console.log(nullValue); // Output: null
console.log(undefinedValue); // Output: undefined
//primitive data types are immutable
name[0] = "J"; // This will not change the value of name
console.log(name); // Output: Ali
//primitive data types are passed by value
let x = 10;
let y = x; // y gets a copy of the value of x
x = 20; // Changing x does not affect y
console.log(x); // Output: 20
console.log(y); // Output: 10