//Write function getComputerChoice() that randomly returns either Rock, Paper or scizzors
function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * 3); //Chooses a random number between 0-3
    const choices = ["Rock", "Paper", "Scizzors"];
    return choices[randomIndex]
}

//Write function getHumanChoice() that returns either Rock, Paper, Scizzors based on user choice
function getHumanChoice() {
    let input = prompt("Please choose Rock,Paper, or Scizzors");
    let convertedInput = "";
    for (let i = 0; i < input.length; i++) {
        if (i == 0) {
            convertedInput += input[i].toUpperCase();
        }
        else {
            convertedInput += input[i].toLowerCase();
        }
    }
    return convertedInput;
}

//Initialise variables to hold computer and player score at 0


//Create function that takes user and computer choice, plays a round and increments score for appropriate player


//Write function playGame() that executes playRound() 5 times and declares winner at the end
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(user, computer) {
        if (user == "Scizzors") {
            if (computer == "Scizzors") {
                console.log("Both players chose " + user + ". It's a draw!");
            }
            else if (computer == "Paper") {
                console.log(user + " beats " + computer + " so user wins!");
                humanScore += 1;
            }
            else {
                console.log(computer + " beats " + user + " so computer wins!");
                computerScore += 1;
            }
        }
        else if (user == "Rock") {
            if (computer == "Rock") {
                console.log("Both players chose " + user + ". It's a draw!");
            }
            else if (computer == "Scizzors") {
                console.log(user + " beats " + computer + " so user wins!");
                humanScore += 1;
            }
            else {
                console.log(computer + " beats " + user + " so computer wins!");
                computerScore += 1;
            }
        }
        else {
            if (computer == "Paper") {
                console.log("Both players chose " + user + ". It's a draw!");
            }
            else if (computer == "Rock") {
                console.log(user + " beats " + computer + " so user wins!");
                humanScore += 1;
            }
            else {
                console.log(computer + " beats " + user + " so computer wins!");
                computerScore += 1;
            }
        }
    }

    for (let i = 0; i < 5; i++) {
        let userChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(userChoice, computerChoice);
    }
    if (humanScore > computerScore) {
        console.log("User has " + humanScore + " wins, and computer has " + computerScore + " wins, so user wins overall!");
    }
    else if (humanScore < computerScore) {
        console.log("User has " + humanScore + " wins, and computer has " + computerScore + " wins, so Computer wins overall!");
    }
    else {
        console.log("User has " + humanScore + " wins, and computer has " + computerScore + " wins, so it's a tie!");
    }
}

console.log(playGame());