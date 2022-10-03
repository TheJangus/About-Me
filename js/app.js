'use strict'

console.log('hey world!');

let visitorName = prompt('Who goes there?!');
    alert(`Welcome to my site ${visitorName}! Please respond "Yes" or "No" to the following questions`);
//let questionOneGuess = prompt(What is my favorite color?);


let playGame = confirm('Would you like to play a game?');
    if (playGame) {
       // alert('Good answer!');
        let playerChoice = prompt("Choose your weapon - Rock, Paper, or Scissors");
        if (playerChoice) {
            let playerOne = playerChoice.trim().toLocaleLowerCase();
           if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors"){
            let computerChoice = Math.floor(Math.random() * 3 + 1);
            let computer = computerChoice === 1 ? "rock"
            : computerChoice === 2 ? "paper" 
            : "scissors";
            let result =
            playerOne === computer ? "It's a TIE!"
            : playerOne === "rock" && computer === "paper" ? `${visitorName}: ${playerOne}\nComputer: ${computer}\nComputer wins!`
            : playerOne === "paper" && computer === "scissors" ? `${visitorName}: ${playerOne}\nComputer: ${computer}\nComputer wins!`
            : playerOne === "scissors" && computer === "rock" ? `${visitorName}: ${playerOne}\nComputer: ${computer}\nComputer wins!`
            : `${visitorName}: ${playerOne}\nComputer: ${computer}\n${visitorName} wins!`;
            alert(result);
            let playAgain = confirm("Play Again?");
            playAgain ? location.reload() : alert(`Thanks for playing ${visitorName}`);
           } else {
            alert("You cannot bring that weapon here, try again");
           }
        } else {
            alert("oh...well, maybe next time");
        }
         } else{
         alert('Better try again');
    }



//  if(questionOneGuess === 'n' || questionOneGuess === 'no'){
