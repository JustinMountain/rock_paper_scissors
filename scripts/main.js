// add event listener to class choice
    // set playerValue based on which choice was made

const choices = document.querySelectorAll('.choice');

let round = 0;

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        let playerValue = choice.id;
        let victor = playRound(playerValue, computerPlay());
        
        // Modify the h3 declaring the winner
        const winnerDeclaration = document.querySelector('.winnerDeclaration');

        if (victor == "none") {
            winnerDeclaration.textContent = "It was a draw.";
            round++;
        } else if (victor == "player") {
            winnerDeclaration.textContent = "This round went to you.";
            round++;
        } else if (victor == "computer") {
            winnerDeclaration.textContent = "The AI successfully predicted your move.";
            round++;
        } else {
            winnerDeclaration.textContent = "Something went awry.";
        }

        // Draw a div which includes the plays, winner, and score

        const roundDeclarationSpace = document.querySelector('.rounds');

        const roundWinner = document.createElement('div');
        roundWinner.textContent = "Round " + round + " goes to " + victor;

        roundDeclarationSpace.prepend(roundWinner);

    });
});

// Have the computer choose between RPS
function computerPlay() {
    // Choose a random number between 0-2

    let computerSelection;
    let rpsValue = Math.floor(Math.random() * 3); // expect 0, 1, or 2

    // 0 = Rock, 1 = Paper, 2 = Scissors

    if (rpsValue == 0) {
        computerSelection = "rock";
    }
    else if (rpsValue == 1) {
        computerSelection = "paper";
    }
    else if (rpsValue == 2) {
        computerSelection = "scissors";
    }
    return computerSelection;
}

// create playRound() which takes in playerValue and computerSelection
    // determine winner
    // return winner

function playRound(playerValue, computerSelection) {
    let winner;

    //If the player selects rock, ...
    if (playerValue == "rock") {
        if (computerSelection == "paper") {
            winner = "computer";
        }
        else if (computerSelection == "scissors") {
            winner = "player";
        }
        else {
            winner = "none";
        }
    }

    //If the player selects paper, ...
    else if (playerValue == "paper") {
        if (computerSelection == "scissors") {
            winner = "computer";
        }
        else if (computerSelection == "rock") {
            winner = "player";
        }
        else {
            winner = "none";
        }
    }

    //If the player selects scissors, ...
    else if (playerValue == "scissors") {
        if (computerSelection == "rock") {
            winner = "computer";
        }
        else if (computerSelection == "paper") {
            winner = "player";
        }
        else {
            winner = "none";
        }
    }
    return winner;
}

function playRPS() {
    let playerScore = 0;
    let computerScore = 0;
    let winnerDeclared = false;

    // Continue until a winner is declared for the game
    while (!winnerDeclared) {
        let winner = playRound(playerSelection(), computerPlay());

        // When the player wins a round, increase score and output new totals
        if (winner == "player") {
            playerScore++;
            console.log("(" + playerScore + " - " + computerScore + ") You won this round.");
                if (playerScore >= 5) {
                    console.log("You triumphed over the computer.")
                    winnerDeclared = true;
                }
        }
        // When the computer wins a round, increase score and output new totals
        else if (winner == "computer") {
            computerScore++;
            console.log("(" + playerScore + " - " + computerScore + ") The computer won this round.");
                if (computerScore >= 5) {
                    console.log("The computer beat you.")
                    winnerDeclared = true;
                }
        }
        else {
            console.log("(" + playerScore + " - " + computerScore + ") It was a draw.");
        }
    }
    
    // // After the game is completed, ask if the user wants to play again.
    // if (window.confirm("Would you like to play again?"))
    // {
    //     playRPS();
    // }
}