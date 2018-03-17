// Global variables
var wins = 0;
var losses = 0;
var targetNumber = 0;
var totalScore = 0;
var counterNumber = 0;
var gemValue = [10, 5, 3, 7];
var randGemValue = [];
var increment = 0;
var gemsArray = ["assets/images/Gem_One.jpg", "assets/images/Gem_Two.jpg", "assets/images/Gem_Three.jpg" ,"assets/images/Gem_Four.jpg"]

// start game function
function startGame() {
    targetNumber = "";
    totalScore = 0;
    increment = "";
    
    // increment = gemValue[Math.floor(Math.random() * gemValue.length)];
    targetNumber = Math.floor(Math.random() * 61) + 40;
    

    $("#guess_number").text(targetNumber);
    console.log("Start game working");
}

function getGemNumber() {
    for (var i = 0; i < gemValue.length; i++) {
        randGemValue.push(gemValue[Math.round(Math.random())]);
    }
    console.log(randGemValue);
    for (var i = 0; i < gemValue.length; i++) {
        var imageCrystal = $("<img>");
        imageCrystal.addClass("crystal-image");
        imageCrystal.attr("src", gemsArray[i]);
        imageCrystal.attr("data-crystalvalue", gemValue[i]);
    
        // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
        crystals.append(imageCrystal);
     }

}



// reset game function

// relist variable to start on clean slate
// random number generator to generate random number to achieve
startGame();
getGemNumber();




// on click for each crystal
 /*$("#gem_container").on("click", ".gemOne", function() {
    totalScore += increment;
    $("#currentScore").text(totalScore);
    console.log("Gem One Working"); 
}).on */

/* $("#crystals").on("click", ".crystal-image", function() {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    totalScore += crystalValue;
}); */


