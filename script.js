//////// Create the card deck ////////
// Create a deck object which shuffles and returns an array of 52 cards (ie the full deck)
var deck = function () {
  this.ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]; // Specify the possible card names
  this.suits = ["Spades", "Diamonds", "Clubs", "Hearts"]; // Specify the possible card suits
  var cards = []; // Create an empty array for the deck

  // Calculate the number of suits and names to loop through outside of the for loop
  // (to avoid having to calculate it each time it runs through the loop)
  var s,
      n,
      totalRanks = this.ranks.length,
      totalSuits = this.suits.length;

  // Loop through the suits and names options, to create one card of each variation and add it to the "cards" array
  for (s = 0; s < totalSuits; s++) {
    for (n = 0; n < totalRanks; n++) {
      // Assign the suit and name of each card, and increase the value by 1 for each card
      // (starts again from 1 when start looping through a new suit)
      // (due to zero indexing; have to use n+1 to get the right value, as it will otherwise start at 0)
      cards.push(new card(this.suits[s], this.ranks[n], n+1)); // Push each card to the "cards" array
    }
  }
  return cards;
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

  // Shuffle the cards using the Fisher-Yates shuffle algorithm (from https://www.frankmitchell.org/2015/01/fisher-yates/)
  function shuffle (deck) {
    var i = 0,
        j = 0,
        temp = null;

    for (i = deck.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1));
      temp = deck[i];
      deck[i] = deck[j];
      deck[j] = temp;
    }
    return deck;
  }

  shuffledDeck = shuffle(deck());
  console.log(shuffledDeck);

  for (p = 0; p < totalPlayers; p++) {
    var hand = []; // Create an empty hand for the player
    for (c = 0; c < totalCards; c++) {
      // Go through the deck and add cards to the player's hand
      hand.push(shuffledDeck[c]);
      // delete shuffledDeck[c];
      // console.log(shuffledDeck);
    }
    console.log(hand); // currently adding the same cards to both players' hands
                       // either make sure that the second/number (n+1) loop going through the deck picks up where the first/number (n) loop left off
                       // OR remove the cards that have been dealt >> BUT need to find a better method, as "delete" doesn't remove them completely, but leaves them as "undefined"
  }
}

// Make the functions run on window.onLoad() <<
// Add all elements through JS >> if JS is disabled; display an explanatory text using HTML
deal();
