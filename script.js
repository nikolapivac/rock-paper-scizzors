let cPoints = 0;
let pPoints = 0;

function computerPlay(){
    const pick = ['rock', 'paper', 'scissors']
    return pick[Math.floor(Math.random() * pick.length)];
}

function singleRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection){
        ++cPoints;
        ++pPoints;
        return "It's a tie!";
        
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        ++pPoints;
        return "You won. Rock beats scissors.";  
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock'){
        ++pPoints;
        return "You won. Paper beats rock.";
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        ++pPoints;
        return "You won. Scissors beat paper."; 
    }
    else{
        ++cPoints;
        return `You lost. :(  ${computerSelection} beats ${playerSelection}`
    }

}

function game(){
    for(let i = 0; i<5; i++){
        playerSelection = prompt(`ROUND ${i+1} - Choose: rock, paper or scissors?`);
        computerSelection = computerPlay();
        console.log(singleRound(playerSelection, computerSelection));
        console.log(`Current score:\nComputer - ${cPoints}\nYou - ${pPoints}`)
    }
    if(cPoints > pPoints){
        console.log("You lost!")
    }
    else console.log("You won!")
}

game();
