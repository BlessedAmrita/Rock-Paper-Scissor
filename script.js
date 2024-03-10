let choices = document.querySelectorAll(".choice");//div that contains the image
let resultMessage = document.querySelector("#resultText");//for text inside para
let resultMessageBox = document.querySelector(".result");//div containing the para
let userScore = document.querySelector("#userScore");
let compScore = document.querySelector("#compScore");

let userWin = 0; let compWin = 0;

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        console.log(choice.getAttribute("id"));
        let userChoice = choice.getAttribute("id");
        let compChoice = randomChoice();
        let result = true;
        if (userChoice === compChoice) {
            resultMessage.innerText = "That's a Draw!";
            resultMessageBox.style.backgroundColor = '#3d405b';
        }
        else {
            if (userChoice === "paper")
                result = compChoice === "rock" ? true : false;
            else if (userChoice === "scissor")
                result = compChoice === "paper" ? true : false;
            else
                result = compChoice === "scissor" ? true : false;
            console.log(compChoice);
            if (result === true) {
                userWin++;
                userScore.innerText = userWin;
                resultMessage.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
                resultMessageBox.style.backgroundColor = '#81b29a';
            }
            else {
                compWin++;
                compScore.innerText = compWin;
                resultMessage.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
                resultMessageBox.style.backgroundColor = '#e07a5f';
            }
        }
    })
});

//generates a random choice
randomChoice = () => {
    let allChoices = ["rock", "paper", "scissor"];
    let index = Math.floor(Math.random() * 3);
    return allChoices[index];
}