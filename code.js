function getComputerChoice(){
    randomNumber = Math.random()
    if (randomNumber <= 0.334){
        return "Scissors"
    }
    else if (randomNumber >= 0.334 && randomNumber <= 0.667){
        return "Rock";
    }
    else{
        return "Paper";
    }  
}

computerSelection = getComputerChoice();
console.log(computerSelection)