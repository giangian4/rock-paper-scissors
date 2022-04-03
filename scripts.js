////add the variables rock, paper, Scissors
///make computerPlay function
///make it randomly generate any of the three variables


const myArray = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    return myArray[~~(Math.random()* myArray.length)];
}

///play a single round of rock paper scissors
///two parameters playerSelection and computerSelection
///return a string that declares winner "You lose! Paper beats Rock"

function playRound(playerSelection, computerSelection){
    if (playerSelection = "Rock" || computerSelection === "Paper"){
        return 'You lose! Paper Beats Rock'
    }
}

const playerSelection = "Rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));