console.log("I am running!");

let options = ["Rock", "Paper", "Scissors"]

function getComputerChoice() {
    return (options[(Math.floor(Math.random() * options.length))]);
}

function playRound(playerSelection, computerSelection) {
    console.log("Player chooses..." + playerSelection)
    console.log("Computer chooses..." + computerSelection)
    let result = "TBC"
    if(playerSelection==computerSelection) {
        result = "DRAW! No one wins!";
     } else if (playerSelection=="Rock" && computerSelection=="Scissors") {
        result = "Rock breaks scissors. PLAYER wins!";
     } else if (playerSelection=="Rock" && computerSelection=="Paper"){
        result = "Paper smothers rock. Computer wins!"
     } else {
        result = "I am a confused computer! Help me!"; 
      } 
      return (result)
      console.log(result) 
  }
   
  const playerSelection = prompt("Rock, paper, or scissors?", "Rock");
  const computerSelection = getComputerChoice();

  console.log(playRound(playerSelection, computerSelection));

  