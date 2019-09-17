//VARIABLES DECLARED --

const targetScoreMin = 19;   // this is the min number the Target Score can be
const targetScoreMax = 120;  // this is the max number the Target Score can be

var wins = 0;
var losses = 0;

var targetScore = createTargetScore();

function createTargetScore(){
    var randomNumber = Math.floor(Math.random() * (+targetScoreMax - +targetScoreMin) + +targetScoreMin);    // creating a random Target Score number when game page is refreshed
    $("#target-score-to-guess").text(randomNumber); //showing the random generated number under the Target Score title; ref html page
    console.log("Target Number: " + randomNumber);
    return randomNumber;
}

// A random number is generated and stored in each crystal image.

var yourScore = 0;

function getRandomCrystalValue() {
    return Math.ceil(Math.random() * 12);
}

for (var i = 0; i < getRandomCrystalValue; i++) {
    var crystalImage = $("<img>");
    crystalImage.addClass("crystal-image");
    crystalImage.attr("src", "assets/images/gem-clipart-yellow-gem-5.png");
    crystalImage.attr("data-value-for-crystals", getRandomCrystalValue);
    $("#crystals").append(crystalImage);
}


// BEGINNING THE GAME --

$(".crystal-images").on("click", function() {    // after a Target Score is genereated, the game begins when player clicks on an image-crystal

    
    var crystalValue = ($(this).attr("data-value-for-crystals"));
    // var redCrystalValue = ($(this).attr("data-valueforredcrystal"));
    // var greenCrystalValue = ($(this).attr("data-valueforgreencrystal"));
    // var indigoCrystalValue = ($(this).attr("data-valueforindigocrystal"));

    crystalValue = parseInt(crystalValue);
    // redCrystalValue = parseInt(redCrystalValue);
    // greenCrystalValue = parseInt(greenCrystalValue);
    // indigoCrystalValue = parseInt(indigoCrystalValue);


    // for (yourScore = 0; yourScore < crystalValue; yourScore++){
    //     return yourScore;
    // }

    yourScore = yourScore + crystalValue;

    $("#your-score-is").text(yourScore);
    // if (yourScore === targetNumber) {
    //     alert("You win!");
    //   }
  
    //   else if (yourScore >= targetNumber) {
    //     alert("You lose!!");
    //   }
    
});

    console.log("Your Score:" + yourScore);




// player clicks on a crystal option
    // then Your Score shows that amount

// player clicks on another crystal or same crystal
    // Your Score amount increases by that amount

// player continues to click on crystal options until they get to target number

// if player matches the target number, their Win goes up by 1, and then new random target number is generated (repeat process above)

// if player goes over the target number, then Loss goes up by 1 and a new random target number is generated (repeat process above)

