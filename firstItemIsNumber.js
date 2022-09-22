/*

firstItemIsNumber.js: prompts the user for an array then logs 
out a boolean indicating whether or not 
the first item in the array is a number

input: [1,2,3]
input: ["hi", 2, 3]
*/

const prompt = require('prompt-sync')({sigint: true});

userArray = JSON.parse(prompt("Please create an array:  "));

let myBool = false;

if(typeof userArray[0] === "number"){
    myBool = true;
    console.log(myBool);
    console.log("The first item is a number.");

}
else{
    console.log(myBool);
    console.log("The first item is not a number.");

}