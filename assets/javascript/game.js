$(document).ready(function () {

    // VARIABLES
    var targetNum = Math.floor((Math.random() * 100) + 4);

    var crystalOne = Math.floor((Math.random() * 10) + 1);
    var crystalTwo = Math.floor((Math.random() * 10) + 1);
    var crystalThree = Math.floor((Math.random() * 10) + 1);
    var crystalFour = Math.floor((Math.random() * 10) + 1);

    var wins = 0;
    var losses = 0;
    var total = 0;

    //Main Process







    //Functions



    // Page loads as a start of the game
    //User is able to click the crystals
    // Crystals display values when clicked
    //User wins, Win counter adds up 1 if user won, Page is reset after user wins 
    $("#win").text(wins);

    //User losses - Losses counter adds up 1 if user losses, Page is reset after user losses
    $("#loss").text(losses);
    //Reset screen
    var targetNum = Math.floor((Math.random() * 100) + 4);
    var crystalOne = Math.floor((Math.random() * 10) + 1);
    var crystalTwo = Math.floor((Math.random() * 10) + 1);
    var crystalThree = Math.floor((Math.random() * 10) + 1);
    var crystalFour = Math.floor((Math.random() * 10) + 1);

    var wins = 0;
    var losses = 0;
    var total = 0;

    $("#win").text(wins);
    $("#loss").text(losses);
    $("#totalScore").text(total);








    //Continue game
    //Total Score adds up selected crystals
    $("#totalScore").text(total);

})