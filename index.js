

function whoIsWinner() {
  var randomNumber1 = Math.floor(Math.random()*6 + 1);
  var randomNumber2 = Math.floor(Math.random()*6 + 1);
  var winnerTitle = document.querySelector(".banner");
  var playerOneDice = document.querySelector(".img1");
  var playerTwoDice = document.querySelector(".img2");
  playerOneDice.src = "images/dice" + randomNumber1 + ".png";
  playerTwoDice.src = "images/dice" + randomNumber2 + ".png";
  if (randomNumber1 > randomNumber2) {
    winnerTitle.innerText = "Player 1 Wins!";
  } else if (randomNumber2 > randomNumber1) {
    winnerTitle.innerText = "Player 2 Wins!";
  }
  else {
    winnerTitle.innerText = "Draw!";
  }
}

whoIsWinner();
