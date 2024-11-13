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

// Setup the menu
let message = `Hi! Please make a selection:
1 - Play
2 - Options
3 - DLC
4 - Check for Updates
5 - Exit
`
// Prompt with the menu
let selection = Number(prompt(msg));

function start(){
document.getElementById("message").innerHTML="message";
}

function average(0) {
 let avg = o;
 let count =1;
 while (count <= n){
  avg = avg + number (prompt (`please enter value ${count}/${n}`));
  count++;  
 }
 avg = round(avg/n,1);
 console.log(`the average is ${avg}`);
}

function random_until(min, max, stop) {
    //check that max is greater than min. If not, return -1;
    if(max <= min){
        return -1;
    }
    //check that stop is between (or equal to) min and max. If not, return -1;
    if(stop < min || stop > max || max <= min){
        return -1;
    }
    //generate the first random number
    let rnd = randInt(min,max);

    while(rnd != stop) {
        console.log(rnd);
        rnd = randInt(min,max);

        return stop(){

        }
    }
}