// global variables
let humanScore = 0, computerScore = 0;

let cheat = 1;

function getComputerChoice() {

    // get a random number between 1 nad 3
    let computerChoice;
    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        computerChoice = "ROCK";
    } else if (randomNumber === 1) {
        computerChoice = "PAPER";
    } else if (randomNumber === 2) {
        computerChoice = "SCISSORS"
    } else {
        computerChoice = "Not a valid shape"
    }

    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Enter Rock, Paper or Scissors");
    console.log(humanChoice.toUpperCase());
    if (humanChoice.toUpperCase() !== "ROCK" ||
        humanChoice.toUpperCase() !== "PAPER" ||
        humanChoice.toUpperCase() !== "SCISSORS") {
            alert("Not a valid choice, enter Rock, Paper or Scissors");
            playGame();
    } else {
        return humanChoice.toUpperCase()
    }
}

function playRound(computerChoice, HumanChoice ) {
    if (computerChoice == HumanChoice) {
        return "The game is tied"
    } else {
      return  "hu hu hu"
    }
}

function playGame() {
    
    console.log(playRound(playRound(getComputerChoice(), getHumanChoice())))
}

playGame();
