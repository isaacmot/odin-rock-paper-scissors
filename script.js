function getComputerChoice() {
    let number = Math.floor(Math.random() * 100);
    if(number % 3 === 1) {
        return "Rock";
    } else if(number % 3 === 2) {
        return "Paper";
    }
    return "Scissors";
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    let winMessage = "You win! ";
    let loseMessage = "You lose. ";
    if(playerSelection === "rock") {
        if(computerSelection === "scissors") {
            return winMessage + "computer chose " + computerSelection;
        } else if(computerSelection === "paper") {
            return loseMessage + "computer chose " + computerSelection;
        } else if(computerSelection === "rock") return "Draw, " + "computer chose " + computerSelection;
    } else if(playerSelection === "paper") {
        if(computerSelection === "scissors") {
            return loseMessage + "computer chose " + computerSelection;
        } else if(computerSelection === "rock") {
            return winMessage + "computer chose " + computerSelection;
        } else if(computerSelection === "paper") return "Draw, " + "computer chose " + computerSelection;
    } else if(playerSelection === "scissors") {
        if(computerSelection === "paper") {
            return winMessage + "computer chose " + computerSelection;
        } else if(computerSelection === "rock") {
            return loseMessage + "computer chose " + computerSelection;
        } else if(computerSelection === "scissors") return "Draw, " + "computer chose " + computerSelection;
    } 
    return "Not a correct option.";
}

const scoreMessage = (playerScore, computerScore) => {
    console.log("Your score is " + playerScore + " and the computer's score is " + computerScore);
}

function game() {
    let winnerMessage;
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5; i++) {
        winnerMessage = playRound(prompt("Write 'rock', 'paper' or 'scissors'."), getComputerChoice());
        console.log(winnerMessage);
        winnerMessage.slice(0,7) === "You win" ? playerScore++ : 
        winnerMessage.slice(0,8) === "You lose" ? computerScore++ : 
        winnerMessage.slice(0,1) === "N" ? i-- : true ;
        scoreMessage(playerScore, computerScore);
    }

    playerScore > computerScore ? console.log("Player wins") : 
    playerScore === computerScore ? console.log("It's a draw") : console.log("Computer wins");
    return "Player's score is " + playerScore + " and Computer's score is " + computerScore;
}

console.log(game());