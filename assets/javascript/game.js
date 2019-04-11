// Page loads as a start of the game
$(document).ready(function () {
    alert("Get Ready!!!");
    var targetNum = Math.floor((Math.random() * 100) + 4);
    $("#target").text(targetNum);

    // VARIABLES
    var targetNum = Math.floor((Math.random() * 100) + 4);

    var crystalOne = Math.floor((Math.random() * 10) + 1);
    var crystalTwo = Math.floor((Math.random() * 10) + 1);
    var crystalThree = Math.floor((Math.random() * 10) + 1);
    var crystalFour = Math.floor((Math.random() * 10) + 1);

    var wins = 0;
    var losses = 0;
    var total = 0;

    //MAIN PROCESS 1

    //User is able to click the crystals
    // Crystals display values when clicked

    $("#greenFront").on('click', function () {
        $("#greenFront").justFlipIt({
            Click: true,
            Template: '1' ///how to make this as a random value???
        });
        total = total + $("greenBack");
    });

    $("#pinkFront").on('click', function () {
        $("#pinkFront").justFlipIt({
            Click: true,
            Template: '2'
        });
        total = total + $("pinkBack");
    });


    $("#purpleFront").on('click', function () {
        $("#purpleFront").justFlipIt({
            Click: true,
            Template: '3'
        });
        total = total + $("purpleBack");
    });


    $("#whiteFront").on('click', function () {
        $("#whiteFront").justFlipIt({
            Click: true,
            Template: '4'
        });
        total = total + $("whiteBack");
    });

    //User Wins
    if (total === targetNum) {
        $("#current").text(total);
        wins++;
        alert('You win!');
        continueGame(); //to create a function below
    };

    //User losses
    if (total !== targetNum && total > targetNum) {
        $("#current").text(total);
        losses++;
        alert('You lose!');
        continueGame();
    };

    //reset game button
    $("button").click(function () {
        resetGame();
    });


    //FUNCTIONS=================
    //Continue game
    function continueGame() {
        alert("Game continues...");
        var targetNum = Math.floor((Math.random() * 100) + 4);

        var crystalOne = Math.floor((Math.random() * 10) + 1);
        var crystalTwo = Math.floor((Math.random() * 10) + 1);
        var crystalThree = Math.floor((Math.random() * 10) + 1);
        var crystalFour = Math.floor((Math.random() * 10) + 1);

        var total = 0;

        //display
        $("#target").text(targetNum);
        $("#current").text(total);
        $("#green").text(crystalOne);
        $("#pink").text(crystalTwo);
        $("#purple").text(crystalThree);
        $("#white").text(crystalFour);
    };



    //*********** */Blinking Function*************
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



    //**************/Reset Game*****************
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
});
