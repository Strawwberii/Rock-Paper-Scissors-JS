//variables
let choices = ['rock', 'paper', 'scissors'];

//get computer's choice

function getComputerChoice(){

    let compChoice = choices[Math.floor(Math.random()*choices.length)];
    return compChoice;
}

// checking who wins each round (playRound function)

playRound(playerSelection, computerSelection){

    if(playerSelection === computerSelection){
        return "draw";
    }
    else if(
        (playerSelection === 'rock' && computerSelection === 'scissors')||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ){
        return "you win";
    }
    else return "computer wins";
}