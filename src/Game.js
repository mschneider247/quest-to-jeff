 

class Game {
  constructor(data) {
//   constructor(response_code, categories, clues ) {
    // Object.assign(this, { response_code, categories, clues });
    this.categories = data.categories
    this.clues = data.clues;
    this.players = [];
    this.roundCounter = 0; // goes up to 3
    this.fourCategories = [];
  }

  getFourCategories() { 
    // from the this.categories randomly select four categories
    // use the category value to then find them in the clues
    // use a conditional to push up to four into the array
    // if fourCategories is less than or equal to 4
    // push random category in
  }

  getPlayers(p1, p2, p3) {
    // instantiate all new players with id and name
    // push the players into this.players
    // append players on the dom with domUpdates
  
  }

  startRound() {
    // if round is less than 3
    // increase roundcounter by one
    // each players score is at 0
    // display starting score
    // instantiate new class of Round, passing in the array
    // of this.fourCategories
    // display current round with domUpdates
  }

  displayWinner() {
    // sort score from highest to lowest of the players array
    // player at index 0 is the winner
    // display winner on dom with domUpdates 
    // return player at index 0
  }

} 

export default Game;