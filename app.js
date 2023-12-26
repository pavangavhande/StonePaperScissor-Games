let userScore = 0;
let compScore = 0;

const options = document.querySelectorAll(".choice");
const msg = document.querySelector("#msgs");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const drawGame = () => {
    console.log("game was draw");
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "black"
}

const genCompChoice = () => {
    const option =["stone", "paper", "scissor"];
    const randIdX = Math.floor(Math.random()*3);
    return option[randIdX];
};

const showWinner = (userwin, userChoice, compChoice) => {
    if(userwin){
        userScore++;
        userScorepara.innerText = userScore;
        console.log("You  Win!");
        msg.innerText = `You Win!, Your ${userChoice} Beats ${compChoice}`;
        msg.style.backgroundColor = "green"

    }else{
        compScore++;
        compScorepara.innerText = compScore;
        console.log("You lose");
        msg.innerText = `You lose, ${compChoice} Beats Your ${userChoice}`;
        msg.style.backgroundColor = "red"
    }
}

const playGame = (userChoice) => {
    console.log("user choice =", userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice =", compChoice);

    if(userChoice === compChoice){
        drawGame();
    }else{
        let userwin = true;
        if(userChoice ==="stone"){
            userwin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userwin = compChoice === "scissor" ? false : true;
        }else {
            userwin = compChoice === "stone" ? false : true;
        }
        showWinner(userwin, userChoice, compChoice);
    }

};

options.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});