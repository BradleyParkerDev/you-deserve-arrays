const prompt = require('prompt-sync')({sigint: true});

userArray = JSON.parse(prompt("Please create an array:  "));

console.log(userArray[userArray.length - 1]);

