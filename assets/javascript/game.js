

$(document).ready(function () {


    var number = Math.floor(Math.random() * 101) + 19;

    $("#random-number").text(number);

    var num1 = (Math.floor(Math.random() * 11) + 1);
    var num2 = (Math.floor(Math.random() * 11) + 1);
    var num3 = (Math.floor(Math.random() * 11) + 1);
    var num4 = (Math.floor(Math.random() * 11) + 1);

    function reset() {
        number = Math.floor(Math.random() * 101 + 19);
        $("#random-number").text(number);
        num1 = Math.floor(Math.random() * 11 + 1);
        num2 = Math.floor(Math.random() * 11 + 1);
        num3 = Math.floor(Math.random() * 11 + 1);
        num4 = Math.floor(Math.random() * 11 + 1);
        total = 0;
        $("#total-score").text(total);
    }



    var total = 0;
    $("#total-score").text(total);

    $("#one").on("click", function () {
        total += num1;
        $("#total-score").text(total);
        if (total === number) {
            winner();
            reset();
        }
        else if (total >= number) {
            loser();
            reset();
        }
    });

    $("#two").on("click", function () {
        total += num2;
        $("#total-score").text(total);
        if (total === number) {
            winner();
            reset();
        }
        else if (total >= number) {
            loser();
            reset();
        }
    });

    $("#three").on("click", function () {
        total += num3;
        $("#total-score").text(total);
        if (total === number) {
            winner();
            reset();
        }
        else if (total >= number) {
            loser();
            reset();
        }
    });

    $("#four").on("click", function () {
        total += num4;
        $("#total-score").text(total);
        if (total === number) {
            winner();
            reset();
        }
        else if (total >= number) {
            loser();
            reset();
        }
    });


    var wins = 0;
    function winner() {
        alert("You won!");
        wins++;
        $("#win").text("Wins: " + wins);
        reset();
    }

    var lose = 0;
    function loser() {
        alert("You lose!");
        lose++;
        $("#lose").text("Losses: " + lose);
        reset()
    }

});