// Card draw + push array function
// Input validation function (for ! inputs)
// Ace validation function
// Hit or stand function
// Points validation function
// Message output function

//=====Global Variables=====
var playerCardAr = [];
var computerCardAr = [];
var shuffledDeck = "";

var outputMsg = "";

var winImg =
  '<img src= "https://media.giphy.com/media/Y3qaJQjDcbJPyK7kGk/giphy.gif"/ class= "center"  height="200" width="320"  >';
var loseImg =
  '<img src= "https://media.giphy.com/media/gJoBlYkfWu3Py81V23/giphy.gif"/ class= "center" height="280" width="320"  >';

var tryAgainImg =
  '<img src= "https://c.tenor.com/Gqy4WGxrMv0AAAAC/try-again.gif"/ class= "center" height="240" width="320"  >';

var gameMode = "Game Start";
// gameMode = "Check Black Jack"
// gameMode = " Hit or Stand"
// gameMode = "Game Restart"

var makeDeck = function () {
  // create the empty deck at the beginning
  var shuffledDeck = [];

  var suits = ["♥️", "♦️", "♣️", "♠️"];
  var suitIndex = 0;
  while (suitIndex < suits.length) {
    // make a variable of the current suit
    var currentSuit = suits[suitIndex];

    // loop to create all cards in this suit
    // rank 1-13
    var counter = 1;
    while (counter <= 13) {
      var rankCounter = counter;
      var cardName = rankCounter;

      if (cardName === 1) {
        cardName = "ACE";
      } else if (cardName === 11) {
        rankCounter = 10;
        cardName = "JACK";
      } else if (cardName === 12) {
        rankCounter = 10;
        cardName = "QUEEN";
      } else if (cardName === 13) {
        rankCounter = 10;
        cardName = "KING";
      }
      // make a single card object variable
      var card = {
        name: cardName,
        suit: currentSuit,
        rank: rankCounter
      };
      // add the card to the deck
      shuffledDeck.push(card);

      counter = counter + 1;
    }
    suitIndex = suitIndex + 1;
  }
  console.log(shuffledDeck);

  return shuffledDeck;
};

// randomise the deck function
var getRandomIndex = function (size) {
  return Math.floor(Math.random() * size);
};

var shuffleCards = function (cards) {
  var index = 0;

  while (index < cards.length) {
    var randomIndex = getRandomIndex(cards.length);
    var currentItem = cards[index];
    var randomItem = cards[randomIndex];
    cards[index] = randomItem;
    cards[randomIndex] = currentItem;
    index = index + 1;
  }

  return cards;
};
//
//
//
//
//=====Game Functions=====
//Sums up the total points on Hand + check for Aces
var sumHandCards = function (playerCards) {
  var sumOfCards = 0;
  var numOfAce = 0;

  var counter = 0;
  // calculate Sum assuming all Aces are value 1 and counts how many aces there are in the hand
  while (counter < playerCards.length) {
    // ace counter
    if (playerCards[counter].rank === 1) {
      numOfAce += 1;
    }
    // sum of card rank
    sumOfCards = sumOfCards + playerCards[counter].rank;
    counter += 1;
  }

  // adjust sum if there is at least one ace
  if (numOfAce > 0) {
    // higher sum assuming 1 ace has value 11
    var higherAceSum = sumOfCards + 10;
    numOfAce -= 1;
    if (higherAceSum < 22) {
      sumOfCards = higherAceSum;
    }
  }
  return sumOfCards;
};

//Full Displays the total Cards on Hand and return message
var fulldisplayHandCards = function (playerCardAr, computerCardAr) {
  var playerMsg = `The Player's Cards: <br>`;
  var comMsg = `The Dealer's Cards: <br>`;
  var currentPlayerSum = sumHandCards(playerCardAr);
  var currentComSum = sumHandCards(computerCardAr);

  // Player's full cards message
  var index = 0;
  while (index < playerCardAr.length) {
    playerMsg =
      playerMsg +
      `${playerCardAr[index].name} of ${playerCardAr[index].suit}<br>`;
    index += 1;
  }

  // Dealer's full cards Message
  index = 0;
  while (index < computerCardAr.length) {
    comMsg =
      comMsg +
      `${computerCardAr[index].name} of ${computerCardAr[index].suit}<br>`;
    index += 1;
  }
  console.log(`${playerMsg} <br> ${comMsg}`);
  return `${playerMsg}Player's Points:${currentPlayerSum} <br><br> ${comMsg}Dealer's Points:${currentComSum}`;
};

