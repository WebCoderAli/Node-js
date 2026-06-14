//Array in JavaScript
let arr = [1, 2, 3, 4, 5];
console.log(arr); // Output: [1, 2, 3, 4, 5]
console.log(arr[0]); // Output: 1
console.log(arr[1]); // Output: 2
console.log(arr[2]); // Output: 3
console.log(arr[3]); // Output: 4
console.log(arr[4]); // Output: 5
//Arrays are mutable
arr[0] = 10; // This will change the value of the first element
console.log(arr); // Output: [10, 2, 3, 4, 5]
//Arrays can hold multiple values of different types
let mixedArr = [1, "Hello", true, null, undefined, { name: "Ali" }, [1, 2, 3]];
console.log(mixedArr); // Output: [1, 'Hello', true, null, undefined, { name: 'Ali' }, [1, 2, 3]]