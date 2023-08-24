function getComputerChoice(){
    randomNumber = Math.random()
    if (randomNumber <= 0.334){
        return "scissors"
    }
    else if (randomNumber >= 0.334 && randomNumber <= 0.667){
        return "rock";
    }
    else{
        return "paper";
    }  
}
function singleRound(playerChoice, computerSelection){
    playerSelection = playerChoice.toLowerCase()
    if (playerSelection === computerSelection){
        return "Tie"
    }
    else if(playerSelection === "rock" && computerSelection === "scissors"){
        return "You win! rock beats scissors"
    }
    else if(playerSelection === "scissors" && computerSelection === "paper"){
        return "You win! scissors beats paper"
    }
    else if(playerSelection === "paper" && computerSelection === "rock"){
        return "You win! paper beats rock"
    }
    else if(playerSelection === "scissors" && computerSelection === "rock"){
        return "You lose! rock beats scissors"
    }
    else if(playerSelection === "paper" && computerSelection === "scissors"){
        return "You lose! scissors beats paper"
    }
    else if(playerSelection === "rock" && computerSelection === "paper"){
        return "You lose! paper beats rock"
    }

}
function game(){
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5; i++){
        computerSelection = getComputerChoice()
        playerSelection = prompt("rock paper scissors")
        let returnString = singleRound(playerSelection, computerSelection);
        if (returnString.slice(4, 8) === "win!"){
            playerScore++
        }
        else if(returnString.slice(4,8) === "lose"){
            computerScore++
        }
    }
    if (playerScore < computerScore){
        return "You win!"
    }
    else if(playerScore > computerScore){
        return "You lose"
    }
    else{
        return "Tie"
    }
}


console.log(game());