// outputs number of oranges required

var orangeJuiceMain = function (input) {
  // input number of expected guests
  var numberOfGuests = input;
  //function multiplies input of guests with 8 to get number of oranges required
  // calculate number of oranges needed by each guest = 4*2 (8)
  var numberOfOrangesForEachGuest = numberOfGuests * 8;

  var myOutputValue = `with ${numberOfGuests} they will need ${numberOfOrangesForEachGuest} `;
  return myOutputValue;
};

// input number of expected guests and glasses per guest
var orangeJuiceMain = function (numberOfGuests, numberOfGlassesPerGuest) {
  // calculate number of oranges for X number of guests if each guest can drink Y number of glasses knowing that each glass will need 4 oranges
  var totalNumberOfOrangesNeeded = numberOfGuests * numberOfGlassesPerGuest * 4;

  var myOutputValue = `with ${numberOfGuests} number of guests, they will need ${totalNumberOfOrangesNeeded} oranges. `;
  return myOutputValue;
};

var paintMain = function (input) {
  //user input $/L of paint and app will calculate total cost for painting entire house(fixed variable)

  //total area for 6 rooms when each room is 3*3m2
  var totalAreaHm = 3 * 3 * 6;

  var totalAreaPerLitre = 300;

  var totalSurfaceArea2Coats = totalAreaHm * 2;

  var totalCostOfPaint = totalAreaPerLitre * totalSurfaceArea2Coats * input;

  var myOutputValue = `If it costs $${input} per Liter of paint, it will cost $${totalCostOfPaint} in total to paint the house in 2 coats `;
  return myOutputValue;
};

var paintMain = function (numberOfRm, numberOfPaintCoats) {
  var areaPerRm = 3 * 3;

  var totalAreaCoatsPerRm = areaPerRm * numberOfPaintCoats;

  var areaCoveredPerLitre = 300;

  var totalCostOfPaintPerRm = totalAreaCoatsPerRm / areaCoveredPerLitre;

  var totalCostOfPaint = totalCostOfPaintPerRm * numberOfRm * 5;

  var myOutputValue = `If it costs $5 per Liter of paint, it will cost $${totalCostOfPaint} in total to paint ${numberOfRm}rooms in ${numberOfPaintCoats} coats `;
  return myOutputValue;
};

var rollDice = function () {
  var randomDecimal = Math.random() * 6;
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger + 1;

  return diceNumber;
};

var randomDiceMain = function (input) {
  var randomDiceNumber = rollDice();
  var myOutputValue = `you have rolled ${input} and the winning number is ${randomDiceNumber}!`;

  return myOutputValue;
};

var rollDice = function () {
  // Generate a decimal from 0 through 6, inclusive of 0 and exclusive of 6.
  var randomDecimal = Math.random() * 6;

  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 5 inclusive.
  var randomInteger = Math.floor(randomDecimal);

  // Add 1 to get valid dice rolls of 1 through 6 inclusive.
  var diceNumber = randomInteger + 1;

  return diceNumber;
};

var randomDiceMain = function (input) {
  var aiDiceNumber = rollDice();
  var message = `your guess was ${input}, the winning number was ${aiDiceNumber}. I'm sorry you lose.`;

  if (input == aiDiceNumber) {
    message =
      " your roll was " +
      input +
      " and the winning number was " +
      aiDiceNumber +
      " you win!";
  }
  return message;
};

var secretPhraseMain = function (input) {
  var message = `you shall not pass!`;
  if (input == "White Wizard") {
    message = `A wizard is never late, nor is he early, he arrives precisely when he means to.`;
  } else if (input == "Grey Wizard") {
    message += ` You look familar..... but not exactly.`;
  } else {
    message += ` be gone!`;
  }

  return message;
};

var diceGameMain = function (input) {
  // Attempt the Dice Game exercise from the If, Else, Else If module below with diceGameMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var twiceGuessMain = function (input) {
  // Attempt the Twice the Guess exercise from the If, Else, Else If module below with twiceGuessMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
