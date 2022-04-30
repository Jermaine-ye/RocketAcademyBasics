//==BASE GAME RULES==
// Game prompts input to start game mode.
// Player 1 clicks submit, rolls 2 dice (Ai generates 2 random dice number)
// Player 1 selects sequence of dice to create dice combination (input [1] or [2] to choose which dice as the first die)
// Player 2 clicks submit and rolls 2 dice (Ai generates 2 random dice number)
// Player 2 inputs [1] or [2] to choose dice combination
// Ai compares both player's combinations, the player with the higher combination wins and declares a winner.
// Game resets and starts new round without refreshing the browser page.

//==POSSIBLE OUTCOMES==
//Player 1 Wins
//Player 2 Wins
//Both Players Draw

//Global Variables

var playerARoll = "";
var playerBRoll = "";

var playerADice1 = "";
var playerADice2 = "";

var playerBDice1 = "";
var playerBDice2 = "";

var playerACombie1 = "";
var playerACombie2 = "";

var playerBCombie1 = "";
var playerBCombie2 = "";

var playerAscores = [];
var playerBscores = [];

var gameMode = "Player A Roll";
// other modes 'Player A Input'
// 'Player B Roll'
// 'Player B Input'
// 'winner result'
// 'Game Restart'

//Dice Roll Generation
var rollDice = function () {
  console.log(`initiate dice roll`);

  var randomDecimal = Math.random() * 6;
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger + 1;

  console.log(`rollDice output`);
  return diceNumber;
};

var playerARoll = function () {
  playerADice1 = rollDice();
  playerADice2 = rollDice();
  gameMode = "Player A Input";
  console.log(`Player A rolled: ${playerADice1} and ${playerADice2}.`);
  return `Player A, your dice rolls are ${playerADice1} and ${playerADice2}.<br> Please input '1' or '2' to select your combination for which dice to go first.`;
};

var playerBRoll = function () {
  playerBDice1 = rollDice();
  playerBDice2 = rollDice();
  gameMode = "Player B Input";
  console.log(`Player B rolled: ${playerBDice1} and ${playerBDice2}.`);
  return `Player B, your dice rolls are ${playerBDice1} and ${playerBDice2}.<br> Please input '1' or '2' to select your combination for which dice to go first.`;
};

var playerACombie1 = function (input) {
  if (input === "1") {
    playerACombie1 = Number(String(playerADice1) + String(playerADice2));
    console.log(`${playerACombie1}`);
    playerACombie2 = 0;
    gameMode = "Player B Roll";
    return `Player A your dice combination is ${playerACombie1}. It's now Player B's turn to roll.`;
  }
};

var playerACombie2 = function (input) {
  if (input === "2") {
    playerACombie2 = Number(String(playerADice2) + String(playerADice1));
    playerACombie1 = 0;
    console.log(`${playerACombie2}`);
    gameMode = "Player B Roll";
    return `Player A your dice combination is ${playerACombie2}. It's now Player B's turn to roll.`;
  }
};

var playerBCombie1 = function (input) {
  if (input === "1") {
    playerBCombie1 = Number(String(playerBDice1) + String(playerBDice2));
    playerBCombie2 = 0;
    console.log(`${playerBCombie1}`);
    gameMode = "winner result";
    return `Player B your dice combination is ${playerBCombie1}.`;
  }
};

var playerBCombie2 = function (input) {
  if (input === "2") {
    playerBCombie2 = Number(String(playerBDice2) + String(playerBDice1));
    playerBCombie1 = 0;
    console.log(`${playerBCombie2}`);
    gameMode = "winner result";
    return `Player B your dice combination is ${playerBCombie2}.`;
  }
};

var resetGame = function () {
  gameMode = "Player A Roll";
  return playerARoll();
};

var winningPlayer = function () {
  gameMode = "winner result";
  console.log(gameMode);
  var playerAResults = playerACombie1 + playerACombie2;
  var playerBResults = playerBCombie1 + playerBCombie2;
  if (playerAResults > playerBResults) {
    gameMode = "Game Restart";
    console.log(gameMode);
    return `Congratulations Player A, your combination was ${playerAResults} you won!<br>Click on [Submit] to play again!`;
  } else if (playerBResults > playerAResults) {
    gameMode = "Game Restart";
    console.log(gameMode);
    return `Congratulations Player B, your combination was ${playerBResults} you won!<br>Click on [Submit] to play again!`;
  } else if (playerAResults === playerBResults) {
    gameMode = "Game Restart";
    console.log(gameMode);
    return `It's a tie! ${playerAResults} and ${playerBResults} was the same!<br> Please try again! <br>Click on [Submit] to play again!`;
  }
};

var main = function (input) {
  if (
    (gameMode === "Player A Input" && input === ``) ||
    (gameMode === "Player B Input" && input === ``)
  ) {
    return `Hi please input '1' or '2' to select dice combination.`;
  } else if (gameMode === "Player A Roll") {
    return playerARoll();
  } else if (gameMode === "Player A Input" && input === "1") {
    return playerACombie1(input);
  } else if (gameMode === "Player A Input" && input === "2") {
    return playerACombie2(input);
  } else if (gameMode === "Player B Roll") {
    return playerBRoll();
  } else if (gameMode === "Player B Input" && input === "1") {
    return playerBCombie1(input);
  } else if (gameMode === "Player B Input" && input === "2") {
    return playerBCombie2(input);
  } else if (gameMode === "winner result") {
    return winningPlayer();
  } else if (gameMode === "Game Restart") {
    return resetGame();
  }
};
