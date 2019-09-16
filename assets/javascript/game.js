//VARIABLES DECLARED

var targetScoreMin = 19;   // this is the min number the Target Score can be
var targetScoreMax = 120;  // this is the max number the Target Score can be
var yourScore = 0;
var wins = 0;
var losses = 0;

var targetNumber = Math.floor(Math.random() * (+targetScoreMax - +targetScoreMin) + +targetScoreMin);    // creating a random Target Score number when game page is refreshed

$("#target-score-to-guess").text(targetNumber); //showing the random generated number under the Target Score title; ref html page
    
    console.log("Target Number: " + targetNumber);


// A random number is generated and stored in each crystal image.

//for the YELLOW crystal:
var randomYellowCrystalValue = Math.ceil(Math.random() * 12);

for(var i = 0; i < randomYellowCrystalValue; i++) {   //creating a for loop for each randomCrystalNumOption
    var yellowCrystal = $("<img>"); // for each iteration; a crystal image will take in a NumOption
    yellowCrystal.addClass("yellow-crystal");    //adding a class for each crystal image. Referencing html file span names
    yellowCrystal.attr("data-valueforyellowcrystal", randomYellowCrystalValue);    //giving each imageCrystal an attribute of a data-value
}
    console.log("Yellow Crystal Value: " + randomYellowCrystalValue);

//for the RED crystal:
var randomRedCrystalValue = Math.ceil(Math.random() * 12);

for(var i = 0; i < randomRedCrystalValue; i++) {   //creating a for loop for each randomCrystalNumOption
    var redCrystal = $("<img>"); // for each iteration; a crystal image will take in a NumOption
    redCrystal.addClass("red-crystal");    //adding a class for each crystal image. Referencing html file span names
    redCrystal.attr("data-valueforredcrystal", randomRedCrystalValue);    //giving each imageCrystal an attribute of a data-value
}

    console.log("Red Crystal Value: " + randomRedCrystalValue);

//for the greenGREEN crystal:
var randomGreenCrystalValue = Math.ceil(Math.random() * 12);

for(var i = 0; i < randomGreenCrystalValue; i++) {   //creating a for loop for each randomCrystalNumOption
    var greenCrystal = $("<img>");  // for each iteration; a crystal image will take in a NumOption
    greenCrystal.addClass("green-crystal");    //adding a class for each crystal image. Referencing html file span names
    greenCrystal.attr("data-valueforgreencrystal", randomGreenCrystalValue);    //giving each imageCrystal an attribute of a data-value
}

    console.log("Green Crystal Value: " + randomGreenCrystalValue);
    
//for the INDIGO crystal:
var randomIndigoCrystalValue = Math.ceil(Math.random() * 12);

for(var i = 0; i < randomIndigoCrystalValue; i++) {   //creating a for loop for each randomCrystalNumOption
    var indigoCrystal = $("<img>"); // for each iteration; a crystal image will take in a NumOption
    indigoCrystal.addClass("indigo-crystal");    //adding a class for each crystal image. Referencing html file span names
    indigoCrystal.attr("data-valueforindigocrystal", randomIndigoCrystalValue);    //giving each imageCrystal an attribute of a data-value
}

    console.log("Indigo Crystal Value: " + randomIndigoCrystalValue);


// BEGINNING THE GAME

    $(".image-crystal").on("click", function() {    // after a Target Score is genereated, the game begins when player clicks on an image-crystal

    var yellowCrystalValue = ($(this).attr("data-valueforyellowcrystal"));   //extracting value of the clikced crystal
    var redCrystalValue = ($(this).attr("data-valueforredcrystal"));
    var greenCrystalValue = ($(this).attr("data-valueforgreencrystal"));
    var indigoCrystalValue = ($(this).attr("data-valueforindigocrystal"));

    yellowCrystalValue = parseInt(yellowCrystalValue);
    redCrystalValue = parseInt(redCrystalValue);
    greenCrystalValue = parseInt(greenCrystalValue);
    indigoCrystalValue = parseInt(indigoCrystalValue);


    yourScore += yellowCrystalValue + redCrystalValue + greenCrystalValue + indigoCrystalValue;

    $("#your-score-is").text(yourScore);

    // yellowvalue + redvalue + greenvalue + indigovalue = yourScore

});





// player clicks on a crystal option
    // then Your Score shows that amount

// player clicks on another crystal or same crystal
    // Your Score amount increases by that amount

// player continues to click on crystal options until they get to target number

// if player matches the target number, their Win goes up by 1, and then new random target number is generated (repeat process above)

// if player goes over the target number, then Loss goes up by 1 and a new random target number is generated (repeat process above)
