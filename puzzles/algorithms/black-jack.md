# Developer Puzzle:


## Blackjack

[Black Jack](https://en.wikipedia.org/wiki/Blackjack)

Build an app to play 2 player blackjack, 1 player is the house, the other player is the gambler.

## Basic rules:

### setup:

1. 52 card deck of poker cards is randomly shuffled.

1. gambler bets ante (cost to play the game and receive cards)

### play:

1. dealer give 1 card to gambler (face up) and takes 1 card for house (face down).
1. dealer gives 2nd card to gambler (face up) and takes 1 card for house (face up)
The end result is the dealer has one card showing and 1 card hidden.
The gambler has 2 cards showing.

1. The gambler can ask to have an additional cards added to his hand, one at a time,
until such time that he holds and bets or busts (sum of cards is over 21)

1. Once gambler holds the dealer reveals their hidden card and proceeds to take additional cards (one at a time) until the sum of their cards is 17 or greater.

### winning:

- If the house busts the gambler wins and get paid their bet amount.

- If the gambler busts the house takes the bet (gambler loses money)

- If the house and gambler have a tie (same sum of their cards) the house wins and takes the wagered amount.

- If the gambler gets 2 cards that sum to 21 it is an automatic win.
- If the gambler can get 5 cards that sum to 21 or less it is an automatic win (5 card charlie)


Game should have a starting wager purse and keep a running tally of the purse holdings.
When the purse is empty the game is over.

UI should have a place to show both hands along with a CTA to request an additional card,
an input box to set a wager amount and a CTA to post the wager and hold.

Pay careful attention to project structure and code layout.

Remember, while solving the puzzle is required the most important
part of this is how you structure your code and the quality and completeness of your tests


### Bonus:

Add ability to split a hand when dealt a pair in first 2 cards.
