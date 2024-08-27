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
        return "rock";
    } else if (randomNumber < 0.66){
        return "paper";
    } else {
        return "scissors";
    }
}
