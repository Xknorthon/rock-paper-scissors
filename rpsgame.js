function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// const playerSelection = "rock";
// const computerSelection = getComputerChoice().toLowerCase();

function playRound(playerSelection, computerSelection) {
    
    computerSelection = getComputerChoice().toLowerCase();
    playerSelection = prompt("enter something").toLowerCase();
    
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

const playerSelection = prompt("Choose Rock, Paper or Scissors!!").toLowerCase();
const computerSelection = getComputerChoice().toLowerCase();
console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));

function game() {
  let playerScore = 0;
  let computerScore = 0;
  
  for (let i = 0; i < 5; i++) {
    const result = playRound(playerSelection, computerSelection);
    console.log(result);
  }
  
  if (playerScore > computerScore) {
    console.log("You win the game! Final score: " + playerScore + "-" + computerScore);
  } else if (playerScore < computerScore) {
    console.log("You lose the game! Final score: " + playerScore + "-" + computerScore);
  } else {
    console.log("The game is a tie! Final score: " + playerScore + "-" + computerScore);
  }
}

game();