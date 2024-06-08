//user begins program
//1 is assigned to rock, 2 is assigned to paper, 3 is assigned to scissors
//random number between and including 1 and 3 is generated
//corresponding string to random number is returned

function playGame(){
let gameNumber = 0;
    while (gameNumber < 5){

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

let didHumanWin = false;
let didComputerWin = false;

function playRound (humanChoice, computerChoice) {

    if ((humanChoice === "Rock") && (computerChoice === "Paper")){
        didComputerWin = true;
        return console.log("You Lose. Paper Beats Rock.");
    }
    else if ((humanChoice === "Paper") && (computerChoice === "Scissors")){
        didComputerWin = true;
        return console.log("You Lose. Scissors Beats Paper.");
    }
    else if ((humanChoice === "Scissors") && (computerChoice === "Rock")){
        didComputerWin = true;
        return console.log("You Lose. Rock Beats Scissors.");
    }
    else if ((humanChoice === "Paper") && (computerChoice === "Rock")){
        didHumanWin = true;
        return console.log("You Win! Paper Beats Rock.");
    }
    else if ((humanChoice ==="Scissors") && (computerChoice === "Paper")) {
        didHumanWin = true;
        return console.log("You Win! Scissors Beats Paper.");
    }
    else if ((humanChoice === "Rock") && (computerChoice === "Scissors")) {
        didHumanWin = true;
        return console.log("You Win! Rock Beats Scissors.");
    }
    else return console.log("Draw.");
}

function scoreRound (humanWin, computerWin){

    if (humanWin === true){
        ++humanScore;
    }
    else if (computerWin === true) {
        ++computerScore;
    }
    else {}
}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

console.log ("You threw " + humanSelection)
console.log ("The Computer threw " + computerSelection)

scoreRound (didHumanWin, didComputerWin);

console.log("Your Score = " + humanScore + " vs " + "The Computers Score = " + computerScore)
    
++gameNumber;
    }
}

function whoWon(){
    if (humanScore > computerScore){
        return console.log("You won the match!");
    }
    else if (humanScore < computerScore){
        return console.log("You lost the match.");
    }
    else return ("It's a tie.")
}

let humanScore = 0;
let computerScore = 0;

playGame();
whoWon ();





