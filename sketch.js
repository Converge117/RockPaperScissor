

let playerScore = 0;
let computerScore = 0;
/* let playerSelection;
 let computerSelection;*/

function getComputerChoice() {

    let choice;
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            choice = 'rock';
            break;
        case 1: choice = 'paper';
            break;
        case 2: choice = 'scissor';
            break;
    }
    console.log(choice);
    return choice;

}



function playRound(a, b) {
    if (a === b) {
        return `Draw! ${a} is equal to ${b}`
    } else if (a === 'rock') {
        if (b === 'paper') {
            computerScore++;
            return `You lose! ${a} loses to ${b}`;
        } else if (b === 'scissor') {
            playerScore++;
            return `You win! ${a} beats ${b}`;
        }
    } else if (a === 'paper') {
        if (b === 'rock') {
            playerScore++
            return `You win! ${a} beats ${b}`;
        } else if (b === 'scissor') {
            computerScore++;
            return `You lose! ${a} loses to ${b}`;
        }
    } else if (a === 'scissor') {
        if (b === 'paper') {
            playerScore++;
            return `You win! ${a} beats ${b}`;
        } else if (b === 'rock') {
            computerScore++;
            return `You lose! ${a} loses to ${b}`;
        }
    }
}

function game(count) {

    let playerSelection;
    let computerSelection;
    noOfRuns = count;
    for (i = 0; i < noOfRuns; i++) {
        playerSelection = prompt('enter your choice', 'Rock/Paper/Scissor');
        playerSelection = playerSelection.toLowerCase();

        computerSelection = getComputerChoice();

               /*let result=*/console.log(playRound(playerSelection, computerSelection));
        //console.log(result);
        console.log('computer score is ' + computerScore);
        console.log('Player score is ' + playerScore);
    }
    (playerScore > computerScore) ? console.log('You win') : console.log('You lose');// its not recommended becoz its not easily readable by others

}
let count = prompt('How many rounds do you want play', 'type a number');
game(count);
