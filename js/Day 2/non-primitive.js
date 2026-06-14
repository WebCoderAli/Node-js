//Non primitive data types are objects, arrays, functions, etc. They are mutable and can hold multiple values. They are stored in the heap memory and accessed by reference.
//non-primitive data types
let person = {
    name: "Ali",
    age: 30,
    isStudent: true
};
console.log(person); // Output: { name: 'Ali', age: 30, isStudent: true }
console.log(person.name); // Output: Ali
console.log(person.age); // Output: 30
console.log(person.isStudent); // Output: true
//non-primitive data types are mutable
person.name = "John"; // This will change the value of name
console.log(person.name); // Output: John
//non-primitive data types are passed by reference
let person2 = person; // person2 gets a reference to the same object as person
person.name = "Jane"; // Changing person.name will affect person2.name
console.log(person.name); // Output: Jane
console.log(person2.name); // Output: Jane