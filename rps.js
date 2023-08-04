console.log("I am running!");

let options = ["Rock", "Paper", "Scissors"]

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
     } else if (playerSelection=="Rock" && computerSelection=="Paper"){
        result = "Paper smothers rock. Computer wins!"
     } else if (playerSelection=="Paper" && computerSelection=="Scissors") {
        result = "Scissors cut paper. Computer wins!";
     } else if (playerSelection=="Paper" && computerSelection=="Rock"){
        result = "Paper smothers rock. PLAYER wins!"
     } else if (playerSelection=="Scissors" && computerSelection=="Paper") {
        result = "Scissors cut paper. PLAYER wins!";
     } else if (playerSelection=="Scissors" && computerSelection=="Rock"){
        result = "Rock breaks scissors. Computer wins!"
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
    while (round <= 5){
        console.log("round # " + round)
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        round++;
    }    
  }

  game();

  