let playerScore = 0;
let computerScore = 0;
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
            playerScore++;
            return winMessage + "computer chose " + computerSelection;
        } else if(computerSelection === "paper") {
            computerScore++;
            return loseMessage + "computer chose " + computerSelection;
        } else if(computerSelection === "rock") return "Draw, " + "computer chose " + computerSelection;
    } else if(playerSelection === "paper") {
        if(computerSelection === "scissors") {
            computerScore++;
            return loseMessage + "computer chose " + computerSelection;
        } else if(computerSelection === "rock") {
            playerScore++;
            return winMessage + "computer chose " + computerSelection;
        } else if(computerSelection === "paper") return "Draw, " + "computer chose " + computerSelection;
    } else if(playerSelection === "scissors") {
        if(computerSelection === "paper") {
            playerScore++;
            return winMessage + "computer chose " + computerSelection;
        } else if(computerSelection === "rock") {
            computerScore++;
            return loseMessage + "computer chose " + computerSelection;
        } else if(computerSelection === "scissors") return "Draw, " + "computer chose " + computerSelection;
    } 
    return "Not a correct option.";
}


function game() {
    let winnerMessage;
    let playerScore = 0;
    let computerScore = 0;

    winnerMessage = playRound(prompt("Write 'rock', 'paper' or 'scissors'."), getComputerChoice());
    console.log(winnerMessage);
    winnerMessage.slice(0,7) === "You win" ? playerScore++ : 
    winnerMessage.slice(0,8) === "You lose" ? computerScore++ : 
    winnerMessage.slice(0,1) === "N" ? i-- : true ;
    scoreMessage(playerScore, computerScore);
    playerScore > computerScore ? console.log("Player wins") : 
    playerScore === computerScore ? console.log("It's a draw") : console.log("Computer wins");
    return "Player's score is " + playerScore + " and Computer's score is " + computerScore;
}

function displayWinner(playerScore, computerScore, parentNode) {
    let childNode = document.createElement("div");
    childNode.style.fontSize = 100;
    if(playerScore < computerScore) {
        childNode.textContent = "Computer wins.";
        childNode.style.backgroundColor = "#ff6865";
    }
    else {
        childNode.textContent = "You win!";
        childNode.style.backgroundColor = "#90ee90";
    }
    parentNode.appendChild(childNode);
    return;
}

function playWithRock() {
    let roundDiv = document.createElement("div");
    let parentNode = document.querySelector("body");
    roundDiv.textContent = playRound("rock", getComputerChoice());
    parentNode.appendChild(roundDiv);

    resultsDiv.textContent = "Player score: " + playerScore + 
    ". Computer score: " + computerScore;
    
    if(playerScore === 5 || computerScore === 5) {
        displayWinner(playerScore, computerScore, body);
        rockBtn.removeEventListener("click", playWithRock);
        paperBtn.removeEventListener("click", playWithPaper);
        scissorsBtn.removeEventListener("click", playWithScissors);
    }
    return;
}

function playWithPaper() {
    let roundDiv = document.createElement("div");
    let parentNode = document.querySelector("body");
    roundDiv.textContent = playRound("paper", getComputerChoice());
    parentNode.appendChild(roundDiv);
    resultsDiv.textContent = "Player score: " + playerScore + 
    ". Computer score: " + computerScore;

    if(playerScore === 5 || computerScore === 5) {
        displayWinner(playerScore, computerScore, body);
        rockBtn.removeEventListener("click", playWithRock);
        paperBtn.removeEventListener("click", playWithPaper);
        scissorsBtn.removeEventListener("click", playWithScissors);
    }
    return;    
}

function playWithScissors() {
    let roundDiv = document.createElement("div");
    let parentNode = document.querySelector("body");
    roundDiv.textContent = playRound("scissors", getComputerChoice());
    parentNode.appendChild(roundDiv);

    resultsDiv.textContent = "Player score: " + playerScore + 
    ". Computer score: " + computerScore;

    if(playerScore === 5 || computerScore === 5) {       
        displayWinner(playerScore, computerScore, body);
        rockBtn.removeEventListener("click", playWithRock);
        paperBtn.removeEventListener("click", playWithPaper);
        scissorsBtn.removeEventListener("click", playWithScissors);
    }}

let rockBtn = document.querySelector(".rock");
let paperBtn = document.querySelector(".paper");
let scissorsBtn = document.querySelector(".scissors");

let resultsDiv = document.querySelector(".results");
let body = document.querySelector("body");
rockBtn.addEventListener("click", playWithRock);
paperBtn.addEventListener("click", playWithPaper);
scissorsBtn.addEventListener("click", playWithScissors);
