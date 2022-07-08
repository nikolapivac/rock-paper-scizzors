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

function printResult(){
    if(cPoints == 5 && pPoints == 5){
        results.textContent = `Results: Computer - ${cPoints} /// Player - ${pPoints} 
        /// It's a tie!`;
        cPoints=0;
        pPoints=0;
    }
    else if (pPoints == 5){
        results.textContent = `Results: Computer - ${cPoints} /// Player - ${pPoints}
        /// The player won! :)`;
        cPoints=0;
        pPoints=0;
    }
    else if (cPoints == 5){
        results.textContent = `Results: Computer - ${cPoints} /// Player - ${pPoints}
        /// The computer won! :(`;
        cPoints=0;
        pPoints=0;
    }
    else{
        results.textContent = `Results: Computer - ${cPoints} /// Player - ${pPoints}`
    }
}

const container = document.querySelector('.container')

const results = document.createElement('div');
results.classList.add('results');
results.textContent = `Results: Computer - ${cPoints} /// Player - ${pPoints}`;

const rockBtn = document.createElement('button');
rockBtn.classList.add('rock');
rockBtn.textContent = "ROCK";
rockBtn.addEventListener("click", () => {
    console.log(singleRound('rock', computerPlay()));
    printResult();
});

const paperBtn = document.createElement('button');
paperBtn.classList.add('paper');
paperBtn.textContent = "PAPER";
paperBtn.addEventListener("click", () => {
    console.log(singleRound('paper', computerPlay()));
    printResult();
});

const scissorsBtn = document.createElement('button');
scissorsBtn.classList.add('scissors');
scissorsBtn.textContent = "SCISSORS";
scissorsBtn.addEventListener("click", () => {
    console.log(singleRound('scissors', computerPlay()));
    printResult();
});

container.appendChild(rockBtn);
container.appendChild(paperBtn);
container.appendChild(scissorsBtn);
container.appendChild(results);
