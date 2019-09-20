
//VARIABLES DECLARED --

const targetScoreMin = 19;   // this is the min number the Target Score can be
const targetScoreMax = 120;  // this is the max number the Target Score can be

var wins = 0;
var losses = 0;
var targetScore;
var yourScore;

initializeGame();

$(".crystal-images").on("click", function() {
    incrementScoreByCrystalValue(this);
    checkYourScore();

});

function gameRestart(){
    targetScore = createTargetScore();
    yourScore = 0;
}
gameRestart();

function getRandomCrystalValue() {
    return Math.ceil(Math.random() * 12);
}

// GENERATE RANDOM NUMBER FOR EACH CRYSTAL --
// store the randomly generated number in each crystal image
function crystalSetUp(){
    var images = ["./assets/images/yellow-gem.png", "./assets/images/red-gem.png", "./assets/images/indigo-gem.png", "./assets/images/green-gem.png"]
    console.log("Random Value: " + getRandomCrystalValue());

    for (var i = 0; i < images.length; i++) {
        var crystalImage = $("<img>");
        crystalImage.addClass("crystal-images");
        crystalImage.html("<img>");
        crystalImage.attr("src", images[i]);
        crystalImage.attr("data-value-for-crystals", getRandomCrystalValue());
        $("#crystals").append(crystalImage);   
    }
}

function createTargetScore(){
    var randomNumber = Math.floor(Math.random() * (+targetScoreMax - +targetScoreMin) + +targetScoreMin);    // creating a random Target Score number when game page is refreshed
    $("#target-score-to-guess").text(randomNumber); //showing the random generated number under the Target Score title; ref html page
    console.log("Target Score: " + randomNumber);
    return randomNumber;
}

function initializeGame() {
    targetScore = createTargetScore();
    crystalSetUp();
    yourScore = 0;
}

// Increments your score by crystal value
function incrementScoreByCrystalValue(crystal){
    var crystalValue = ($(crystal).attr("data-value-for-crystals"));
    console.log("Crystal value: " + crystalValue);
    crystalValue = parseInt(crystalValue);

    yourScore += crystalValue;

    $("#your-score-is").text(yourScore);
    console.log("Your Score: " + yourScore);
}

function checkYourScore(){
    if (yourScore === targetScore) {
        wins++;
        $("#number-of-wins").text(wins);
        gameRestart();
    } else if (yourScore > targetScore){
        losses++;
        $("#number-of-losses").text(losses);
        gameRestart();
    } else {
        return;
    }
} 




