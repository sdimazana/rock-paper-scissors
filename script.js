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

/*
    playRound() algorithm

    Evaluate the player's choice:
        If the player chose rock, they will win if the computer chose scissors
        If the player chose paper, they will win if the computer chose rock
        If the player chose scissors, they will win if the computer chose paper
        If the player chose the same option as the computer, it is a tie.
    If the player won, increment their score by 1 and display a winner announcement.
    If the player lost, increment computer score by 1 and display loser announcement.
    If it is a tie, increment both scores and display tie announcement.
*/

/*
    playRound() pseudocode

    Use a switch statement for different cases of player response.
    Within each case, use if statements for different computer responses.
    If the player wins, increment humanScore.
    If the computer wins, increment computerScore.
    If it is a tie, increment humanScore and computerScore.
    Display winning announcement if player wins.
    Display losing announcement if player loses.
    Display tie announcement if it is a tie.
*/


/*
    playGame() algorithm

    This function will keep track of the number of rounds that have been played.
    After five rounds, the winner is decided.
    If the player won at least 3 rounds, they are the winner.
    If the computer won at least 3 rounds, they are the winner.
    If there were 5 consecutive ties, there is an overall tie.
*/

/*
    playGame() pseudocode

    Declare roundCounter which increments each time playRound() is called.
    While roundCounter is less than or equal to 5, call playRound().
    If humanScore and computerScore are equal, display tie announcement.
    If humanScore is greater than computerScore, display winner announcement.
    If humanScore is less than computerScore, display loser announcement.
*/

function playGame() {

    //These variables keep track of the scores
    let humanScore = 0;
    let computerScore = 0;

    function playRound(player, computer){
        if(computer === player){
            humanScore++;
            computerScore++;
            console.log(`Tie! The computer also chose ${computer}`);
        return;
        }
        switch(player){
            case "ROCK": 
                if (computer == "SCISSORS") {
                    humanScore++;
                    console.log(`You win! ${player} beats ${computer}`);
                } else {
                    computerScore++;
                    console.log(`You lose! ${computer} beats ${player}`);
                }
            break;
            case "PAPER": 
                if (computer == "ROCK") {
                    humanScore++;
                    console.log(`You win! ${player} beats ${computer}`);
                } else {
                    computerScore++;
                    console.log(`You lose! ${computer} beats ${player}`);
                }
            break;
            case "SCISSORS": 
                if (computer == "PAPER") {
                    humanScore++;
                    console.log(`You win! ${player} beats ${computer}`);
                } else {
                    computerScore++;
                    console.log(`You lose! ${computer} beats ${player}`);
                }
            break;
        }
    }

    let roundCounter = 0;

    while (roundCounter < 5) {
        roundCounter++;
        playRound(getHumanChoice(), getComputerChoice());
    }
    
    if (humanScore === computerScore) {
        console.log("5 rounds are over. Game is a tie!");
    } else if (humanScore < computerScore){
        console.log("5 rounds are over. You have lost.");
    } else {
        console.log("5 rounds are over. You have won!");
    }
}