//Half Display of total Cards on Hand and return message
var partDisplayHandCards = function (playerCardAr, computerCardAr) {
  var playerMsg = `The Player's Cards: <br>`;
  var comPartMsg = `The Dealer's Cards: <br>`;
  var currentPlayerSum = sumHandCards(playerCardAr);

  // Player's full cards message
  var index = 0;
  while (index < playerCardAr.length) {
    playerMsg =
      playerMsg +
      `${playerCardAr[index].name} of ${playerCardAr[index].suit}<br>`;
    index += 1;
  }

  // Dealer's concealed cards Message
  comPartMsg =
    comPartMsg +
    `${computerCardAr[0].name} of ${computerCardAr[0].suit}<br>[censored]<br>`;

  console.log(`${playerMsg} <br> ${comPartMsg}`);
  return `${playerMsg} Player's Points:${currentPlayerSum}<br>
    ${gameHints(playerCardAr)} <br><br> ${comPartMsg}<br>`;
};

//Check for BJ
var checkBlackJack = function (inputArray) {
  var gotBlackJack = Boolean;
  var handCard1 = [0];
  var handCard2 = [1];

  if (
    (handCard1.name === "ACE" && handCard2.rank === 10) ||
    (handCard2.name === "ACE" && handCard1.rank === 10)
  ) {
    gotBlackJack = true;
  } else {
    gotBlackJack = false;
  }
  return gotBlackJack;
};

// Function that clears the Arrays to reset the Game
var resetGame = function () {
  shuffledDeck = [];
  playerCardAr = [];
  computerCardAr = [];
};

