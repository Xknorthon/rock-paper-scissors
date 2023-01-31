function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex].toLowerCase();
}

function playRound(playerSelection) {
  const computerSelection = getComputerChoice();
  
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

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Enter Rock, Paper, or Scissors").toLowerCase();
    const result = playRound(playerSelection);
    console.log(result);
    
    if (result.startsWith("You win")) {
      playerScore++;
    } else if (result.startsWith("You lose")) {
      computerScore++;
    }
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
