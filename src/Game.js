import Player from '../src/Player';
import Round from '../src/Round';

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
    let categories = Object.keys(this.categories);
    let categoriesArray = categories.map((category) => {
      return {
        category, id: this.categories[category]
      }
    })
    let randomGenerator = categoriesArray.sort(() => Math.random() - 0.5);
    this.fourCategories = randomGenerator.splice(0, 4);
  }

  getPlayers(p1, p2, p3) {
    let player1 = new Player(1, p1);
    let player2 = new Player(2, p2);
    let player3 = new Player(3, p3);
    this.players.push(player1, player2, player3);
    // append players on the dom with domUpdates
  }

  startRound() {
    // if round is less than 3
    // increase roundcounter by one
    // each players score is at 0
    // display starting score
    // instantiate new class of Round, passing in the array
    // of this.fourCategories
    // let round = new Round(this.fourCategories);
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