// Points Hinting Function For Player
var gameHints = function (playerCardAr) {
  var playerHandSum = sumHandCards(playerCardAr);

  if (playerHandSum < 17) {
    outputMsg = `<small> Pssst.....it's less than 17 points! Please [Hit] to draw a new card!</small> `;
    return outputMsg;
  } else if (playerHandSum > 16 && playerHandSum < 19) {
    outputMsg = `<small> Hmm....🤔 </small> `;
    return outputMsg;
  } else if (playerHandSum > 18 && playerHandSum <= 20) {
    outputMsg = `<small>Ooooo... that's getting a little close to 21 points, are you gonna take a chance? 😏</small>`;
    return outputMsg;
  } else if (playerHandSum === 21) {
    outputMsg = `<small>21 Points! Looking Good! 😎 Now let's see what the Dealer's got!!</small>`;
    return outputMsg;
  } else if (playerHandSum > 21) {
    outputMsg = `<small>OH NO! You've Busted! 🥴 Let's see what the Dealer's got!</small>`;
    return outputMsg;
  }
};
//
//
//
//
//=====Main Game Function=====
var main = function (playerinput) {
  if (gameMode === "Game Start") {
    console.log(`Current Game Mode:` + gameMode);

    //Creating Shuffled Deck
    shuffledDeck = shuffleCards(makeDeck());

    // Draw 2 cards for player and com and push into individual player arrays
    playerCardAr.push(shuffledDeck.pop());
    playerCardAr.push(shuffledDeck.pop());

    computerCardAr.push(shuffledDeck.pop());
    computerCardAr.push(shuffledDeck.pop());

    console.log(`Player's cards:`);
    console.log(playerCardAr);
    console.log(`Computer's cards:`);
    console.log(computerCardAr);

    outputMsg = `The cards have been drawn.... *Drum Rolls*...<br> Click [Submit] to reveal the cards.....`;
    gameMode = "Check Black Jack";

    return outputMsg;
  }

  //Checking for Black Jack
  if (gameMode === "Check Black Jack") {
    console.log(`Current Game Mode:` + gameMode);
    var playerBJ = checkBlackJack(playerCardAr);
    var comBJ = checkBlackJack(computerCardAr);
    console.log(`Check com BJ: ${playerBJ}`);
    console.log(`Check com BJ: ${comBJ}`);

    if (playerBJ === true && comBJ === true) {
      gameMode = "Game Start";
      outputMsg =
        fulldisplayHandCards(playerCardAr, computerCardAr) +
        `<br><br> It's a Black Jack tie!🤝<br><br>Please click [Submit] for a new game!<br> ${tryAgainImg}`;
      resetGame();
      return outputMsg;
    } else if (playerBJ === true && comBJ === false) {
      gameMode = "Game Start";
      outputMsg =
        fulldisplayHandCards(playerCardAr, computerCardAr) +
        `<br><br> Player Wins with Black Jack🏆<br><br>Please click [Submit] for a new game!<br>${winImg}`;
      resetGame();
      return outputMsg;
    } else if (playerBJ === false && comBJ === true) {
      gameMode = "Game Start";
      outputMsg =
        fulldisplayHandCards(playerCardAr, computerCardAr) +
        `<br><br> I'm sorry the Dealer wins with Black Jack!🙃<br><br>Please click [Submit] for a new game!<br> ${loseImg}`;
      resetGame();
      return outputMsg;
    } else if (playerBJ === false && comBJ === false) {
      gameMode = "Hit or Stand";
      outputMsg =
        partDisplayHandCards(playerCardAr, computerCardAr) +
        `There's there's no Black Jack! <br> Let's move on to [Hit] or [Stand]!`;
      return outputMsg;
    }
  }

  //If there's no Black Jack, it goes to Hit or Stand
  if (gameMode === "Hit or Stand") {
    var playerHandSum = sumHandCards(playerCardAr);
    var comHandSum = sumHandCards(computerCardAr);

    if (playerinput === "Hit" || playerinput === "hit") {
      if (playerHandSum === 21) {
        outputMsg =
          partDisplayHandCards(playerCardAr, computerCardAr) +
          `Please input 'Stand' to see the results.`;
        return outputMsg;
      } else if (playerHandSum < 21) {
        console.log(shuffledDeck);
        playerCardAr.push(shuffledDeck.pop());
        playerHandSum = sumHandCards(playerCardAr);
        outputMsg =
          partDisplayHandCards(playerCardAr, computerCardAr) +
          `Would you like to [Hit] or [Stand]?`;
        return outputMsg;
      }
    }

    if (playerinput === "Stand" || playerinput === "stand") {
      playerHandSum = sumHandCards(playerCardAr);
      comHandSum = sumHandCards(computerCardAr);

      while (comHandSum < 17) {
        computerCardAr.push(shuffledDeck.pop());
        comHandSum = sumHandCards(computerCardAr);
      }

      if (
        (playerHandSum <= 21 && playerHandSum > comHandSum) ||
        (playerHandSum <= 21 && comHandSum > 21)
      ) {
        outputMsg =
          fulldisplayHandCards(playerCardAr, computerCardAr) +
          `<br><br>Player Wins🏆<br><br>Please click [Submit] for a new game!<br>${winImg}`;
        gameMode = "Game Start";
        resetGame();
        return outputMsg;
      } else if (
        (comHandSum <= 21 && comHandSum > playerHandSum) ||
        (comHandSum <= 21 && playerHandSum > 21)
      ) {
        outputMsg =
          fulldisplayHandCards(playerCardAr, computerCardAr) +
          `<br><br> I'm sorry the Dealer wins!🙃<br><br>Please click [Submit] for a new game!<br>${loseImg}`;
        gameMode = "Game Start";
        resetGame();
        return outputMsg;
      } else if (comHandSum === playerHandSum) {
        outputMsg =
          fulldisplayHandCards(playerCardAr, computerCardAr) +
          `<br><br> It's a tie!🤝<br><br>Please click [Submit] for a new game!<br> ${tryAgainImg}`;
        gameMode = "Game Start";
        resetGame();
        return outputMsg;
      }
    } else if (
      playerinput === "" ||
      playerinput !== "Hit" ||
      playerinput !== "hit" ||
      playerinput !== "Stand" ||
      playerinput !== "stand"
    ) {
      outputMsg =
        partDisplayHandCards(playerCardAr, computerCardAr) +
        `Hi, an input was missing, please input [Hit] or [Stand].`;
      return outputMsg;
    }
  }
};
