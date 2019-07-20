$(document).ready(function() {
// variable to get random number when the page opens up
    var random = Math.floor(Math.random()*102+19);

    // append that random number to the 
    $('#targetNumber').text("Target Number: " + random);

    // set up random numbers for each crystal (between 1-12)
    var num1 = Math.floor(Math.random()*12+1);
    var num2 = Math.floor(Math.random()*12+1);
    var num3 = Math.floor(Math.random()*12+1);
    var num4 = Math.floor(Math.random()*12+1);

    // variables for win, loss, user points
    var userTotal = 0;
    var wins = 0;
    var losses = 0;

$('#cardWins').text("Wins: " + wins);
$('#cardLosses').text("Losses: " + losses);

// function to rseet game
function reset() {
    random = Math.floor(Math.random()*102+19);
    console.log(random);
    $('#targetNumber').text("Target Number " + random);
    num1 = Math.floor(Math.random()*12+1);
    num2 = Math.floor(Math.random()*12+1);
    num3 = Math.floor(Math.random()*12+1);
    num4 = Math.floor(Math.random()*12+1);
    userTotal = 0;
    $("#userPoints").text("Your current score: " + userTotal);
}

// function to add wins & reset
function winner() {
    alert("You Won!!");
    wins++;
    $("#cardWins").text("Wins: " + wins);
    reset();
}

// function to add lossess & reset
function loser() {
    alert("You Lose!!");
    losses++;
    $("#cardLosses").text("Losses: " + losses);
    reset();
}

// button for crystal
    $("#image1").on("click", function() {
        userTotal = userTotal + num1;
        console.log("New userTotal " + userTotal);
        $("#userPoints").text("Your current score: " + userTotal);
        
        // win/lose conditions
        if (userTotal === random) {
            winner()
        }

        else if (userTotal > random) {
            loser()
        } 
    })

    $("#image2").on("click", function() {
        userTotal = userTotal + num2;
        console.log("New userTotal " + userTotal);
        $("#userPoints").text("Your current score: " + userTotal);

        if (userTotal === random) {
            winner();
        }

        else if (userTotal > random) {
            loser();
        }
    })

    $("#image3").on("click", function() {
        userTotal = userTotal + num3;
        console.log("New userTotal " + userTotal);
        $("#userPoints").text("Your current score: " + userTotal);

        if (userTotal === random) {
            winner();
        }

        else if (userTotal > random) {
            loser();
        }
    })

    $("#image4").on("click", function() {
        userTotal = userTotal + num4;
        console.log("New userTotal " + userTotal);
        $("#userPoints").text("Your current score: " + userTotal);

        if (userTotal === random) {
            winner();
        }

        else if (userTotal > random) {
            loser();
        }
    });
});