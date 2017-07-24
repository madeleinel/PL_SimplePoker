// Create the card deck

// Create a deck object which returns an array of 52 cards (ie the full deck)
function deck() {
  this.names = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]; // Specify the possible card names
  this.suits = ["Spades", "Diamonds", "Clubs", "Hearts"]; // Specify the possible card suits
  var cards = []; // Create an empty array for the cards

  // Calculate the number of suits and names to loop through outside of the for loop
  // (to avoid having to calculate it each time it runs through the loop)
  var totNames = this.names.length;
  var totSuits = this.suits.length;

  // Loop through the suits and names options, to create one card of each variation and add it to the "cards" array
  for (var s = 0; s < totSuits; s++) {
    for (var n = 0; n < totNames; n++) {
      // Assign the suit and name of each card, and increase the value by 1 for each card
      // (starts again from 1 when start looping through a new suit)
      // (due to zero indexing; have to use n+1 to get the right value, as it will otherwise start at 0)
      cards.push(new card(this.suits[s], this.names[n], n+1)); // Push each card to the "cards" array
    }
  }
  console.log(cards);
  return cards; // Return the "cards" array to make it available outside of the function
}

// Create a card object which accepts the name, suit and value of each card
function card(suit, name, value) { // Note that the arguments of this function need to be input in the same order as
                                   // the values in the cards.push method (to ensure that the card name gets assigned to "name", etc)
  this.value = value;
  this.name = name;
  this.suit = suit;
}

deck();
