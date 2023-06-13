//variables
let choices = ['rock', 'paper', 'scissors'];
let playerSelection = '';
let computerSelection = '';
let result;
let computerPts = 0;;
let playerPts = 0;

//get computer's choice

function getComputerChoice(){

    let compChoice = choices[Math.floor(Math.random()*choices.length)];
    return compChoice;
}

// checking who wins each round (playRound function)

function playRound(playerSelection, computerSelection){

    if(playerSelection === computerSelection){
        result = "draw";
    }
    else if(
        (playerSelection === 'rock' && computerSelection === 'scissors')||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ){
        result = "you win";
        playerPts++;
    }
    else if (
        (computerSelection === 'rock' && playerSelection === 'scissors')||
        (computerSelection === 'paper' && playerSelection === 'rock') ||
        (computerSelection === 'scissors' && playerSelection === 'paper')
    ){
        result = "computer wins";
        computerPts++;
    }
    

    return result;
}


function game(){

        // get player's choice
        computerSelection = getComputerChoice();
        playerSelection = prompt("Enter your choice");

        playRound(playerSelection, computerSelection )
        
    
    if(playerPts>computerPts){
        console.log("you win!");
    }
    else console.log("computer wins!");

    console.log(playerPts);
    console.log(computerPts);
}

game();
