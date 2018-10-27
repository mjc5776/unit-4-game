
var playerCounter = 0;
var crystalArray = ['assets/images/blue_crystal.png','assets/images/green_crystal.png', 'assets/images/red_crystal.png', 'assets/images/purple_crystal.png' ];
var wins = 0;
var lose = 0;
$(document).ready(function() { 

    startGame()

function startGame(){

    randomNumber();
    createCrystal();
    $("#gameWins").text(wins);
    $("#gameLose").text(lose);
};
   

function crystalNumber() {

   var crystalNum = Math.floor(Math.random() * (12 - 1) + 1);
    return crystalNum;
};

function randomNumber() {

    var randNum = Math.floor(Math.random() * (120 - 19) + 19);
    $("#number-to-guess").text(randNum);
};

function createCrystal(){
     
     for(i = 0; i < crystalArray.length; i++){
        var crystalImg = crystalArray[i]; 
            var imageCrystal = $("<img>");
            imageCrystal.addClass("crystal");
            imageCrystal.attr("src", crystalImg);
            imageCrystal.attr("data-crystalvalue", crystalNumber());
            $("#crystals-container").append(imageCrystal);     
     };
    };

 function resetCrystalVal(){
    for(i = 0; i < crystalArray.length; i++){
        imageCrystal.attr("data-crystalvalue", crystalNumber());
 };
};   

$(".crystal").on("click", function(){

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    playerCounter += crystalValue;
    $('#userScore').text(playerCounter);
    var computerNum = $("#number-to-guess").text();
    if(playerCounter == computerNum){
       wins++;
       resetGame();
    }
     else if (playerCounter > computerNum) {
        lose++;
        resetGame();
    };
});

function resetGame(){

    randomNumber();
    $("#userScore").text(0);
    //resetCrystalVal();
    playerCounter = 0;
    $("#gameWins").text(wins);
    $("#gameLose").text(lose);
};


});
