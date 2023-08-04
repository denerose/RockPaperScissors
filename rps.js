console.log("I am running!");

let options = ["Rock", "Paper", "Scissors"]

function getComputerChoice() {
    return (options[(Math.floor(Math.random() * options.length))]);
}

function playRound(playerSelection, computerSelection) {
    console.log("Player chooses..." + playerSelection)
    console.log("Computer chooses..." + computerSelection)    
  }
   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();

  console.log(playRound(playerSelection, computerSelection));