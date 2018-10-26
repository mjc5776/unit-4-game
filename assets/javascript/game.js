
var playerCounter = 0;

$(document).ready(function() { 

    startGame()

function startGame(){

    randomNumber();
    createCrystal();
    $("#gameWins").text(0);
    $("#gameLose").text(0);
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
   
     var crystalArray = ['assets/images/blue_crystal.png','assets/images/green_crystal.png', 'assets/images/red_crystal.png', 'assets/images/purple_crystal.png' ];
    
     for(i = 0; i < crystalArray.length; i++){
        var crystalImg = crystalArray[i]; 
            var imageCrystal = $("<img>");
            imageCrystal.addClass("crystal");
            imageCrystal.attr("src", crystalImg);
            imageCrystal.attr("data-crystalvalue", crystalNumber());
            $("#crystals-container").append(imageCrystal);     
     };
    };
$(".crystal").on("click", function(){

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    playerCounter += crystalValue;
    $('#userScore').text(playerCounter);
    var computerNum = $("#number-to-guess").text();
    if(playerCounter == computerNum){
       $("#gameWins").text(calWins());
       resetGame();
    }
     else if (playerCounter > computerNum) {
        $("#gameLose").text(calLose());
        resetGame();
    };
});

function calWins(){
    
    wins = 0
    wins++; 
    return wins;
    
};

function calLose(){
    
    lose = 0 
    lose++;
    return lose;
};

function resetGame(){

    randomNumber();
    $("#userScore").text(0);
    playerCounter = 0;
}

});
