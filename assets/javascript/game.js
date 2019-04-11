// Page loads as a start of the game
$(document).ready(function () {
    alert("Let's get R-E-A-D-Y👾!!!");
    var targetNum = Math.floor((Math.random() * 100) + 4);
    $("#target").text(targetNum);

    // VARIABLES===========================

    var crystalOne = Math.floor((Math.random() * 10) + 1);
    var crystalTwo = Math.floor((Math.random() * 10) + 1);
    var crystalThree = Math.floor((Math.random() * 10) + 1);
    var crystalFour = Math.floor((Math.random() * 10) + 1);

    var wins = 0;
    var losses = 0;
    var total = 0;

    //MAIN PROCESS 1====================

    //User is able to click the crystals
    // Crystals display values when clicked

    $("#greenFront").on('click', function () {
        $("#greenFront").justFlipIt({
            Click: true,
            Template: '<img id="greenFront" src="./assets/images/green1.png" height="200px" width="200px" ;></img>'
        });
        total = total + crystalOne;
        $("#current").text(("" + total));
        console.log("green1 total:" + total);
        checkWin();
        checkLoss();
    });

    $("#pinkFront").on('click', function () {
        $("#pinkFront").justFlipIt({
            Click: true,
            Template: '<img id="greenFront" src="./assets/images/pink1.png" height="200px" width="200px" ;></img>'
        });
        total = total + crystalTwo;
        $("#current").text(("" + total));
        console.log("pink1 total:" + total);
        checkWin();
        checkLoss();
    });


    $("#purpleFront").on('click', function () {
        $("#purpleFront").justFlipIt({
            Click: true,
            Template: '<img id="purpleFront" src="./assets/images/yellow1.png" height="200px" width="200px"></img>'
        });
        total = total + crystalThree;
        $("#current").text(("" + total));
        console.log("yellow1 total:" + total);
        checkWin();
        checkLoss();
    });


    $("#whiteFront").on('click', function () {
        $("#whiteFront").justFlipIt({
            Click: true,
            Template: '<img id="whiteFront" src="./assets/images/white1.png" height="200px" width="200px"></img>'
        });
        total = total + crystalFour;
        $("#current").text(("" + total));
        console.log("white1 total:" + total);
        checkWin();
        checkLoss();
    });

    //User Wins

    //User losses


    //RESET game button
    $("button").click(function () {
        resetGame();
    });


    //FUNCTIONS=================
    //Continue game
    function continueGame() {
        alert("Game continues...");
        targetNum = Math.floor((Math.random() * 100) + 4);

        crystalOne = Math.floor((Math.random() * 10) + 1);
        crystalTwo = Math.floor((Math.random() * 10) + 1);
        crystalThree = Math.floor((Math.random() * 10) + 1);
        crystalFour = Math.floor((Math.random() * 10) + 1);

        total = 0;

        //display
        $("#target").text(targetNum);
        $("#current").text(total);
        $("#green").text(crystalOne);
        $("#pink").text(crystalTwo);
        $("#purple").text(crystalThree);
        $("#white").text(crystalFour);
    };

    function checkWin() {
        if (total === targetNum) {
            wins++;
            $("#win").text(("" + wins));
            alert('You win🎊!!!');
            //console.log("white1 total:" + total);
            continueGame();
        };
    }

    function checkLoss() {
        if (total !== targetNum && total > targetNum) {
            losses++;
            alert('Sorry. You lose😔!');
            $("#loss").text(("" + losses));
            continueGame();
        };
    }


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
        alert("Game ends. Resetting💻");
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
        alert("Get Ready🤖!!!");
    };
});
