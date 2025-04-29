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

