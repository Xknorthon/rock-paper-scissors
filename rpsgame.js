function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    
    computerSelection = getComputerChoice().toLowerCase();
    playerSelection = "rock";
    
    if (playerSelection === computerSelection) {
        return "It's a tie!";
      } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")
      ) {
        return "You win! " + playerSelection + " beats" + computerSelection;
      } else {
        return "You lose! " + computerSelection + " beats" + playerSelection;
    }
}