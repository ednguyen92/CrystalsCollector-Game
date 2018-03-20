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
// relist variable to start on clean slate
function resetGame() {
    targetNumber = 0;
    counterNumber = 0;
    randGemValue = [];
  

    startGame();
    console.log("reset game working");
}

function getGemNumber() {
    for (var i = 0; i < 4; i++) {
        randGemValue.push(gemValue[Math.floor(Math.random() * gemValue.length)]);
    }
    console.log(randGemValue);
    for (var i = 0; i < gemValue.length; i++) {
        var imageCrystal = $("<img>");
        imageCrystal.addClass("crystal-image");
        imageCrystal.attr("src", gemsArray[i]);
        imageCrystal.attr("data-crystalvalue", randGemValue[i]);
    
        // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
        crystals.append(imageCrystal);
     }

}

startGame();

// on click for each crystal
crystals.on("click", ".crystal-image", function() {

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




