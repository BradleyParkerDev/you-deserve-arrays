/*

isLongList.js: prompts the user for an array then logs out a boolean 
indicating whether the array's length is at least 10

input: [1,2,3,4,5,6,7,8,9,10]
*/

const prompt = require('prompt-sync')({sigint: true});

userArray = JSON.parse(prompt("Please create an array:  "));

let myBool = false;

if(userArray.length === 10){
    myBool = true;
    console.log(myBool);
}
