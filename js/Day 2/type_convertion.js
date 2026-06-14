// Implicit type conversion
let a = 5; // number
let b = "10"; // string
let c = a + b;  // Implicitly converts a to string and concatenates
console.log(c); // Output: "510"
// Explicit type conversion
let d = Number(b); // Explicitly converts b to number
let e = a + d; // Now both a and d are numbers, so it performs addition 
console.log(e); // Output: 15
// Another example of explicit type conversion
let f = String(a); // Explicitly converts a to string
console.log(f); // Output: "5"