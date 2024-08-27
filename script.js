/*
    getComputerChoice() algorithm

    Generate a random number between 0 and 1
    Test whether number is less than 0.33 
        If so, return "rock"
    Test whether number is greater than or equal to 0.33 and less than 0.66
        If so, return "paper"
    Test whether number is greater than or equal to 0.67
        If so, return "scissors"
*/

/*
    getComputerChoice() pseudocode

    Declare randomNumber variable and set it equal to Math.random()
    If randomNumber is less than 0.33, return "rock" ELSE
    If randomNumber is less than 0.66, return "paper" ELSE
    Return "scissors"
*/

function getComputerChoice(){
    let randomNumber = Math.random();
    if (randomNumber < 0.33){
        return "ROCK";
    } else if (randomNumber < 0.66){
        return "PAPER";
    } else {
        return "SCISSORS";
    }
}

/*
    getHumanChoice() algorithm

    Prompt the user to enter either rock, paper, or scissors.
    Display user choice if they entered a valid response.
    If invalid, reprompt the user to enter rock, paper, or scissors
*/

/*
    getHumanChoice() pseudocode

    Prompt user to enter rock, paper or scissors
    Store response in humanChoice variable
    Turn humanChoice to all uppercase characters
    If user entered something invalid, loop prompt function until valid response
    If humanChoice equals ROCK
        Log "You chose rock" to the console and return humanChoice
    If humanChoice equals PAPER
        Log "You chose paper" to the console and return humanChoice
    If humanChoice equals SCISSORS
        Log "You chose scissors" to the console and return humanChoice
*/

function getHumanChoice(){

    let humanChoice = prompt("Please enter rock, paper, or scissors: ", "");
    humanChoice = humanChoice.toUpperCase();

    while (humanChoice !== "ROCK" && humanChoice !== "PAPER" && humanChoice !== "SCISSORS"){
        humanChoice = prompt("Please enter rock, paper, or scissors: ", "");
        humanChoice = humanChoice.toUpperCase();
    }

    switch(humanChoice){
        case "ROCK": 
            console.log("You chose ROCK");
            return humanChoice;
        case "PAPER": 
            console.log("You chose PAPER");
            return humanChoice;
        case "SCISSORS": 
            console.log("You chose SCISSORS");
            return humanChoice;
    }
}

//These variables keep track of the scores
let humanScore = 0;
let computerScore = 0;

/*
    playRound() algorithm

    Compare return values from getHumanChoice() to getComputerChoice()

*/