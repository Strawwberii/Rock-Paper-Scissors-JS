//variables
let choices = ['rock', 'paper', 'scissors'];

//get computer's choice

function getComputerChoice(){

    let compChoice = choices[Math.floor(Math.random()*choices.length)];
    return compChoice;
}

console.log(getComputerChoice());