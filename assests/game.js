let userScore = 0;
let compScore = 0;

// DOM elements
const choices = document.querySelectorAll(".choice");
const msgprag = document.querySelector("#msg");
const darkmode = document.querySelector("#themeToggle");
const userScoreparag = document.querySelector("#user-score");
const compScoreparag = document.querySelector("#comp-score");
const RestartGame = document.querySelector(".Restart");

// Dark Mode Toggle
darkmode.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    darkmode.innerHTML = document.body.classList.contains("dark") ? "Light Mode" : "Dark Mode";
});

// Restart Game
RestartGame.addEventListener("click", () => {
    userScore = 0;
    compScore = 0;
    userScoreparag.textContent = userScore;
    compScoreparag.textContent = compScore;
    msgprag.textContent = "Play game Again";
    msgprag.style.backgroundColor = "transparent";
    msgprag.style.color = "black";
});

// Generate computer choice
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * options.length);
    return options[randIdx];
};

// Draw game
const drawGame = () => {
    msgprag.textContent = "Game is a draw!";
    msgprag.style.backgroundColor = "lightgray";
    msgprag.style.color = "black";
};

// Show winner
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScoreparag.textContent = userScore;
        msgprag.textContent = `You win! ${userChoice} beats ${compChoice}`;
        msgprag.style.backgroundColor = "green";
        msgprag.style.color = "white";
    } else {
        compScore++;
        compScoreparag.textContent = compScore;
        msgprag.textContent = `You lose! ${compChoice} beats ${userChoice}`;
        msgprag.style.backgroundColor = "red";
        msgprag.style.color = "white";
    }
};

// Play game
const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin;
        if (userChoice === "rock") userWin = compChoice === "scissors";
        else if (userChoice === "paper") userWin = compChoice === "rock";
        else if (userChoice === "scissors") userWin = compChoice === "paper";

        showWinner(userWin, userChoice, compChoice);
    }
};

// Event listeners for choices
choices.forEach(choice => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
