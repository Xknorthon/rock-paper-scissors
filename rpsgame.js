function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// const playerSelection = "rock";
// const computerSelection = getComputerChoice().toLowerCase();

function playRound(playerSelection, computerSelection) {
    
    computerSelection = getComputerChoice().toLowerCase();
    playerSelection = "rock".toLowerCase();
    
    if (playerSelection === computerSelection) {
        return "It's a tie!";
      } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")
      ) {
        return "You win! " + playerSelection + " beats " + computerSelection;
      } else {
        return "You lose! " + computerSelection + " beats " + playerSelection;
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));