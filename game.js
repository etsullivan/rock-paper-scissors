//user begins program
//1 is assigned to rock, 2 is assigned to paper, 3 is assigned to scissors
//random number between and including 1 and 3 is generated
//corresponding string to random number is returned



function getComputerChoice() {
 
    let choice = Math.random() * 100 + 1;

    if (choice < 33) return "Rock";
    else if (choice > 33 && choice < 66) return "Paper";
    else return "Scissors";
}

function getHumanChoice() {
    
    let choice = prompt ("Select Rock, Paper or Scissors.")

    if (choice.toLowerCase() === "rock") return "Rock";
    else if (choice.toLowerCase() === "paper") return "Paper";
    else if (choice.toLowerCase() === "scissors") return "Scissors";
    else choice = prompt ("Invalid selection, please select either Rock, Paper or Scissors only.");
}

function playRound (humanChoice, computerChoice) {
    
    if ((humanChoice === "Rock") && (computerChoice === "Paper")){
        return console.log("You Lose. Paper Beats Rock.");
    }
    else if ((humanChoice === "Paper") && (computerChoice === "Scissors")){
        return console.log("You Lose. Scissors Beats Paper.");
    }
    else if ((humanChoice === "Scissors") && (computerChoice === "Rock")){
        return console.log("You Lose. Rock Beats Scissors.");
    }
    else if ((humanChoice === "Paper") && (computerChoice === "Rock")){
        return console.log("You Win! Paper Beats Rock.");
    }
    else if ((humanChoice ==="Scissors") && (computerChoice === "Paper")) {
        return console.log("You Win! Scissors Beats Paper.");
    }
    else if ((humanChoice === "Rock") && (computerChoice === "Scissors")) {
        return console.log("You Win! Rock Beats Scissors.");
    }
    else return console.log("Draw.");
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


playRound(humanSelection, computerSelection);

console.log ("You threw " + humanSelection)
console.log ("The Computer threw " + computerSelection)

let humanScore = 0
let computerScore = 0


function scoreRound() {
    if (playRound === "You Lose. Paper Beats Rock.") {
        return computerScore = computerScore + 1;
    }
    else if (playRound === "You Lose. Scissors Beats Paper.") {
        return computerScore = computerScore + 1;
    }
    else if (playRound === "You Lose. Rocks Beats Scissors.") {
        return computerScore = computerScore + 1;
    }
    else if (playRound === "You Win! Paper Beats Rock.") {
        return humanScore = humanScore + 1;
    }
    else if (playRound === "You Win! Scissors Beats Paper.") {
        return humanScore = humanScore + 1;
    }
    else if (playRound === "You Win! Rock Beats Scissors.") {
        return humanScore = humanScore + 1;
    }
}







