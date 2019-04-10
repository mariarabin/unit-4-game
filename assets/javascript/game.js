$(document).ready(function () {
    alert("Get Ready!!!");

    $("#greenFront").justFlipIt({
        Click: true,
        Template: '1'
    });
    $("#pinkFront").justFlipIt({
        Click: true,
        Template: '2'
    });
    $("#purpleFront").justFlipIt({
        Click: true,
        Template: '3'
    });
    $("#whiteFront").justFlipIt({
        Click: true,
        Template: '4'
    });

    //reset game button
    $("button").click(function () {
        resetGame();
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