// ================= DOM ELEMENT REFERENCES =================

// Gets the title text at the top of the page.
// This text changes to "You win!", "You lose!", or "It's a tie!"
const statusText = document.getElementById("statusText");

// Gets the result bar at the bottom.
// This text shows what the player picked.
const resultBar = document.getElementById("resultBar");


// ================= GAME DATA =================

// Array of all possible choices in the game.
// Used for both the player and the AI logic.
const choices = ["rock", "paper", "scissors"];


// ================= AI LOGIC =================

// Randomly selects one of the choices for the AI.
// Math.random() generates a number between 0 and 1.
// Math.floor(...) converts it into 0, 1, or 2.
function getAiChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}


// ================= RESULT CALCULATION =================

// Determines the outcome of the round.
// Parameters:
// - player: the player's choice ("rock", "paper", or "scissors")
// - ai: the AI's choice
//
// Returns a string that describes the outcome.
function getResult(player, ai) {

  // If both choices are the same, it's a tie
  if (player === ai) return "It's a tie!";

  // All winning conditions for the player
  if (
    (player === "rock" && ai === "scissors") ||
    (player === "paper" && ai === "rock") ||
    (player === "scissors" && ai === "paper")
  ) {
    return "You win!";
  }

  // If none of the above conditions are true, the player loses
  return "You lose!";
}


// ================= MAIN GAME FUNCTION =================

// Runs one round of the game.
// Called whenever the player clicks one of the buttons.
function play(playerChoice) {

  // Generate a random choice for the AI
  const aiChoice = getAiChoice();

  // Update the result bar to show what the player picked
  // Example: "You picked rock"
  resultBar.textContent = `You picked ${playerChoice}`;

  // Update the main title to show who won the round
  statusText.textContent = getResult(playerChoice, aiChoice);
}


// ================= EVENT LISTENERS =================

// When the rock button is clicked, play a round with "rock"
document
  .getElementById("rock")
  .addEventListener("click", () => play("rock"));

// When the paper button is clicked, play a round with "paper"
document
  .getElementById("paper")
  .addEventListener("click", () => play("paper"));

// When the scissors button is clicked, play a round with "scissors"
document
  .getElementById("scissors")
  .addEventListener("click", () => play("scissors"));
