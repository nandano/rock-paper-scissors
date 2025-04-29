// Function to generate a random choice (computer's choice)
function getComputerChoice() {
    const computerChoiceNumber = Math.floor(Math.random() * 3) + 1;
    let computerChoice;
    if (computerChoiceNumber === 1) {
        computerChoice = 'rock';
    } else if (computerChoiceNumber === 2) {
        computerChoice = 'paper'
    } else {
        computerChoice = 'scissors';
    }
    return computerChoice;
}

// Function to get the human's choice
function getHumanChoice() {
    const humanChoice = prompt("Enter 'rock', 'paper' or 'scissors'");

    return humanChoice;
}

// Initial score of human and computer
let humanScore = 0, computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice === 'rock' && computerChoice === 'scissors') {
        console.log("You win! Rock beats scissors");
        humanScore++;
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        console.log("You win! Paper beats Rock");
        humanScore++;
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        console.log("You win! Scissors beat Paper");
        humanScore++;
    } else if (humanChoice === computerChoice) {
        console.log("It's a tie");
    } else {
        console.log("You lose!");
        computerScore++;
    }
}

