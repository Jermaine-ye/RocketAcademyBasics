// User input changes mode to game play mode
// user inputs user guess
// Run the randomiser and output the computer's option
// Check a draw condition
// Check the computer's option against user
// converts output into icons
// Track Player's Wins
// Track Computer's Wins
// Compare Win-Loss of player and computer

// To generate Ai output, we assign a number to a word and use a random number generator to generate output.

//Tracking wins and losses
var playerWins = 0;
var aiWins = 0;
var gameCount = 0;

//Game related variables
var gameMode = `waiting for user name`;
var userName = "";
var myOutputValue = "";

// First check there is a user name input, if not output a prompt message:
//function to process username input
var inputUserName = function (input) {
  if (input !== "") {
    userName = input;
    gameMode = `waiting for gameMode`;
    return `Hi ${input}, please input 'Scissors', 'Paper' or 'Rock' to start game!`;
  } else {
    return `Hey there! whats your name? Please input your name to start.`;
  }
};

var aiOutput = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var aiRoll = randomInteger + 1;

  myOutputValue = "";

  if (aiRoll === 1) {
    myOutputValue = "Rock";
  } else if (aiRoll === 2) {
    myOutputValue = "Paper";
  } else {
    myOutputValue = "Scissors";
  }
  return myOutputValue;
};

var emojiOutput = function (input) {
  if (input === "Rock") {
    return "🗿";
  }
  if (input === "Paper") {
    return "🧻";
  }
  if (input === "Scissors") {
    return "✂️";
  }
};

// game play logic
// First to pick out invalid options and prompt correct ones and to run game.
var playGame = function (input) {
  if (input !== "Rock" && input !== "Paper" && input !== "Scissors") {
    return `Sorry, input is invalid. Only 'Rock', 'Paper' and 'Scissors' are valid options.`;
  }

  gameCount += 1;

  var userResult = input;
  var aiResult = aiOutput();

  var aiEmoji = emojiOutput(aiResult);
  var playerEmoji = emojiOutput(userResult);

  var userWinRatePercentage = Math.round((playerWins / gameCount) * 100);
  var aiWinRatePercentage = Math.round((aiWins / gameCount) * 100);

  var myOutputValue = `You played ${playerEmoji}, <br> The Ai played ${aiEmoji}.`;

  if (aiResult === userResult) {
    myOutputValue += ` <br> Your current win rate is ${playerWins}. The AI's win rate is ${aiWins} <br> It's a Draw! Please try again.`;
  } else if (
    (aiResult === "Rock" && userResult === "Scissors") ||
    (aiResult === "Paper" && userResult === "Rock") ||
    (aiResult === "Scissors" && userResult === "Paper")
  ) {
    aiWins += 1;
    myOutputValue += `<br> Your current win rate is ${playerWins}. The AI's win rate is ${aiWins} <br>  I'm sorry, you lose!`;
  } else if (
    (aiResult === "Rock" && userResult === "Paper") ||
    (aiResult === "Paper" && userResult === "Scissors") ||
    (aiResult === "Scissors" && userResult === "Rock")
  ) {
    playerWins += 1;
    myOutputValue += ` <br> Congrats! You Win! <br> You have won ${playerWins} times! The AI has won ${aiWins} times!`;
  }
  myOutputValue += ` You have won ${playerWins}/${gameCount} (you are winning ${userWinRatePercentage}%) rounds and the AI has won ${aiWins}/${gameCount} (Ai is winning ${aiWinRatePercentage}%) rounds.`;

  return myOutputValue;
};

//main function to accept name input and trigger game mode
var main = function (input) {
  console.log(`player input is ${input}`);

  if (gameMode === `waiting for user name`) {
    return inputUserName(input);
  } else {
    return playGame(input);
  }
};
