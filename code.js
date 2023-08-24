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
function singleRound(playerSelection, computerSelection){
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
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(singleRound(playerSelection, computerSelection))