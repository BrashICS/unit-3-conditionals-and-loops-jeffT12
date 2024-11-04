/**
 * Unit 3 - Conditionals and Loops
 * ICS3 - Mr. Brash 🐿️
 * 
 * For this unit, Mr. Brash is trying something different. Each lesson will
 * be in this one repository, separated in the Lessons folder.
 * 
 * If you run into Git or Github issues, call Mr. Brash over.
 **/ 


'use strict';

/*** Event Listeners ***/


/*** Functions ***/

// A very accurate rounding function
function round(value, decimals) {
    let multiplier = 10**decimals;
    return Math.round((value + Number.EPSILON) * multiplier) / multiplier;
}

// Get a random number from min to max
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startgame(){

let playername = prompt("Pleas enter your name");

alert(`welcome, ${playername}, you have enter the Hunted St.Matthew HS!!!`);

let pathchoice == prompt=("Do you want to go into the (1) library or (2) basement?");

if(pathchoice == "1"){
    library();
} 
else if (pathchoice == "2") {
    basement();
} 
else {
    alert("That's not a valid choice! Please refresh and try again.");
}
}

function library() {

}