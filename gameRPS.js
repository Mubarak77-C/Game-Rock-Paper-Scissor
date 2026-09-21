/**
 * PROJECT: ROCK, PAPER, SCISSORS TOURNAMENT ENGINE
 * DESIGN: Self-Documenting, Production-Grade JavaScript
 */

const choices = ["rock", "scissor", "paper"];
let humanScore = 0;
let computerScore = 0;

document.getElementById("status").innerHTML = "Game start";

/**
 * Generates a randomized legal choice for the computer agent.
 * @returns {string} "rock", "scissor", or "paper"
 */
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomIndex];
    
    console.log("Random index chosen is:", randomIndex);
    console.log("Computer chose value:", computerChoice);
    
    return computerChoice;
}

/**
 * Pure Evaluation Engine: Compares choices to determine round winner.
 * @returns {string} "draw", "Human WIN", or "Computer WIN"
 */
function playground(userChoice, computerChoice) {
    console.log("User choice is:", userChoice);

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

/**
 * Handles user input verification loops, exit gates, and score increments.
 * @returns {string} "success" or "exit"
 */
function playRound() {
    let userInput = "";

    while (!choices.includes(userInput)) {
        let rawPrompt = prompt("Choose your weapon! Enter rock, scissor, or paper (or type 'exit' to quit):");
        
        if (rawPrompt === null || rawPrompt.toLowerCase().trim() === "exit") {
            console.log("Good Bye! Tournament abandoned by the user.");
            return "exit";
        }

        userInput = rawPrompt.toLowerCase().trim();
    }

    const computerInput = getComputerChoice();
    const result = playground(userInput, computerInput);

    if (result === "Human WIN") {
        humanScore++;
        console.log(`Round Winner : User! ( ${userInput} beats ${computerInput} )`);
    }
    else if (result === "Computer WIN") {
        computerScore++;
        console.log(`Round Winner : Computer! (${computerInput} beats ${userInput})`);
    }
    else {
        console.log(`Round Result : It's a draw! Both Choose ${userInput}`);
    }
    
    console.log(`Current Score -> You : ${humanScore} | Computer : ${computerScore} \n --------`);
    return "success";
}

/**
 * Orchestrates the automated 5-round tournament loop and final championship verdict.
 */
function gameTournament() {
    console.log("Tournament started with 5 rounds in a row");

    for (let round = 1; round <= 5; round++) {
        console.log(`=== Round ${round} of 5 =====`);
        let status = playRound();

        if (status === "exit") {
            document.getElementById("status").innerHTML = "Tournament Aborted";
            return;
        }
    }

    console.log("\n🏁 TOURNAMENT CONCLUDED! FINAL SCORE REPORT: 🏁");
    console.log(`Final Standings -> You: ${humanScore} | Computer: ${computerScore}`);

    if (humanScore > computerScore) {
        console.log("🏆 GRAND CHAMPION VERDICT: USER WINS THE MATCH! 🏆");
        document.getElementById("status").innerHTML = `Tournament Over: User Wins (${humanScore}-${computerScore})!`;
    } else if (computerScore > humanScore) {
        console.log("🤖 GRAND CHAMPION VERDICT: COMPUTER WINS THE MATCH! 🤖");
        document.getElementById("status").innerHTML = `Tournament Over: Computer Wins (${computerScore}-${humanScore})!`;
    } else {
        console.log("🤝 GRAND CHAMPION VERDICT: IT'S A DRAW MATCH! 🤝");
        document.getElementById("status").innerHTML = `Tournament Over: It's a Draw (${humanScore}-${computerScore})!`;
    }
}

// Master execution call
gameTournament();
