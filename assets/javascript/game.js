
//VARIABLES DECLARED --

const targetScoreMin = 19;   // this is the min number the Target Score can be
const targetScoreMax = 120;  // this is the max number the Target Score can be

var wins = 0;
var losses = 0;


var targetScore = createTargetScore();

function createTargetScore(){
    var randomNumber = Math.floor(Math.random() * (+targetScoreMax - +targetScoreMin) + +targetScoreMin);    // creating a random Target Score number when game page is refreshed
    $("#target-score-to-guess").text(randomNumber); //showing the random generated number under the Target Score title; ref html page
    console.log("Target Score: " + randomNumber);
    return randomNumber;
}

// GENERATE RANDOM NUMBER FOR EACH CRYSTAL --
// store the randomly generated number in each crystal image

var yourScore = 0;

function getRandomCrystalValue() {
    return Math.ceil(Math.random() * 12);
}

var images = ["./assets/images/yellow-gem.png", "./assets/images/red-gem.png", "./assets/images/green-gem.png", "./assets/images/indigo-gem.png"]

console.log("Random Value: " + getRandomCrystalValue());

for (var i = 0; i < images.length; i++) {
    var crystalImage = $("<img>");
    
    crystalImage.addClass("crystal-images");
    crystalImage.html("<img>");
    crystalImage.attr("src", images[i]);
    crystalImage.attr("data-value-for-crystals", getRandomCrystalValue());
    $("#crystals").append(crystalImage);   
}
    
// BEGINNING THE GAME --

$(".crystal-images").on("click", function() {    // after a Target Score is genereated, the game begins when player clicks on an image-crystal

    var crystalValue = ($(this).attr("data-value-for-crystals"));
    console.log("Crystal value: " + crystalValue);
    crystalValue = parseInt(crystalValue);

    yourScore += crystalValue;

    $("#your-score-is").text(yourScore);
    console.log("Your Score: " + yourScore);
    
    checkYourScore();
    
    function checkYourScore(){
        if (yourScore === targetScore) {
            wins++;
            $("#number-of-wins").text(wins);
        } else if (yourScore > targetScore){
            losses++;
            $("#number-of-losses").text(losses);
        } else {
            return;
        }
    } 

    reset();

    function reset(){
        wins = 0;
        losses = 0;
    }
});


    





// player clicks on a crystal option
    // then Your Score shows that amount

// player clicks on another crystal or same crystal
    // Your Score amount increases by that amount

// player continues to click on crystal options until they get to target number

// if player matches the target number, their Win goes up by 1, and then new random target number is generated (repeat process above)

// if player goes over the target number, then Loss goes up by 1 and a new random target number is generated (repeat process above)

