$(document).ready(function () {
    alert("Get Ready!!!");

    $("button").click(function () {
        resetGame();
    });

    $("#green").click(function () {
        $("#block").animate({
            width: "70%",
            opacity: 0.4,
            marginLeft: "0.6in",
            fontSize: "3em",
            borderWidth: "10px"
        }, 1500);
    });




    // VARIABLES
    var targetNum = Math.floor((Math.random() * 100) + 4);

    var crystalOne = Math.floor((Math.random() * 10) + 1);
    var crystalTwo = Math.floor((Math.random() * 10) + 1);
    var crystalThree = Math.floor((Math.random() * 10) + 1);
    var crystalFour = Math.floor((Math.random() * 10) + 1);

    var wins = 0;
    var losses = 0;
    var total = 0;

    //MAIN PROCESS

    // Page loads as a start of the game

    //User is able to click the crystals

    // Crystals display values when clicked

    //Total adds up
    $("#current").text(total);

    //User wins
    $("#win").text(wins);

    //User losses
    $("#loss").text(losses);


    //User losses


    //Continue game


    //FUNCTIONS=================
    //Blinking Function
    setInterval(blinktext, 500);
    var txt = "";
    var count = 0;
    function blinktext() {
        var cntrl = document.getElementById("txtblinkingtext");
        if (!!cntrl) {
            if (count == 0)
                txt = cntrl.value;
            if (count % 2 == 0)
                cntrl.value = "";
            else
                cntrl.value = txt;
            count++;
        }
    }


    //Reset Game
    function resetGame() {
        alert("Game ends. Resetting");
        //setting back to original value
        var targetNum = Math.floor((Math.random() * 100) + 4);

        var crystalOne = Math.floor((Math.random() * 10) + 1);
        var crystalTwo = Math.floor((Math.random() * 10) + 1);
        var crystalThree = Math.floor((Math.random() * 10) + 1);
        var crystalFour = Math.floor((Math.random() * 10) + 1);

        var wins = 0;
        var losses = 0;
        var total = 0;


        //display
        $("#target").text(targetNum);
        $("#current").text(total);
        $("#win").text(wins);
        $("#loss").text(losses);
        $("#green").text(crystalOne);
        $("#pink").text(crystalTwo);
        $("#purple").text(crystalThree);
        $("#white").text(crystalFour);
        alert("Get Ready!!!");
    };
















})