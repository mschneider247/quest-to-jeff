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
    this.round;
  }

  getFourCategories() { 
    let categories = Object.keys(this.categories);
    let categoriesArray = categories.map((category) => {
      return {
        category, id: this.categories[category]
      }
    })
    let randomGenerator = categoriesArray.sort(() => Math.random() - 0.5);
    return randomGenerator.splice(0, 4);

  }

  getPlayers(p1, p2, p3) {
    let player1 = new Player(1, p1);
    let player2 = new Player(2, p2);
    let player3 = new Player(3, p3);
    this.players.push(player1, player2, player3);
    // append players on the dom with domUpdates
  }

  startRound() {
    if (this.roundCounter < 3) {
      this.roundCounter++
      this.round = new Round(this.fourCategories);
      // append round on domUpdates
    }
  }

  displayWinner() {
    let findWinner = this.players.sort((a, b) => b.score - a.score).shift();
    // display winner on dom with domUpdates 
    return findWinner; // may break test once we get scores
  }

} 

export default Game;