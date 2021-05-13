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
    const controller = new AbortController();

    let round = 1;
    let playerScore = 0;
    let computerScore = 0;
    let winnerDeclared = false;

    // logic to determine the number of rounds to play
    // let maxScore;

    // add event listener to class choice
    // set playerValue based on which choice was made
    
    const choices = document.querySelectorAll('.choice');
    
    choices.forEach((choice) => {

        choice.addEventListener('click', gameLogic, { signal: controller.signal } );

        function gameLogic() {
            let playerValue = choice.id;
            let computerValue = computerPlay();
            let victor = playRound(playerValue, computerValue);
            
            // Modify the p declaring the winner
            const winnerDeclaration = document.querySelector('.winnerDeclaration');
    
            const roundDeclarationSpace = document.querySelector('.rounds');
    
            // Draw a div for the round
            const thisRound = document.createElement('div');
                thisRound.classList.add('thisRound');
    
                // create h3 containing the round #
                const roundNumber = document.createElement('h3');
                roundNumber.textContent = "Round " + round;
        
                    // append h3 to div
                    thisRound.appendChild(roundNumber);
    
                // create a div for round details 
                const roundDetails = document.createElement('div');
                roundDetails.classList.add('roundDetails');
                
                    // create 5 spans for details
                    const spanPS = document.createElement('span');
                    const spanPV = document.createElement('span');
                    const spanDash = document.createElement('span');
                    const spanCV = document.createElement('span');
                    const spanCS = document.createElement('span');

                    // add detailSpan class and "-" content for the dash
                    spanPS.classList.add('score');
                    spanPV.classList.add('roundValue');
                    spanDash.classList.add('dash');
                        spanDash.textContent = " - ";
                    spanCV.classList.add('roundValue');
                    spanCS.classList.add('score');
    
                    // append as children to roundDetails
                    roundDetails.appendChild(spanPS);
                    roundDetails.appendChild(spanPV);
                    roundDetails.appendChild(spanDash);
                    roundDetails.appendChild(spanCV);
                    roundDetails.appendChild(spanCS);
    
                    // append div to round
                    thisRound.appendChild(roundDetails);
    
                    // prepend round to roundDeclarationSpace
                    roundDeclarationSpace.prepend(thisRound);
                        
            // Round was a draw
            if (victor == "none") 
                {
                    winnerDeclaration.textContent = "Round " + round + " was a draw.";
                    spanPS.textContent = playerScore;
                    spanCS.textContent = computerScore;
    
                    if (playerValue == "rock") {
                        spanPV.setAttribute('id', "rock")
                        spanCV.setAttribute('id', "rock")
                    }
                    else if (playerValue == "paper") {
                        spanPV.setAttribute('id', "paper")
                        spanCV.setAttribute('id', "paper")
                    }
                    else if (playerValue == "scissors") {
                        spanPV.setAttribute('id', "scissors")
                        spanCV.setAttribute('id', "scissors")
                    }
                } 
            // Player victory 
            else if (victor == "player") 
                {
                    winnerDeclaration.textContent = "Round " + round + " went to you.";
                    playerScore++;
                    spanPS.textContent = playerScore;
                    spanCS.textContent = computerScore;
    
                    if (playerValue == "rock") {
                        spanPV.setAttribute('id', "rock");
                        spanPV.classList.add('winner');
                        spanCV.setAttribute('id', "scissors");
                    }
                    else if (playerValue == "paper") {
                        spanPV.setAttribute('id', "paper");
                        spanPV.classList.add('winner');
                        spanCV.setAttribute('id', "rock");
                    }
                    else if (playerValue == "scissors") {
                        spanPV.setAttribute('id', "scissors");
                        spanPV.classList.add('winner');
                        spanCV.setAttribute('id', "paper");
                    }
                } 
            // Computer victory
            else if (victor == "computer") 
                {
                    winnerDeclaration.textContent = "The AI successfully predicted your move for round " + round + ".";
                    computerScore++;
                    spanPS.textContent = playerScore;
                    spanCS.textContent = computerScore;
    
                    if (computerValue == "rock") {
                        spanCV.setAttribute('id', "rock");
                        spanCV.classList.add('winner');
                        spanPV.setAttribute('id', "scissors");
                    }
                    else if (computerValue == "paper") {
                        spanCV.setAttribute('id', "paper");
                        spanCV.classList.add('winner');
                        spanPV.setAttribute('id', "rock");
                    }
                    else if (computerValue == "scissors") {
                        spanCV.setAttribute('id', "scissors");
                        spanCV.classList.add('winner');
                        spanPV.setAttribute('id', "paper");
                    }
                } 
            // Catch-all case for extenuating circumstances
            else 
            {
                winnerDeclaration.textContent = "Something went awry.";
            }

            // Check for game over status

            if (playerScore >= 5) {
                winnerDeclared = true;
                winnerDeclaration.textContent = "You won! Refresh the page to play again.";
                console.log("The player has won");
                controller.abort();
            } else if (computerScore >= 5) {
                winnerDeclared = true;
                winnerDeclaration.textContent = "You were outsmarted. Refresh the page to try again.";
                console.log("The computer has won");
                controller.abort();
            }
                        
            // Increment round counter
            round++;
        };
    });
}
