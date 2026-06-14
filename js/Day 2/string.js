//string 
let name = "Ali"
console.log(name); // Output: Ali
let greeting = "Hello, " + name + "!";
console.log(greeting); // Output: Hello, Ali!
let newGreeting = `Hello, ${name}!`; // Using template literals
console.log(newGreeting);
// Output: Hello, Ali!
console.log(name.length); // Output: 3
console.log(name.toUpperCase()); // Output: ALI
console.log(name.toLowerCase()); // Output: ali
console.log(name.charAt(0)); // Output: A
console.log(name.indexOf("l")); // Output: 1
console.log(name.substring(0, 2)); // Output: Ali
console.log(name.split("")); // Output: [ 'A', 'l', 'i' ]   