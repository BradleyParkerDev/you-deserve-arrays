/*
secondCharOfThirdString.js: prompts the user for an array then logs 
the second character in the third item in the array. 
If the third item is not a string, log an error instead
input: [1,2, "hello", 4]
input: [1,2, "h", 4]
input: [1,2,3,4]
*/

const prompt = require('prompt-sync')({sigint: true});

userArray = JSON.parse(prompt("Please create an array:  "));

if(userArray[2] !== undefined && typeof userArray[2] === 'string'){
    
    let str = userArray[2];
    if(str.length >= 2){
        
        console.log("The second character of the third item, in the array, is '" 
        + str.substring(1,2) + "'." );

    }
    else{
        
        console.log("The string doesnt have two or more characters.")

    }
}   
else{
    console.log("Error!")

}