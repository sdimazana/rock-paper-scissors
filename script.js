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

//Play a round each time the player clicks a button
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(`${button.id}`, getComputerChoice());
    });
});

//These variables keep track of the scores
let humanScore = 0;
let computerScore = 0;

function playRound(player, computer){

    let announcement = "";

    if(computer === player){
        humanScore++;
        computerScore++;
        announcement = `Tie! The computer also chose ${computer}`;
        countScores();
        displayScores(announcement);
        return;
    }

    switch(player){
        case "ROCK": 
            if (computer == "SCISSORS") {
                humanScore++;
                announcement = `You win! ${player} beats ${computer}`;
            } else {
                computerScore++;
                announcement = `You lose! ${computer} beats ${player}`;
            }
        break;
        case "PAPER": 
            if (computer == "ROCK") {
                humanScore++;
                announcement = `You win! ${player} beats ${computer}`;
            } else {
                computerScore++;
                announcement = `You lose! ${computer} beats ${player}`;
            }
        break;
        case "SCISSORS": 
            if (computer == "PAPER") {
                humanScore++;
                announcement = `You win! ${player} beats ${computer}`;
            } else {
                computerScore++;
                announcement = `You lose! ${computer} beats ${player}`;
            }
        break;
    }

    displayScores(announcement);
    countScores();
}

function displayScores(announcement){
    const roundAnnouncement = document.querySelector('#roundAnnoucement');
    roundAnnouncement.textContent = announcement;

    const computerScoreDisplay = document.querySelector('#computerScore');
    computerScoreDisplay.textContent = computerScore;

    const playerScoreDisplay = document.querySelector('#playerScore');
    playerScoreDisplay.textContent = humanScore;
}

function countScores(){
    let winner = '';
    if(humanScore == 5){
        winner = 'Congratulations! You won!';
        resetGame();
    }else if (computerScore == 5){
        winner = 'The computer has won!';
        resetGame();
    }
    const winnerAnnouncement = document.querySelector('#winnerAnnouncement');
    winnerAnnouncement.textContent = winner;
}

function resetGame(){
    humanScore = 0;
    computerScore = 0;
}
