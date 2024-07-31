const choices = ["Rock", "Paper", "Scissors"];

const Player = document.querySelector("#playerDisplay");
const Computer = document.querySelector("#computerDisplay");
const Result = document.querySelector("#Result");
const playerScoreDisplay = document.querySelector("#PlayerScore");
const ComputerScoreDisplay = document.querySelector("#ComputerScore");
let PScore = 0;
let CScore = 0;

function playGame(choice) {
  const ComputerChoice = choices[Math.floor(Math.random() * 3)];
  let result = "";

  if (choice === ComputerChoice) {
    result = "It's a Tie";
  } else {
    switch (choice) {
      case "Rock":
        result = ComputerChoice === "Scissors" ? "You Win!" : "You Lost!";
        break;
      case "Paper":
        result = ComputerChoice === "Rock" ? "You Win!" : "You Lost!";
        break;
      case "Scissors":
        result = ComputerChoice === "Paper" ? "You Win!" : "You Lost!";
        break;
    }
  }

  Result.classList.remove("green", "red");

  switch (result) {
    case "You Win!":
      PScore++;
      playerScoreDisplay.textContent = PScore;
      Result.classList.add("green");
      break;
    case "You Lost!":
      CScore++;
      ComputerScoreDisplay.textContent = CScore;
      Result.classList.add("red");
      break;
  }

  Player.textContent = `Player : ${choice}`;
  Computer.textContent = `Computer : ${ComputerChoice}`;
  Result.textContent = result;
}
