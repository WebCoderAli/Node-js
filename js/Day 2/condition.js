//check if number1 is greater than number2
let number1 = 0;
let number2 = 5;
if (number1 > number2) {
    console.log("number1 is greater than number2"); // This will execute if number1 is greater than number2
} else {    
    console.log("number1 is not greater than number2"); // This will execute if number1 is not greater than number2 (i.e., if number1 is less than or equal to number2)
}

//Check if a string is equal to another string
let string1 = "Hello";
let string2 = "Hello";
if (string1 === string2) {
    console.log("string1 is equal to string2"); // This will execute if string1 and string2 are exactly the same
} else {
    console.log("string1 is not equal to string2"); // This will execute if string1 and string2 are not the same (case-sensitive)
}


//Check if a variable is number or not
let variable = 10;

if (typeof variable === "number") {
    console.log("variable is a number"); // This will execute if variable is of type number
} else {
    console.log("variable is not a number");    // This will execute if variable is not of type number
}

//Check if a Boolean variable is true or false

let isLoggedIn = true;
if (isLoggedIn) {
    console.log("User is logged in"); // This will execute if isLoggedIn is true
} else {
    console.log("User is not logged in"); // This will execute if isLoggedIn is false
}

//Check if a array is empty or not

let arr = [];

if (arr.length === 0){
    console.log("Array is empty"); // This will execute if array is empty (length is 0)
} else {
    console.log("Array is not empty"); // This will execute if array is not empty (length is greater than 0)
}