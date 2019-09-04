import Player from '../src/Player';
import Round from '../src/Round';
import domUpdates from "./domUpdates";

class Game {
  constructor(data) {
    //   constructor(response_code, categories, clues ) {
    // Object.assign(this, { response_code, categories, clues });
    this.categories = this.createCategoriesArray(data.categories)
    this.clues = data.clues;
    this.players = [];
    this.roundCounter = 0; // goes up to 3
    this.round;
  }

  createCategoriesArray(categoryObject) {
    let categories = Object.keys(categoryObject);
    return categories.map((category) => {
      return {
        category, id: categoryObject[category]
      }
    })
  }

  getFourCategories() { 
    let randomGenerator = this.categories.sort(() => Math.random() - 0.5); 
    return randomGenerator.splice(0, 4);
  }

  getCluesForRound() {
    let fourIdArray = this.getFourCategories().map((category) => category.id)
    return this.clues.filter((clue) => {
      return fourIdArray.includes(clue.categoryId)
    })
  }

  getPlayers(p1, p2, p3) {
    let player1 = new Player(1, p1);
    let player2 = new Player(2, p2);
    let player3 = new Player(3, p3);
    this.players.push(player1, player2, player3);
    domUpdates.appendPlayersToDOM(this.players);
  }

  startRound(game) {
    if (this.roundCounter < 3) {
      this.roundCounter++
      this.round = new Round(this.getCluesForRound(), this.players[0]);
      this.round.turn();
      this.round.nextPlayer(game);
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