const computerChoise = document.getElementById("computer-choise");
const userChoise = document.getElementById("user-choise");
const result = document.getElementById("result");
const possibleChoises = document.querySelectorAll("button");

possibleChoises.forEach((button) => {
    button.addEventListener("click", function(){
        userChoise.innerHTML = button.textContent;
        computerChoiseShow();
        finalResult();
    })
})

function computerChoiseShow(){
    let randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0)
        computerChoise.innerHTML = "Paper";
    if (randomNum === 1)
        computerChoise.innerHTML = "Rock";
    if (randomNum === 2)
        computerChoise.innerHTML = "Scissors";
}

function finalResult(){
    const computerChoiseText = computerChoise.textContent;
    const userChoiseText = userChoise.textContent;
    if (computerChoiseText === userChoiseText)
        result.innerHTML = "Draw!";
    else if(computerChoiseText === "Paper" && userChoiseText === "Rock")
        result.innerHTML = "You lose!";
    else if(computerChoiseText === "Paper" && userChoiseText === "Scissors")
        result.innerHTML = "You win!";

    else if(computerChoiseText === "Rock" && userChoiseText === "Paper")
        result.innerHTML = "You win!";
    else if(computerChoiseText === "Rock" && userChoiseText === "Scissors")
        result.innerHTML = "You lose!";
    
    else if(computerChoiseText === "Scissors" && userChoiseText === "Rock")
        result.innerHTML = "You win!";
    else if(computerChoiseText === "Scissors" && userChoiseText === "Paper")
        result.innerHTML = "You lose!";
}