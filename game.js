const scoreBoard = document.querySelector("#scoreBoard");
const playDiv = document.querySelector("#play");
const submitDiv = document.querySelector("#submit");
const playButtons = playDiv.childNodes;
const submitButton = submitDiv.firstElementChild
let localDecision = "";
let localScore = 0;
const choices = ['ROCK','PAPER','SCISSORS'];
playButtons.forEach(button => {
    button.addEventListener('click',function(e){
        localDecision = e.target.getAttribute('id').toUpperCase();
    });
})
submitButton.addEventListener('click',()=>{
        thisRound = playRound();
        localScore +=  thisRound;
        message = (thisRound == 1)? "Win." : (thisRound==0)? "Tie.": "Lose.";
        scoreBoard.textContent = localScore+ `, ${message}`;
    }
);

function playRound(){
    let computerSelection = choices[Math.floor(Math.random() * 2)];
    let playerSelection = localDecision
    let player_i = choices.indexOf(playerSelection.toUpperCase());
    let computer_i = choices.indexOf(computerSelection.toUpperCase());
    if(player_i==computer_i){
        return 0;
    }else if((player_i+1)%3==computer_i){
        return -1;
    }else{
        return 1;
    }
}