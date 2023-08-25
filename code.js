function getComputerChoice() {
    randomNumber = Math.random()
    if (randomNumber <= 0.334) {
        return "scissors"
    }
    else if (randomNumber >= 0.334 && randomNumber <= 0.667) {
        return "rock";
    }
    else {
        return "paper";
    }
}
function singleRound(playerChoice, computerSelection) {
    //playerSelection = playerChoice.toLowerCase()
    let playerSelection = playerChoice;
    if (playerSelection === computerSelection) {
        return "Tie"
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! rock beats scissors"
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! scissors beats paper"
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! paper beats rock"
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose! rock beats scissors"
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose! scissors beats paper"
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose! paper beats rock"
    }

}

function play(e) {
    playerChoice = `${e.target.id}`;
    const computerSelection = getComputerChoice();
    const result = singleRound(playerChoice, computerSelection);
    const existingMatchResult = document.querySelector('.match-result');
    const existingScoreTable = document.querySelector('.score-table');

    if (existingMatchResult && existingScoreTable) {
        existingMatchResult.remove();
        existingScoreTable.remove();
    }
    
    const matchResult = document.createElement('div');
    const scoreTable = document.createElement('div');
    scoreTable.classList.add('score-table');
    matchResult.classList.add('match-result');
    gameScore(result, matchResult, scoreTable);
    scoreTable.textContent = `Player score ${playerScore} - ${computerScore} Computer score`; 
    matchResult.textContent = result;
    document.body.append(matchResult);
    document.body.append(scoreTable);
    
}

function gameScore(result, matchResult, scoreTable){
    if (playerScore < 5 && computerScore < 5){
        if (result.slice(4, 8) === "win!") {
            playerScore++;
            if(playerScore >= 5){
                matchResult.remove();
                scoreTable.textContent = `You win! Score: ${playerScore} - ${computerScore}`;
            }
        }
        else if (result.slice(4, 8) === "lose") {
            computerScore++;
            if(computerScore >= 5){
                matchResult.remove()
                scoreTable.textContent = `You lose. Score: ${playerScore} - ${computerScore}`;
            }
        }
    }
    else{
        matchResult.remove();
        scoreTable.textContent = `You win! Score: ${playerScore} - ${computerScore}`;
    }
}

let playerScore = 0;
let computerScore = 0;
const rockBtn = document.querySelector('#rock');
const scissorBtn = document.querySelector('#scissors');
const paperBtn = document.querySelector('#paper');

rockBtn.addEventListener('click', play);
scissorBtn.addEventListener('click', play);
paperBtn.addEventListener('click', play);
