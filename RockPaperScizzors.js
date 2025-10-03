//Helper function to remvove all children nodes
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

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
    let result="";

    function playRound(user, computer) {
        if (user == "Scizzors") {
            if (computer == "Scizzors") {
                result="Both players chose " + user + ". It's a draw!";
            }
            else if (computer == "Paper") {
                result=user + " beats " + computer + " so user wins!";
                humanScore += 1;
            }
            else {
                result=computer + " beats " + user + " so computer wins!";
                computerScore += 1;
            }
        }
        else if (user == "Rock") {
            if (computer == "Rock") {
                result="Both players chose " + user + ". It's a draw!";
            }
            else if (computer == "Scizzors") {
                result=user + " beats " + computer + " so user wins!";
                humanScore += 1;
            }
            else {
                result=computer + " beats " + user + " so computer wins!";
                computerScore += 1;
            }
        }
        else {
            if (computer == "Paper") {
                result="Both players chose " + user + ". It's a draw!";
            }
            else if (computer == "Rock") {
                result=user + " beats " + computer + " so user wins!";
                humanScore += 1;
            }
            else {
                result=computer + " beats " + user + " so computer wins!";
                computerScore += 1;
            }
        }

        return result;
    }

    //target buttons
    const rockButton=document.querySelector(".rock");
    const paperButton=document.querySelector(".paper");
    const scizzorsButton=document.querySelector(".scizzors");
    console.log(rockButton);

    //add event listener for each button
    let userChoice="";
    rockButton.addEventListener("click",()=>{
        let computerChoice = getComputerChoice();
        userChoice="Rock";
        const result=playRound(userChoice, computerChoice);

        //Create a p element, called result
        const resultDisplay=document.createElement("p");

        //set inner text to value of result
        resultDisplay.textContent=result;

        //target results div,clear all child nodes and append resultDisplay
        const resultsDiv=document.querySelector(".results");
        removeAllChildNodes(resultsDiv);
        resultsDiv.appendChild(resultDisplay);

        //target runningScore, clear all child elements and append running score
        const totalScore=document.querySelector(".runningScore");
        removeAllChildNodes(totalScore);
        const runningScore=document.createElement("p");
        runningScore.textContent=`Current score is - Computer: ${computerScore}, User: ${humanScore}`;
        totalScore.appendChild(runningScore);

        //if computerScore or human Score==5, target winner div and annoucne winner
        const winner=document.querySelector(".winner");
        const winnerText=document.createElement("p");
        if(computerScore>=5){
            removeAllChildNodes(winner);
            winnerText.textContent="Computer wins overall";
            winner.appendChild(winnerText);
        }
        else if(humanScore>=5){
            removeAllChildNodes(winner);
            winnerText.textContent="User wins overall";
            winner.appendChild(winnerText);
        }
    })

    paperButton.addEventListener("click",()=>{
        let computerChoice = getComputerChoice();
        userChoice="Paper";
        const result=playRound(userChoice, computerChoice);

        //Create a p element, called result
        const resultDisplay=document.createElement("p");

        //set inner text to value of result
        resultDisplay.textContent=result;

        //target results div and append resultDisplay
        const resultsDiv=document.querySelector(".results");
        removeAllChildNodes(resultsDiv);
        resultsDiv.appendChild(resultDisplay);

        //target runningScore, clear all child elements and append running score
        const totalScore=document.querySelector(".runningScore");
        removeAllChildNodes(totalScore);
        const runningScore=document.createElement("p");
        runningScore.textContent=`Current score is - Computer: ${computerScore}, User: ${humanScore}`;
        totalScore.appendChild(runningScore);

        //if computerScore or human Score==5, target winner div and annoucne winner
        const winner=document.querySelector(".winner");
        const winnerText=document.createElement("p");
        if(computerScore>=5){
            removeAllChildNodes(winner);
            winnerText.textContent="Computer wins overall";
            winner.appendChild(winnerText);
        }
        else if(humanScore>=5){
            removeAllChildNodes(winner);
            winnerText.textContent="User wins overall";
            winner.appendChild(winnerText);
        }
    })

    scizzorsButton.addEventListener("click",()=>{
        let computerChoice = getComputerChoice();
        userChoice="Scizzors";
        const result=playRound(userChoice, computerChoice);

        //Create a p element, called result
        const resultDisplay=document.createElement("p");

        //set inner text to value of result
        resultDisplay.textContent=result;

        //target results div and append resultDisplay
        const resultsDiv=document.querySelector(".results");
        removeAllChildNodes(resultsDiv);
        resultsDiv.appendChild(resultDisplay);

        //target runningScore, clear all child elements and append running score
        const totalScore=document.querySelector(".runningScore");
        removeAllChildNodes(totalScore);
        const runningScore=document.createElement("p");
        runningScore.textContent=`Current score is - Computer: ${computerScore}, User: ${humanScore}`;
        totalScore.appendChild(runningScore);

        //if computerScore or human Score==5, target winner div and annoucne winner
        const winner=document.querySelector(".winner");
        const winnerText=document.createElement("p");
        if(computerScore>=5){
            removeAllChildNodes(winner);
            winnerText.textContent="Computer wins overall";
            winner.appendChild(winnerText);
        }
        else if(humanScore>=5){
            removeAllChildNodes(winner);
            winnerText.textContent="User wins overall";
            winner.appendChild(winnerText);
        }
    })
    
    // // let userChoice = getHumanChoice();
    
    // if (humanScore > computerScore) {
    //     console.log("User has " + humanScore + " wins, and computer has " + computerScore + " wins, so user wins overall!");
    // }
    // else if (humanScore < computerScore) {
    //     console.log("User has " + humanScore + " wins, and computer has " + computerScore + " wins, so Computer wins overall!");
    // }
    // else {
    //     console.log("User has " + humanScore + " wins, and computer has " + computerScore + " wins, so it's a tie!");
    // }
}

playGame();
