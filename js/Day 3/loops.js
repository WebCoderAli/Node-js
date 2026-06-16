/* use while loop to calculate the sum of 1 to 5 natural numbers */

let i = 1;
let sum = 0;

while(i <= 5){
    sum += i;
    i++;
}

/* use while loop to create an array of numbers from 5 to 1 */

let arr = []

let j = 5;

while(j >= 1){
    arr.push(j);
    j--;
}

/* use do while loop to create an array of game names */

let gameCollections = ["Chess", "Monopoly", "Scrabble", "Clue"];
let game;

do{
    game = prompt(`Please enter a game name (write "exit" to stop):`);
    if(game !== "exit"){
        gameCollections.push(game);
    }
} while(game !== "exit");


// use do while loop to calculate the sum of 1 to 3 natural numbers
let total = 0;
let k = 1;

do{
    total += k;
    k++;
}while(k <= 3);


let arr2 = [2,4,6,8,10];
let multiArray = [];

for(let i = 0; i < arr2.length; i++){

    multiArray.push(arr2[i] * 2);

}

let cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
let myCities = [];
for(let i = 0; i < cities.length; i++){
    myCities.push(cities[i]);
}