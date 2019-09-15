//VARIABLES

var min = 19;
var max = 120;
var targetNumber = Math.floor(Math.random() * (+max - +min) + +min);

$("#target-score-to-guess").text(targetNumber); // game begins with target number 

    console.log("Target Number: " + targetNumber);


// each crystal contains a random, hidden number
var counter = 0;    //the counter begins at 0

var randomCrystalNumOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; //number/value randomly assigned to each crystal at the start of a new game

for(var i = 0; i < randomCrystalNumOptions.length; i++) {   //creating a for loop for each randomCrystalNumOption
    var imageCrystal = $("<img>"); // for each iteration; a crystal image will take in a NumOption

    imageCrystal.addClass("yellow-crystal");    //adding a class for each crsytal image. Referencing html file span names
    imageCrystal.addClass("red-crystal");
    imageCrystal.addClass("green-crystal");
    imageCrystal.addClass("indigo-crystal");
}


// $("#yellow-crystal").on("click", function()) {
// }





// player clicks on a crystal option
    // then Your Score shows that amount

// player clicks on another crystal or same crystal
    // Your Score amount increases by that amount

// player continues to click on crystal options until they get to target number

// if player matches the target number, their Win goes up by 1, and then new random target number is generated (repeat process above)

// if player goes over the target number, then Loss goes up by 1 and a new random target number is generated (repeat process above)
