// Global variables
var wins = 0;
var losses = 0;
var targetNumber = 0;
var counterNumber = 0;
var gemValue = [10, 5, 3, 7];
var randGemValue = [];
var gemsArray = ["assets/images/Gem_One.jpg", "assets/images/Gem_Two.jpg", "assets/images/Gem_Three.jpg" ,"assets/images/Gem_Four.jpg"]
var crystals = $("#crystals");


// start game function
function startGame() {
    targetNumber = 0;
    counterNumber = 0;
    randGemValue = [];
    
    
    targetNumber = Math.floor(Math.random() * 61) + 40;
    $("#guess-number").text(targetNumber);
    $("#currentScore").text(counterNumber);
    getGemNumber();
    console.log("Start game working");
}

// reset game function
function resetGame() {
    targetNumber = 0;
    counterNumber = 0;
    randGemValue = [];
  

    startGame();
    console.log("reset game working");
}

// Get random numbers for each gem and assign the values to each image function
function getGemNumber() {
    for (var i = 0; i < 4; i++) {
        randGemValue.push(gemValue[Math.floor(Math.random() * gemValue.length)]);
    }
    console.log(randGemValue);

    $('.gemOne').attr("data-crystalvalue", randGemValue[0]);
    $('.gemTwo').attr("data-crystalvalue", randGemValue[1]);
    $('.gemThree').attr("data-crystalvalue", randGemValue[2]);
    $('.gemFour').attr("data-crystalvalue", randGemValue[3]);

}

startGame();

// on click for each crystal
$(".crystal-box").on("click", function() {

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counterNumber += crystalValue;
    $("#currentScore").text(counterNumber);

    if (counterNumber === targetNumber) {
      wins++;
      $("#wins").text(wins);
      resetGame();
    }

    else if (counterNumber >= targetNumber) {
      losses++;
      $("#losses").text(losses);
      resetGame();
    }

  });




