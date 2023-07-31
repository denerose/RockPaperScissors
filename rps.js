console.log("I am running!");

let options = ["Rock", "Paper", "Scissors"]

function getComputerChoice() {
    console.log(options[(Math.floor(Math.random() * options.length))]);
}

getComputerChoice()