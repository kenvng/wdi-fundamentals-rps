////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose 'rock', 'paper', or 'scissors'. ")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput(); /* Your Expression */
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay(); /* Your Expression */
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
 
    /* YOUR CODE HERE */
	switch (playerMove) {
        case "rock":
            if (computerMove == "scissors") {
                winner = "player";
            }
            else if (computerMove == "paper") {
                winner = "computer";
            }
            else {
                winner = "tie";
            }
            break;

        case "paper":
            if (computerMove == "rock") {
                winner = "player";
            }
            else if (computerMove == "scissors") {
                winner = "computer";
            }
            else {
                winner = "tie";
            }
            break;

        case "scissors":
            if (computerMove == "rock") {
                winner = "computer";
            }
            else if (computerMove == "paper") {
                winner = "player";
            }
            else {
                winner = "tie";
            }
            break;

        default:
            winner = "tie";
    }
    return winner;
}

function playToFive() {
    console.log("Rock, Paper, Scissors!!!" + '</br>');
    var playerWins = 0;
    var computerWins = 0;
	
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
	
    /* YOUR CODE HERE */
    var playerMove = "";
    var computerMove = "";
    var winner = "";

    while (playerWins < 5 && computerWins < 5) {
        playerMove = getPlayerMove(getInput());
        computerMove = getComputerMove(randomPlay());
        winner = getWinner(playerMove, computerMove);

        if (winner == "player") {
            playerWins++;
        }

        else if (winner == "computer") {
            computerWins++;
        }
		
        console.log("Player: " + playerMove + " and ");
        console.log("Computer: " + computerMove + ". ");
        console.log("The score is " + playerWins + " for player" + " and " + computerWins + " for computer." + '</br>');
    }
    return [playerWins, computerWins];
}
playToFive();

