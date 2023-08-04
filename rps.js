console.log("I am running!");

let options = ["Rock", "Paper", "Scissors"]
let playerScore = 0
let computerScore = 0

function getComputerChoice() {
    return (options[(Math.floor(Math.random() * options.length))]);
}

function getPlayerChoice (){
   let input = prompt("Choose: Rock, Paper or Scissors?", "Rock");
   return toTitleCase(input);
}

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

function playRound(playerSelection, computerSelection) {
    console.log("Player chooses..." + playerSelection)
    console.log("Computer chooses..." + computerSelection)
    let result = "TBC"
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
      } 
      return (result)
      console.log(result) 
  }

  function game() {
    let round = 1
    playerScore = 0
    computerScore = 0
    while (round <= 5){
        console.log("round # " + round)
        let playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log("Player: " + playerScore + " -- Computer: " + computerScore);
        round++;
    }
    if (playerScore < computerScore){console.log("Computer won " + computerScore + " of 5 games. COMPUTER WINS!!")}
    else if (playerScore > computerScore){console.log("Player won " + playerScore + " of 5 games. PLAYER WINS!!")}
    else if (playerScore == computerScore){console.log("It is a draw. How boring.")}
    else {console.log("I am confused.")}    
  }

  game();

  