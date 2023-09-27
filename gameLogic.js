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
    let choisesList = ["Paper" , "Rock", "Scissors"];
    let randomChoise = Math.floor(Math.random()*choisesList.length);
    computerChoise.innerHTML = choisesList[randomChoise];
}

function finalResult(){
    const computerChoiseText = computerChoise.textContent;
    const userChoiseText = userChoise.textContent;
    let resultTemp;
    if (computerChoiseText === userChoiseText){
        result.innerHTML = "Draw!";
        return;
    }
    switch(computerChoiseText){
        case "Paper": {
            result.innerHTML = userChoiseText === "Scissors"?"You won!":"You lose!";
            break;
        }
        case "Rock": {
            result.innerHTML = userChoiseText === "Paper"?"You won!":"You lose!";
            break;
        }
        case "Scissors": {
            result.innerHTML = userChoiseText === "Rock"?"You won!":"You lose!";
            break;
        }
    }
}