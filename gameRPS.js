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
let userInput = "";
// The Trap Condition: Keep looping AS LONG AS the choices array does NOT include what the user typed
while (!choices.includes(userInput)) {  //if not arr value include by user input
    let rawPrompt = prompt("Choose your weapon! Enter rock, scissor, or paper:");
    // Safety Net: If the user clicks 'Cancel', rawPrompt is null. We turn it into an empty string to prevent crashes.
    if (rawPrompt === null) {
        userInput = "";
    } else {
        userInput = rawPrompt.toLowerCase().trim();
    }

}



let computerInput = getComputerChoice(); //from function call dirext and down with argument pass to paramater it like empty box placeholder type where he get this argument pass but it will run two time one before promt and later promt and random choice computer will differ change like first befor it will choose index 0 then later may chose 1 
//so above wher is calling comment it simple line no 29
playground(userInput, computerInput);

