// Initial Player 1 and Player 2 health.
let p1health = 100;
let p2health = 100;

// For keeping track of winning count of Player 1 and Player 2.
let p1win = 0;
let p2win = 0;

// This fuction will show the hidden div.
function startGame() {
  document.getElementById("startGame").classList.remove("hide-component");
  document.getElementById("finalResult").innerHTML = "";
}

function player1Turn() {
  let randomNum = randomNumGenerate(5);
  // Sustracting player 2 health with random number.
  p2health = p2health - randomNum;
  // Showing current health of player 2.
  document.getElementById("p2health").innerHTML = p2health;

  // If player 2 helath is less than zero then player 1 will win that round.
  if (p2health <= 0) {
    p1win = p1win + 1;
    document.getElementById("p1win").innerHTML = p1win;

    refillingHealth();

    // If player 1 will win three rounds then show the winning msg
    if (p1win === 3) {
      finalResult(1);
    }
  }
}

function player2Turn() {
  let randomNum = randomNumGenerate(5);
  // Sustracting player 1 health with random number.
  p1health = p1health - randomNum;
  // Showing current health of player 1.
  document.getElementById("p1health").innerHTML = p1health;

  // If player 1 helath is less than zero then player 2 will win that round.
  if (p1health <= 0) {
    p2win = p2win + 1;
    document.getElementById("p2win").innerHTML = p2win;

    refillingHealth();

    // If player 2 will win three rounds then show the winning msg
    if (p2win === 3) {
      finalResult(2);
    }
  }
}

// This function will generate random number
function randomNumGenerate(num) {
  return Math.floor(Math.random() * num);
}

// Reintialising health of both the player.
function refillingHealth() {
  p1health = 100;
  p2health = 100;
  document.getElementById("p1health").innerHTML = p1health;
  document.getElementById("p2health").innerHTML = p2health;
}

// Showing the final result which player is winner
function finalResult(playerNum) {
  // Reintialsing the Win count of both the player
  p1win = 0;
  p2win = 0;
  document.getElementById("p1win").innerHTML = p1win;
  document.getElementById("p2win").innerHTML = p2win;

  document.getElementById(
    "finalResult"
  ).innerHTML = `Player ${playerNum} Won The Game!`;
  document.getElementById("startGame").classList.add("hide-component");
}
