console.log('hi');

let msg = "Game start"
document.getElementById("status").innerHTML= msg; 

//game begin 
//intiailise in array 
const choices = ["rock","scissor","paper"];

//to check whether from array we are fetched all value from index 0 
// for(choice of choices){
//     console.log(choice);  //done display all value rock scissor paper;
// }  

function getComputerChoice(){

//console.log("function call");   

let randomIndex = Math.floor(Math.random() * choices.length);
console.log("Random index choose is ", randomIndex);

let computerChoice = choices[randomIndex];
console.log("Computer choose value ", computerChoice);
}

getComputerChoice();  //calling