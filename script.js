const rock = "rock";
const paper = "paper";
const scissor = "scissor";

function getComputerChoice() {
    const num = Math.floor(Math.random()*3);
    if (num==0){
        /*console.log(rock);*/
        return rock;
    }
    else if (num==1){
        /*console.log(paper);*/
        return paper;
    }
    else{
        /*console.log(scissor);*/
        return scissor;
    }
}


function playRound(playerselection, computerselection){
    if (playerselection==rock && computerselection==paper){
        contentthree.textContent = "You LOSE, " + paper + " beats " + rock;
    }
    else if (playerselection==rock && computerselection==scissor){
        result = "You WON, " + rock + " beats " + scissor;
    }
    else if (playerselection==paper && computerselection==rock){
        contentthree.textContent = "You WON, " + paper + " beats " + rock;
    }
    else if (playerselection==paper && computerselection==scissor){
        contentthree.textContent = "You LOSE, " + scissor + " beats " + paper;
    }
    else if (playerselection==scissor && computerselection==rock){
        contentthree.textContent = "You LOSE, " + rock + " beats " + scissor;
    }
    else if (playerselection==scissor && computerselection==paper){
        contentthree.textContent = "You WON, " + scissor + " beats " + paper;
    }
    else{
        contentthree.textContent = "It's a TIE!";
    }
}

const rockOption = document.querySelector('.rock');
rockOption.addEventListener('click', () => {
    playRound("rock",getComputerChoice());
});

const paperOption = document.querySelector('.paper');
paperOption.addEventListener('click', () => {
    playRound("paper",getComputerChoice());
});

const scissorOption = document.querySelector('.scissor');
scissorOption.addEventListener('click', () => {
    playRound("scissor", getComputerChoice());
});

const contents = document.querySelector('.contents')
const contentthree = document.createElement('div')
contentthree.classList.add('contentthree');
contents.appendChild(contentthree);