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


let scoreOne = 0;
let scoreTwo = 0;
function playRound(playerselection, computerselection){
    contentfour.textContent = "YOU:" + scoreOne + "   VS   " + "COMPUTER:" + scoreTwo;
    if (playerselection==rock && computerselection==paper){
        contentthree.textContent = "You LOSE, " + paper + " beats " + rock;
        scoreTwo += 1;
    }
    else if (playerselection==rock && computerselection==scissor){
        result = "You WON, " + rock + " beats " + scissor;
        scoreOne += 1;
    }
    else if (playerselection==paper && computerselection==rock){
        contentthree.textContent = "You WON, " + paper + " beats " + rock;
        scoreOne += 1;
    }
    else if (playerselection==paper && computerselection==scissor){
        contentthree.textContent = "You LOSE, " + scissor + " beats " + paper;
        scoreTwo += 1;
    }
    else if (playerselection==scissor && computerselection==rock){
        contentthree.textContent = "You LOSE, " + rock + " beats " + scissor;
        scoreTwo += 1;
    }
    else if (playerselection==scissor && computerselection==paper){
        contentthree.textContent = "You WON, " + scissor + " beats " + paper;
        scoreOne += 1;
    }
    else{
        contentthree.textContent = "It's a TIE!";
    }
    contentfour.textContent = "YOU:" + scoreOne + "   VS   " + "COMPUTER:" + scoreTwo;
    /*if (scoreOne==5 || scoreTwo==5){
        if (scoreOne > scoreTwo){
            contentfive.textContent = "YOU'RE SAFE!";
        }
        else{
            contentfive.textContent = "HAHA!!! YOU'RE DONE";
        }
        scoreOne = 0;
        scoreTwo = 0;
        window.addEventListener('click', () => {
            contentfive.textContent = "";
        });
    }*/
}

const contents = document.querySelector('.contents');

const contentthree = document.createElement('div');
contentthree.classList.add('contentthree');
contents.appendChild(contentthree);

const contentfour = document.createElement('div');
contentfour.classList.add('contentfour');
contentfour.textContent = "YOU:" + scoreOne + "   VS   " + "COMPUTER:" + scoreTwo;
contents.appendChild(contentfour);

/*const contentfive = document.createElement('div');
contentfive.classList.add('contentfive');
contents.appendChild(contentfive);*/

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



