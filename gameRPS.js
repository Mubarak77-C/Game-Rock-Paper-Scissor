console.log('hi');

let msg = "Game start"
document.getElementById("status").innerHTML = msg;

//game begin 
//intiailise in array 
const choices = ["rock", "scissor", "paper"];

//to check whether from array we are fetched all value from index 0 
// for(choice of choices){
//     console.log(choice);  //done display all value rock scissor paper;
// }  

function getComputerChoice() {

    //console.log("function call");   

    let randomIndex = Math.floor(Math.random() * choices.length);
    console.log("Random index choose is ", randomIndex);

    let computerChoice = choices[randomIndex];
    console.log("Computer choose value ", computerChoice);

    // Return the string value so our comparison engine can use it later
    return computerChoice;
}

//calling function to check where two time run so comment to not call 
//where it calling from line 45

//getComputerChoice();  

//here confuse where to take input from user where i know computer input coming from above getComputerChoice
//So for input user take prompt argument to pass in parameter ie empty box like placeholder paramater
function playground(userChoice, computerChoice) {
    //this is simple to call with string where below backstick is good to call
    // console.log("User choice is ", userChoice);
    // console.log("computer box hold from machine random ", computerChoice);




    //now with conditon game with rule draw or win or loose

    if (computerChoice === userChoice) {
        console.log(`Both User and computer are draw`)
    }
    //here i will check all possiblity of winning of user choice
    else if (
        (userChoice === "rock" && computerChoice === "scissor") ||
        (userChoice === "scissor" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "rock")
    ) {
        console.log(`User WIN!`)
    } else {
        console.log(`Computer WIN! : User better luck next time!`)
    }



    //with backstick it good for multiple line to print 
    console.log(`User choice is : ${userChoice}`);
    console.log(`computer box hold from machine random : ${computerChoice}`);
}

// let userInput = prompt("Enter Rock,Paper,Scissor").toLowerCase();
//herer i got PR
//now i got pull request that input prompt any data type added it taking so it should take data type as what array have not anything like number etc apart from array values string

//initialise input empty var to start loop to check
//###
//let userInput = "";
// The Trap Condition: Keep looping AS LONG AS the choices array does NOT include what the user typed
//if not arr value include by user input

//  while (!choices.includes(userInput)) { 

// let rawPrompt = prompt("Choose your weapon! Enter rock, scissor, or paper:");

// Safety Net: If the user clicks 'Cancel', rawPrompt is null. We turn it into an empty string to prevent crashes.
//     if (rawPrompt === null) {
//         userInput = "";
//     } else {
//         userInput = rawPrompt.toLowerCase().trim();
//     }

// }
//### down new function gamecontroller redefine to fix it


//again review bug got as stuck infinte loop even cancel button clicked on prompt 
//so i need to create new function as gameController 

function gameController() {
    let userInput = "";

    while (!choices.includes(userInput)) {
        let rawPrompt = prompt("Choose your weapon! Enter rock, scissor, or paper:");

        if (rawPrompt === null || rawPrompt.toLowerCase().trim() === "exit") {
            console.log("👋 Game ended gracefully by the user. Goodbye!");
            return; // 🚀 This stops the entire game loop execution instantly!
        }
        userInput=rawPrompt.toLowerCase().trim();
    }

    // This code only runs if they escaped the trap loop with a valid choice!
    let computerInput = getComputerChoice();
    playground(userInput, computerInput);
}

// Kickstart the game loop controller safely
gameController();





