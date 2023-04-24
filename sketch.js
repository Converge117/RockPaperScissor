

let playerScore = 0;
let computerScore = 0;
let button = document.querySelectorAll('button');//returns a nodelist not a single value 
console.log(button);

button.forEach(button => {//iterating over the nodelist
button.addEventListener('click',setGame)});

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
    console.log('playing');
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

function setGame(e){
    //(e) => {
    console.log(e);
   let playerSelection = e.target.textContent;
  game(playerSelection);// }

}

function game(playerSelection) {

    
   // noOfRuns = count;
   // for (i = 0; i < noOfRuns; i++) {
       // playerSelection = prompt('enter your choice', 'Rock/Paper/Scissor');
        playerSelection = playerSelection.toLowerCase();    
       let computerSelection = getComputerChoice();

               /*let result=*///console.log
               let result=playRound(playerSelection, computerSelection);
            let div1= document.querySelector('#result')
               div1.textContent = result;
        //console.log(result);
      /*  console.log('computer score is ' + computerScore);
        console.log('Player score is ' + playerScore);*/
   // }
   // (playerScore > computerScore) ? console.log('You win') : console.log('You lose');// its not recommended becoz its not easily readable by others
   if(playerScore == 2 || computerScore == 2){
   const score= document.createElement('div');

    if (playerScore > computerScore) score.textContent=`User wins by reaching a score of ${playerScore} first`;// if statement with out {} as the exprression is a single line
    else score.textContent=`Computer wins by reaching a score of ${computerScore} first`;
     div1.appendChild(score);// adding it as a child div of div1
     button.forEach(button => {//iterating over the nodelist
     button.removeEventListener('click',setGame)});//diables the buttons by rermoving event listers
   }

}
/*let count = prompt('How many rounds do you want play', 'type a number');
game(count);*/
//game();
