// console.log("This is my first object module in node js ");
//In node js we can create an object module and export it to another file

// const {log} = require("console")

// log("This is my first object module in node js ")

export const person = {
    name : "Ali Hamza",
    age : 22,
    city : "Karachi"
}

import os from "os"
// console.log(os.hostname)

// console.log(os.platform)

console.log(process.version)
console.log(process.cwd)