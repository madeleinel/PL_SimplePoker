//////// Create the card deck ////////
// Create a deck object which shuffles and returns an array of 52 cards (ie the full deck)
var deck = function () {
  this.ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]; // Specify the possible card ranks
  this.suits = ["Spades", "Diamonds", "Clubs", "Hearts"]; // Specify the possible card suits
  var cards = []; // Create an empty array for the deck

  var s,
      n,
      totalRanks = this.ranks.length, // Calculate the number of suits and names to loop through outside of the for loop
      totalSuits = this.suits.length; // (to avoid having to calculate it each time it runs through the loop)

  // Loop through the suits and names options, to create one card of each variation and add it to the cards array
  for (s = 0; s < totalSuits; s++) {
    for (n = 0; n < totalRanks; n++) {
      // Push each card to the "cards" array
      // Assign the suit and name of each card, and increase the value by 1 for each card (starts again from 1 when start looping through a new suit)
      // (due to zero indexing; have to use n+1 to get the right value, as it will otherwise start at 0)
      cards.push(new card(this.suits[s], this.ranks[n], n+1));
    }
  }
  return cards; // Make the cards array available outside of the deck() function
}

// Create a card object which accepts the name, suit and value of each card
function card(suit, rank, value) { // Note that the arguments of this function need to be input in the same order as
                                   // the values in the cards.push() method (to ensure that the card name gets assigned to "name", etc)
  this.value = value;
  this.rank = rank;
  this.suit = suit;
}

// Assign x number of cards to y number of players (get numbers from HTML input elements)
function deal() {
  var p,
      c,
      i,
      totalPlayers = 2, // get number from HTML input
      totalCards = 5; // get number from HTML input

  // Shuffle the cards using the Fisher-Yates shuffle algorithm to ensure a non-biased shuffle (from https://www.frankmitchell.org/2015/01/fisher-yates/)
  function shuffle (deck) {
    var currentIndex,
        randomIndex,
        tempValue;

    for (currentIndex = deck.length - 1; currentIndex > 0; currentIndex -= 1) {
      randomIndex = Math.floor(Math.random() * (currentIndex + 1));
      tempValue = deck[currentIndex];
      deck[currentIndex] = deck[randomIndex];
      deck[randomIndex] = tempValue;
    }
    return deck;
  }

  shuffledDeck = shuffle(deck());
  console.log(shuffledDeck);

  for (p = 0; p < totalPlayers; p++) {
    var hand = []; // Create an empty hand for the player
    for (c = 0; c < totalCards; c++) {
      // Add the top card of the deck to the player's hand
      hand.push(shuffledDeck[0]);
      // Delete the dealt card from the deck
      shuffledDeck.shift();
    }
    console.log(hand);
  }
}

// Make the functions run on window.onLoad() <<
// Add all elements through JS >> if JS is disabled; display an explanatory text using HTML
deal();
