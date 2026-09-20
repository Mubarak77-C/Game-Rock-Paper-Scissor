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

    if(computerChoice===userChoice) {
        console.log(`Both User and computer are draw`)
    }
    else if(computerChoice>userChoice){
        console.log(`ComputerUSer  WIN`)
    }else{
        console.log(`ComputerUSer LOOSE`)
    }



    //with backstick it good for multiple line to print 
    console.log(`User choice is : ${userChoice}`);
    console.log(`computer box hold from machine random : ${computerChoice}`);
}
let userInput = prompt("Enter Rock,Paper,Scissor").toLowerCase();
let computerInput = getComputerChoice(); //from function call dirext and down with argument pass to paramater it like empty box placeholder type where he get this argument pass but it will run two time one before promt and later promt and random choice computer will differ change like first befor it will choose index 0 then later may chose 1 
//so above wher is calling comment it simple line no 29
playground(userInput, computerInput);

