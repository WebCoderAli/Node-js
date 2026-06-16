/* Declear a Array named "TeaFlaovors" that contains
 the following items: "Green Tea", "Black Tea", "Oolong Tea",
"White Tea" Store the Firsst item of the array in a 
variable named "firstTeaFlavor"
*/

let teaFalovors = ["Green Tea", "Black Tea", "Oolong Tea", "White Tea"];
let firstTeaFlavor = teaFalovors[0];
console.log(firstTeaFlavor); 

/* Declear a Array named "Cities" contains the following items: "New York",
"Los Angeles", "Chicago", "Houston" Store the third item of the array
 in a variable named "thirdCity"
 */

 let cities = ["New York", "Los Angeles", "Chicago", "Houston"];let thirdCity = cities[2];
 console.log(thirdCity);

 /* You have an Array named "teaTypes" that contains the following items: "Green Tea", "Black Tea", "Oolong Tea", "White Tea" Add a new item "Herbal Tea" to the end of the array. */

 let teaTypes = ["Green Tea", "Black Tea", "Oolong Tea", "White Tea"];
 teaTypes.push("Herbal Tea");
 console.log(teaTypes);


/* You have an Array named "cities" that contains the following items: "New York", "Los Angeles", "Chicago", "Houston" Remove the first item of the array and store it in a variable named "firstCity" */

let cities2 = ["New York", "Los Angeles", "Chicago", "Houston"];
let firstCity =  cities2.shift();
console.log(firstCity);

/* You have an Array named "teaTypes" that contains the following items: "Green Tea", "Black Tea", "Oolong Tea", "White Tea" Remove the last item of the array and store it in a variable named "lastTeaType" */

let teaTypes2 = ["Green Tea", "Black Tea", "Oolong Tea", "White Tea"];
let lastTeaType = teaTypes2.pop();
console.log(lastTeaType);

/* You have an Array named "cities" that contains the following items: "New York", "Los Angeles", "Chicago", "Houston" Add a new item "Phoenix" to the beginning of the array. */

let cities3 = ["New York", "Los Angeles", "Chicago", "Houston"];
cities3.unshift("Phoenix");
console.log(cities3);

/* You have an Array named "teaTypes" that contains the following items: "Green Tea", "Black Tea", "Oolong Tea", "White Tea" Add a new item "Herbal Tea" to the beginning of the array. */

let teaTypes3 = ["Green Tea", "Black Tea", "Oolong Tea", "White Tea"];
teaTypes3.unshift("Herbal Tea");
console.log(teaTypes3);

/* SoftCopy the "teaTypes" array and store it in a new variable named "copiedTeaTypes". */

let teaTypes4 = ["Green Tea", "Black Tea", "Oolong Tea", "White Tea"];
let copiedTeaTypes = teaTypes4;
teaTypes4.push("Herbal Tea");
console.log(copiedTeaTypes);

console.log(teaTypes4)

/* DeepCopy the "cities" array and store it in a new variable named "copiedCities". */

let cities4 = ["New York", "Los Angeles", "Chicago", "Houston"];
let copiedCities = [...cities4];
console.log(copiedCities);