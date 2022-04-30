// Create a global variable to store all adjectives
// Anytime the input is an adjective, push it to the array
// If 'create' is inputted, output a randomise word in the array

var globalArray = [];

var getRandomIndex = function (arrayLength) {
  var randomIndex = Math.floor(Math.random() * arrayLength);
  console.log(randomIndex);
  var randomOutput = globalArray[randomIndex];
  return randomOutput;
};

var madLibsAdjectivesMain = function (input) {
  // Complete the Base: Mad Libs Adjectives exercise below with madLibsAdjectivesMain as the main function.
  if (isNaN(input)) {
    if (input == "create") {
      var randomNumber = getRandomIndex();
      var output = globalArray[randomNumber];
      return output;
    } else {
      globalArray.push(input);
    }
  } else {
    return `Not a number. Please input an adjective.`;
  }
};

var madLibsInputCreateMain = function (input) {
  // Complete the Comf'rtable: Inp't and Create Mode exercise below with madLibsInputCreateMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var madLibsMultipleWordsMain = function (input) {
  // Complete the Comf'rtable: Inp't Multiple Words exercise below with madLibsMultipleWordsMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var madLibsMultipleTypesMain = function (input) {
  // Complete the More'Comfortable' Mad Libs Multiple Word Types exercise below with madLibsMultipleTypesMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var madLibsPopularMain = function (input) {
  // Complete the More'Comfortable' Popular Mad Libs exercise below with madLibsPopularMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var madLibsSetsMain = function (input) {
  // Complete the More'Comfortable' Sets of Mad Libs exercise below with madLibsSetsMain as the main function.
  var myOutputValue = "hello world";
};
