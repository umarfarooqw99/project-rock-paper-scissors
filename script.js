function getComputerChoice() {
    let choiceIndex = Math.floor((Math.random() * 3)) + 1;
    let choiceValue = "";
    switch (choiceIndex) {
        case 1:
            choiceValue = "rock"
            break;
        case 2:
            choiceValue = "paper"
            break;
        case 3:
            choiceValue = "scissors"
            break;
    }
    return choiceValue;
}

function getHumanChoice() {
    let choiceValue = prompt("Choose a value from the three: rock, paper, scissors").toLowerCase();
    let isChoiceValid = 0;
    if (choiceValue === 'rock' || choiceValue === 'paper' || choiceValue === 'scissors') isChoiceValid = 1;
    while (!isChoiceValid) {
        choiceValue = prompt("Please enter a valid choice").toLowerCase();
        if (choiceValue === 'rock' || choiceValue === 'paper' || choiceValue === 'scissors') isChoiceValid = 1;
    }
    return choiceValue;
}

function playRound(humanChoice, computerChoice) {
    let choiceAnnouncement = `You chose ${humanChoice}; computer chose ${computerChoice}`;
    if (humanChoice == computerChoice) {
        console.log(`${choiceAnnouncement}`);
        return null;
    }
    if (
        (humanChoice == 'rock' && computerChoice == 'scissors') ||
        (humanChoice == 'paper' && computerChoice == 'rock') ||
        (humanChoice == 'scissors' && computerChoice == 'paper')
    ) {
        console.log(`${choiceAnnouncement}; ${humanChoice} beats ${computerChoice}` );
        return 1;
    }

    else {
        console.log(`${choiceAnnouncement}; ${computerChoice} beats ${humanChoice}`);
        return 0;
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        let didYouWin = playRound(humanChoice, computerChoice);
        if(didYouWin === null) {
            console.log(`Round ${i + 1} finished. This match was a draw.`)
        }
        else if (didYouWin) {
            humanScore++;
            console.log(`Round ${i + 1} finished. You won this round.`)
        }
        else {
            console.log(`Round ${i + 1} finished. You lost this round.`);            
            computerScore++;
        }
    }
    console.log("Computer score: ", computerScore);
    console.log("Human score: ", humanScore);
    if (humanScore == computerScore) console.log(`Tournament winner: No winners here. It's a tie.`);
    else if (humanScore > computerScore) console.log(`Tournament winner: You`);
    else console.log(`Tournament winner: Computer`);
}