const choices = ["ROCK", "PAPER", "SCISSORS"];


const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGames(playerChoice) {

    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = "";

    if (playerChoice === computerChoice) {
        result = "IT'S A TIE!";
    }
    else {
        switch(playerChoice) {
            case "ROCK":
                (computerChoice === "SCISSORS") ? result = "YOU WIN!" : result = "YOU LOSE!";
                break;
            case "PAPER":
                (computerChoice === "ROCK") ? result = "YOU WIN!" : result = "YOU LOSE!";
                break;
            case "SCISSORS":
                (computerChoice === "PAPER") ? result = "YOU WIN!" : result = "YOU LOSE!";
                break;
    }
}


    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText", "yellowText");

    switch(result) {
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            playerScore ++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add("redText");
            computerScore ++;
            computerScoreDisplay.textContent = computerScore;
            break;
        case "IT'S A TIE!":
            resultDisplay.classList.add("yellowText")
            break;
    };
};


const darkMode = document.getElementById("darkMode");
darkMode.addEventListener("click", () => {
    document.body.classList.toggle("pageDarkMode");
    document.body.style.transition = "background-color 0.5s ease";
});
