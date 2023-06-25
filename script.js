//variables
let choices = ['rock', 'paper', 'scissors'];
let playerSelection = '';
let computerSelection = '';
let result;
let computerPts = 0;;
let playerPts = 0;
let buttons = document.querySelectorAll('#buttons');
let rockBtn = document.querySelector('#rockbtn');
let paperBtn = document.querySelector('#paperbtn');
let scissorsBtn = document.querySelector('#scissorsbtn');
let playerScore = document.querySelector('#playerScore');
let computerScore = document.querySelector('#computerScore');

//get computer's choice

function getComputerChoice(){

    let compChoice = choices[Math.floor(Math.random()*choices.length)];
    return compChoice;
}

// checking who wins each round (playRound function)

function playRound(playerSelection, computerSelection){

    if(playerSelection === computerSelection){
        result = "draw since you chose " + playerSelection + " and computer chose " + computerSelection ;
    }
    else if(
        (playerSelection === 'rock' && computerSelection === 'scissors')||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ){
        result = "you win this round as computer chose " + computerSelection;
        playerPts++;
    }
    else if (
        (computerSelection === 'rock' && playerSelection === 'scissors')||
        (computerSelection === 'paper' && playerSelection === 'rock') ||
        (computerSelection === 'scissors' && playerSelection === 'paper')
    ){
        result = "computer wins this round as it chose " + computerSelection;
        computerPts++;
    }
    
    let roundResult = document.getElementById("roundResult");
    roundResult.textContent = result;
    
    return result;
}


function game(){

        // get computer's choice
        computerSelection = getComputerChoice();

        //get player's choice and run playRound function
        
        rockBtn.addEventListener('click', function() {
            playRound('rock', computerSelection);
            playerScore.textContent = playerPts;
            computerScore.textContent = computerPts;
        });
        paperBtn.addEventListener('click', function() {
            playRound('paper', computerSelection);
            playerScore.textContent = playerPts;
            computerScore.textContent = computerPts;
        });
        scissorsBtn.addEventListener('click', function() {
            playRound('scissors', computerSelection);
            playerScore.textContent = playerPts;
            computerScore.textContent = computerPts;
        });

    if(playerPts>computerPts){
        console.log("you win!");
    }
    else console.log("computer wins!");

    console.log(playerPts);
    console.log(computerPts);
}

game();
