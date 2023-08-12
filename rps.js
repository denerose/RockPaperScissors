console.log("I am running!");

let options = ["Rock", "Paper", "Scissors"]
let playerScore = 0
let computerScore = 0
let playerSelection = "TBC"
let computerSelection = "TBC"

function getComputerChoice() {
    return (options[(Math.floor(Math.random() * options.length))]);
}

function playRound(clicked_id, computerSelection) {
   computerSelection = getComputerChoice();
   playerSelection = clicked_id;
    console.log("Player chooses..." + playerSelection);
    console.log("Computer chooses..." + computerSelection);
    let result = "TBC";
    if(playerSelection==computerSelection) {
        result = "DRAW! No one wins!";
     } else if (playerSelection=="Rock" && computerSelection=="Scissors") {
        result = "Rock breaks scissors. PLAYER wins!";
        playerScore += 1
     } else if (playerSelection=="Rock" && computerSelection=="Paper"){
        result = "Paper smothers rock. Computer wins!"
        computerScore +=1
     } else if (playerSelection=="Paper" && computerSelection=="Scissors") {
        result = "Scissors cut paper. Computer wins!";
        computerScore +=1
     } else if (playerSelection=="Paper" && computerSelection=="Rock"){
        result = "Paper smothers rock. PLAYER wins!"
        playerScore += 1
     } else if (playerSelection=="Scissors" && computerSelection=="Paper") {
        result = "Scissors cut paper. PLAYER wins!";
        playerScore += 1
     } else if (playerSelection=="Scissors" && computerSelection=="Rock"){
        result = "Rock breaks scissors. Computer wins!"
        computerScore += 1
     } else if (playerSelection=="Bite"){
        result = "You cannot bite the computer."
     } else {
        result = (`I am a confused computer! I don't recognise ${playerSelection}. Help me?`) 
      }; 
      document.getElementById("resultsText").innerText = result;
      document.getElementById("playerScoreText").innerHTML = playerScore;
      document.getElementById("compScoreText").innerHTML = computerScore;
      return (result);
  }