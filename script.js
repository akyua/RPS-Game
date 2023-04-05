function choice(arr){
    let playerChoice = arr;
    document.getElementById('user_choice').innerHTML = `You choose: <span>${playerChoice}</span>`;
    const userScore = document.getElementById("user-score");
    const computerScore = document.getElementById("computer-score");
    
    let computerChoice = Math.random();
    if(computerChoice < 0.34){
        computerChoice = "Rock";
    } else if(computerChoice <= 0.67){
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissor";
    }
    document.getElementById('computer_choice').innerHTML = `Computer choose: <span>${computerChoice}</span>`;

    function game(playerChoice, computerChoice){
        let resultGame = " ";
        if(playerChoice === computerChoice){
            resultGame = 'Draw';
        }
    
        if(playerChoice === "Rock"){
            if(computerChoice === "Scissor"){
                resultGame = 'Win';
            } else if (computerChoice === "Paper"){
                resultGame = 'Lose';
            }
        }
    
        if(playerChoice === "Scissor"){
            if(computerChoice === "Rock"){
                resultGame = 'Win';
            } else if (computerChoice === "Paper"){
                resultGame = 'Lose';
            }
        }
    
        if(playerChoice === "Paper"){
            if(computerChoice === "Rock"){
                resultGame = 'Win';
            } else if (computerChoice === "Scissor"){
                resultGame = 'Lose';
            }
        }
        document.getElementById('result').innerHTML = `You <span>${resultGame}</span>`;
        if(resultGame === 'Win'){
            userScore.innerHTML++;
        } else if(resultGame === 'Lose'){
            computerScore.innerHTML++;
        }
    }
    game(playerChoice, computerChoice);

}
/*  Oldest Code

function getComputerChoice() {
    let computerChoice = Math.random();
    if(computerChoice < 0.34){
        computerChoice = "Rock";
    } else if(computerChoice <= 0.67){
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissor";
    }
    document.getElementById('computer_choice').innerHTML = `Computer choose: <span>${computerChoice}</span>`
    return(computerChoice);
}

function getPlayerChoice(arr){
    
}


function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return "The result is a tie!";
    }

    if(playerSelection === "Rock"){
        if(computerSelection === "Scissor"){
            return "You win!";
        } else if (computerSelection === "Papper"){
            return "You lose!"; 
        }
    }

    if(playerSelection === "Scissor"){
        if(computerSelection === "Rock"){
            return "You win!";
        } else if (computerSelection === "Papper"){
            return "You lose!";
        }
    }

    if(playerSelection === "Papper"){
        if(computerSelection === "Rock"){
            return "You win!";
        } else if (computerSelection === "Scissor"){
            return "You lose!";
        }
    }
}

const playerSelection = getPlayerChoice();
/* const computerSelection = getComputerChoice(); */

/* playRound(playerSelection, computerSelection) */

/* function game(playRound){
    for(let i = 0; i < 5; i++){
        
    }
}  */