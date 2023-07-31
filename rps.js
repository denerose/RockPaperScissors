console.log("I am running!");

let options = ["Rock", "Paper", "Scissors"]

function getComputerChoice() {
    return (options[(Math.floor(Math.random() * options.length))]);
}

console.log("I choose..." + getComputerChoice())