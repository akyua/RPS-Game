function getComputerChoice() {
    let computerChoice = Math.random();
    if(computerChoice < 0.34){
        computerChoice = "rock";
    } else if(computerChoice <= 0.67){
        computerChoice = "paper";
    } else {
        computerChoice = "scissor";
    }
    console.log(computerChoice);
}

const playerSelection = 'rock';
const computerSelection = getComputerChoice(); 

function playRound(playerSelection, computerSelection){

}