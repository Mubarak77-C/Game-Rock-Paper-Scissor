const choices = ["rock", "scissor", "paper"];
let humanScore = 0;
let computerScore = 0;

// Grab DOM elements once
const roundOutcome = document.getElementById("round-outcome");
const scoreBoard = document.getElementById("score-board");
const winnerAnnouncement = document.getElementById("winner-announcement");

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(userChoice, computerChoice) {
    if (computerChoice === userChoice) {
        return "draw";
    }
    else if (
        (userChoice === "rock" && computerChoice === "scissor") ||
        (userChoice === "scissor" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "rock")
    ) {
        return "Human WIN";
    } else {
        return "Computer WIN";
    }
}

// Core function that runs on every button click
function handlePlayerChoice(userChoice) {
    // Stop playing if someone already won the game (e.g. first to 5 points)
    if (humanScore >= 5 || computerScore >= 5) {
        return;
    }

    const computerChoice = getComputerChoice();
    const result = playRound(userChoice, computerChoice);

    // Update Scores & Text dynamically
    if (result === "Human WIN") {
        humanScore++;
        roundOutcome.textContent = `You win this round! (${userChoice} beats ${computerChoice})`;
    } else if (result === "Computer WIN") {
        computerScore++;
        roundOutcome.textContent = `Computer wins this round! (${computerChoice} beats ${userChoice})`;
    } else {
        roundOutcome.textContent = `It's a draw! Both chose ${userChoice}`;
    }

    // Update scoreboard text
    scoreBoard.textContent = `Score -> You: ${humanScore} | Computer: ${computerScore}`;

    // Check for Game Over (First to 5 points wins)
    checkForWinner();
}

function checkForWinner() {
    if (humanScore === 5 || computerScore === 5) {
        // Create a new dynamic div for the final announcement (satisfying the assignment)
        const finalDiv = document.createElement("div");
        finalDiv.style.fontSize = "1.5rem";
        finalDiv.style.marginTop = "15px";
        
        if (humanScore > computerScore) {
            finalDiv.textContent = "🏆 GRAND CHAMPION: YOU WON THE MATCH! 🏆";
            finalDiv.style.color = "green";
        } else {
            finalDiv.textContent = "🤖 GRAND CHAMPION: COMPUTER WON THE MATCH! 🤖";
            finalDiv.style.color = "red";
        }

        winnerAnnouncement.appendChild(finalDiv);
    }
}

// --- STEP 3: Attach Event Listeners to Buttons ---
document.getElementById("rock").addEventListener("click", () => handlePlayerChoice("rock"));
document.getElementById("paper").addEventListener("click", () => handlePlayerChoice("paper"));
document.getElementById("scissor").addEventListener("click", () => handlePlayerChoice("scissor"));