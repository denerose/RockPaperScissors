console.log("I am running!");

let options = ["Rock", "Paper", "Scissors"]
let playerScore = 0;
let computerScore = 0;
let playerSelection = "TBC";
let computerSelection = "TBC";
let roundResult = "TBC";
let gameResult = "First to 5 wins.";
let winner = "TBC";

function getComputerChoice() {
    return (options[(Math.floor(Math.random() * options.length))]);
}

function playRound(playerSelection, computerSelection) {
   computerSelection = getComputerChoice();
   console.log("Player chooses..." + playerSelection);
   console.log("Computer chooses..." + computerSelection);
   if(playerSelection==computerSelection) {
        roundResult = "DRAW! No one wins!";
     } else if (playerSelection=="Rock" && computerSelection=="Scissors") {
        roundResult = "Rock breaks scissors. PLAYER wins!";
        playerScore += 1
     } else if (playerSelection=="Rock" && computerSelection=="Paper"){
        roundResult = "Paper smothers rock. Computer wins!"
        computerScore +=1
     } else if (playerSelection=="Paper" && computerSelection=="Scissors") {
        roundResult = "Scissors cut paper. Computer wins!";
        computerScore +=1
     } else if (playerSelection=="Paper" && computerSelection=="Rock"){
        roundResult = "Paper smothers rock. PLAYER wins!"
        playerScore += 1
     } else if (playerSelection=="Scissors" && computerSelection=="Paper") {
        roundResult = "Scissors cut paper. PLAYER wins!";
        playerScore += 1
     } else if (playerSelection=="Scissors" && computerSelection=="Rock"){
        roundResult = "Rock breaks scissors. Computer wins!"
        computerScore += 1
     } else {
        roundResult = (`I am a confused computer! I don't recognise ${playerSelection}. Help me?`) 
      }; 
   return (roundResult);
  }

  function updateScore(roundResult, playerScore, computerScore) {
   document.getElementById("resultsText").innerText = roundResult;
   document.getElementById("playerScoreText").innerText = playerScore;
   document.getElementById("compScoreText").innerText = computerScore;
  }

  function playGame(clicked_id) {
   playerSelection = clicked_id;
   if(playerScore <5 && computerScore <5) {
      playRound(playerSelection, computerSelection);
      updateScore(roundResult, playerScore, computerScore);
      didYouWin();
   } else {
      roundResult = winner + " already won. Refresh the page to play again.";
      document.getElementById("resultsText").innerText = roundResult;
   }
}
   
   function didYouWin() {
   if(playerScore >=5) {
      gameResult = "You won the game!! :D"
      winner = "You"
   }
   else if(computerScore >=5) {
      gameResult = "Computer won! You lost the game :("
      winner = "The computer"
   }
   else {gameResult = "No winner yet, first to 5 will win, keep playing!"}
   document.getElementById("gameStatus").innerText = gameResult
   return(gameResult)
  }