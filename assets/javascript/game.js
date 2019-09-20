//VARIABLES DECLARED --

const targetScoreMin = 19;   // this is the min number the Target Score can be
const targetScoreMax = 120;  // this is the max number the Target Score can be

var wins = document.getElementById("number-of-wins").textContent = "0";;
var losses = document.getElementById("number-of-losses").textContent = "0";;
var targetScore = document.getElementById("target-score-to-guess");
var yourScore = document.getElementById("your-score-is").textContent = "0";

runNewGame();

function runNewGame(){
    targetScore = createTargetScore();
    crystalSetUp();
    yourScore = 0;

    $(".crystal-images").on("click", function() {
        incrementScoreByCrystalValue(this);
        checkYourScore();
    });
}

function getRandomCrystalValue() {
    return Math.ceil(Math.random() * 12);
}

// GENERATE RANDOM NUMBER FOR EACH CRYSTAL --
// store the randomly generated number in each crystal image
function crystalSetUp() {
    var images = ["./assets/images/purple-crystal.jpg", "./assets/images/pink-crystal.jpg", "./assets/images/white-crystal.jpg", "./assets/images/gold-crystal.jpg"]

    $("#crystals").empty();
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
        runNewGame();
    } else if (yourScore > targetScore){
        losses++;
        $("#number-of-losses").text(losses);
        runNewGame();
    } else {
        return;
    }
} 




