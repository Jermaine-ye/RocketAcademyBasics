var emojiNumberCharactersMain = function (input) {
  var rowCounter = 0;
  myOutputValue = "";

  while (rowCounter < input) {
    myOutputValue = myOutputValue + "⭕";
    rowCounter += 1;
  }
  return myOutputValue;
};
//
//
//
var emojiSquareMain = function (input) {
  var rowCounter = 0;
  myOutputValue = "";

  while (rowCounter < input) {
    var columnCounter = 0;
    while (columnCounter < input) {
      myOutputValue = myOutputValue + "⭕";
      columnCounter += 1;
    }
    myOutputValue = myOutputValue + "<br>";
    rowCounter += 1;
  }

  return myOutputValue;
};
//
//
//
var emojiTriangleMain = function (input) {
  var myOutputValue = "";

  for (var rowCounter = 0; rowCounter < input; rowCounter += 1) {
    for (var columnCounter = 0; columnCounter < input; columnCounter += 1) {
      myOutputValue = myOutputValue + "⭕";
    }
    myOutputValue = myOutputValue + "<br>";
    console.log("<br>");
  }
  return myOutputValue;
};

//
//
//

function emojiOutlineSquareMain(input) {
  // Complete the More Comfortable: Emoji Drawing Outline Square exercise below with emojiOutlineSquareMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
}

var emojiCenterSquareMain = function (input) {
  // Complete the More Comfortable: Emoji Drawing Center Square exercise below with emojiCenterSquareMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var multiDiceBaseMain = function (input) {
  // Complete the Base: Multi-Dice Game exercise below with multiDiceBaseMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var multiDiceMultiRoundMain = function (input) {
  // Complete the More Comfortable: Multi-Round Multi-Dice Game exercise below with multiDiceMultiRoundMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var multiDiceTwoPlayerMain = function (input) {
  // Complete the More Comfortable: Two Player Multi-Round Multi-Dice Game exercise below with multiDiceTwoPlayerMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var multiDiceMultiPlayerMain = function (input) {
  // Complete the More Comfortable: Multi-Player Multi-Round Multi-Dice Game exercise below with multiDiceMultiPlayerMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
