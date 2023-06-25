//variables
let choices = ['rock', 'paper', 'scissors'];
let playerSelection = '';
let computerSelection = '';
let result;
let computerPts = 0;;
let playerPts = 0;
let buttons = document.querySelectorAll('.btn');
let rockBtn = document.querySelector('#rockbtn');
let paperBtn = document.querySelector('#paperbtn');
let scissorsBtn = document.querySelector('#scissorsbtn');
let playerScore = document.querySelector('#playerScore');
let computerScore = document.querySelector('#computerScore');

//generate computer's choice

function getComputerChoice(){

    let compChoice = choices[Math.floor(Math.random()*choices.length)];
    return compChoice;
}

// disable buttons function

function disableButtons(){

    buttons.forEach(elem => {
        elem.disabled = true
    });
}
// (playRound function)

function playRound(playerSelection){

    computerSelection = getComputerChoice();
    
    // checking who wins each round

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
    
    // checking who wins the game (first to 5 pts wins)

    if(computerPts == 5){
        result = "computer wins the game!";
        disableButtons();
        restart();
    }
    else if (playerPts == 5){
        result = "you win the game!";
        disableButtons();
        restart();
        
    }
    // showing result on the screen

    let roundResult = document.getElementById("roundResult");
    roundResult.textContent = result;

    return result;
}

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
        
// telling user how to reset the game

    function restart(){
        return document.getElementById('resetGame').textContent = "Reload the page to restart the game!";
}
