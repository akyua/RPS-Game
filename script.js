function getComputerChoice() {
    let computerChoice = Math.random();
    if(computerChoice < 0.34){
        computerChoice = "rock";
    } else if(computerChoice <= 0.67){
        computerChoice = "paper";
    } else {
        computerChoice = "scissor";
    }
    return(computerChoice);
}

function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return "The result is a tie!";
    }

    if(playerSelection === "rock"){
        if(computerSelection === "scissor"){
            return "You win!";
        } else if (computerSelection === "paper"){
            return "You lose!"; 
        }
    }

    if(playerSelection === "scissor"){
        if(computerSelection === "rock"){
            return "You win!";
        } else if (computerSelection === "paper"){
            return "You lose!";
        }
    }

    if(playerSelection === "paper"){
        if(computerSelection === "rock"){
            return "You win!";
        } else if (computerSelection === "scissor"){
            return "You lose!";
        }
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice(); 

console.log("Your Choice: " + playerSelection);
console.log("Computer Choice: " + computerSelection);

console.log(playRound(playerSelection, computerSelection));

function game(playRound){
    for(let i = 0; i < 5; i++){
        
    }
}