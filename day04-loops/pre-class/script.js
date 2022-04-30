// var followAlongMain = function (input) {
//   // Attempt the Follow Along exercise from the Loops module below with followAlongMain as the main function.
//   var myOutputValue = 'hello world';
//   return myOutputValue;
// };
var rollDice = function () {
  //produces a decimal between 0 and 6
  var randomDecimal = Math.random() * 6;

  //take off the decimal
  var randomInteger = Math.floor(randomDecimal);

  //it's a number from 0-5 ... add 1
  var diceNumber = randomInteger + 1;

  return diceNumber;
};

var followAlongMain = function (input) {
  var myOutputValue = "";
  var counter = 0;
  while (counter < input) {
    // Roll dice inside the loop, generating a random dice roll each iteration
    var diceRoll = rollDice();
    // Add each dice roll to output
    myOutputValue = myOutputValue + " " + diceRoll + " ";
    // Increment counter at end of each iteration
    counter = counter + 1;
  }
  return myOutputValue;
};
//
//
//
var simpleLoopMain = function (input) {
  var myOutputValue = "";
  var rowCounter = 0;

  while (rowCounter < input) {
    var columnCounter = 0;
    while (columnCounter < input) {
      myOutputValue = myOutputValue + "hello";
      columnCounter = columnCounter + 1;
    }
    myOutputValue = myOutputValue + "<br>";
    rowCounter = rowCounter + 1;
  }
  return myOutputValue;
};
//
//
//
var loopWithinLoopMain = function (input) {
  var myOutputValue = "";
  var rowCounter = 0;

  while (rowCounter < input) {
    var columnCounter = 0;
    while (columnCounter < input) {
      myOutputValue = myOutputValue + "hello";
      columnCounter = columnCounter + 1;
    }
    myOutputValue = myOutputValue + "<br>";
    rowCounter = rowCounter + 1;
  }
  return myOutputValue;
};

var infiniteLoopMain = function (input) {
  // Attempt the Infinite Loop exercise from the Loops module below with infiniteLoopMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

// Initialise counter
var counter = 0;

// Declare loop condition
while (counter < 10) {
  console.log("hello");

  // Increment counter
  counter += 1;
  //(same as counter = counter + 1);
}
