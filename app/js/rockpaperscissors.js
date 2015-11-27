function getPlayerMove() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function getComputerMove() {
    var randomNumber = Math.random();
    var computerMove;
    if (randomNumber < 0.33) {
        computerMove = "rock";
    } else if (randomNumber < 0.66) {
        computerMove = "paper";
    } else {
        computerMove = "scissors";
    }
    return computerMove;
}

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove == computerMove) {
        winner = 'tie';
    }
    else if (playerMove == 'rock' && computerMove == 'scissors') {
        winner = 'player';
    }
    else if (playerMove == 'scissors' && computerMove == 'rock') {
        winner = 'computer';
    }
    else if (playerMove == 'paper' && computerMove == 'scissors') {
        winner = 'computer';
    }
    else if (playerMove == 'scissors' && computerMove == 'paper') {
        winner = 'player';
    }
    else if (playerMove == 'rock' && computerMove == 'paper') {
        winner = 'computer';
    }
    else if (playerMove == 'paper' && computerMove == 'rock') {
        winner = 'player';
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var playerMove;
    var computerMove;
    var winner;
    while (playerWins < 5 && computerWins < 5) {
        playerMove = getPlayerMove();
        computerMove = getComputerMove();
        winner = getWinner(playerMove,computerMove);
        if (winner == 'player') {
            playerWins += 1;
        }
        else if (winner == 'computer') {
            computerWins += 1;
        }
        console.log("The player's move is " + playerMove + " and the Computer's move is " + computerMove + ".")
        console.log("The winner is " + winner + ".");
        console.log("The score is player " + playerWins + " and Computer " + computerWins + ".")
    }
    return [playerWins, computerWins];
}

playToFive();

