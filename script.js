// Initialize scores
let p1score = 0;
let p2score = 0;
let draws = 0;

// Roll dice function
function rollDice() {
  const random1 = Math.floor(Math.random() * 6) + 1;
  const random2 = Math.floor(Math.random() * 6) + 1;

  // Update dice images
  document.getElementById("dice1").src = `assets/images/dice${random1}.png`;
  document.getElementById("dice2").src = `assets/images/dice${random2}.png`;

  // Display result
  const result = document.getElementById("result");
  if (random1 > random2) {
    result.textContent = "Player 1 Wins!";
    p1score++;
  } else if (random1 < random2) {
    result.textContent = "Player 2 Wins!";
    p2score++;
  } else {
    result.textContent = "It's a Draw!";
    draws++;
  }

  // Update scoreboard
  document.getElementById("p1score").textContent = p1score;
  document.getElementById("p2score").textContent = p2score;
  document.getElementById("draws").textContent = draws;
}



