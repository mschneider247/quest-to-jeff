import Player from '../src/Player';
import Round from '../src/Round';
import domUpdates from "./domUpdates";

class Game {
  constructor(data) {
    this.categories = this.createCategories(data.categories)
    this.clues = data.clues;
    this.players = [];
    this.roundCounter = 0; // goes up to 3
    this.round;
  }
  
  createCategories(categories) {
    let categoriesList = Object.keys(categories);
    return categoriesList.map((category) => {
      return {
        category, id: categories[category]
      }
    })
  }

  getFourCategories() { 
    let randomGenerator = this.categories.sort(() => Math.random() - 0.5); 
    return randomGenerator.splice(0, 4);
  }

  getCluesForRound() {
    let fourIds = this.getFourCategories().map((category) => category.id)
    return this.clues.filter((clue) => {
      return fourIds.includes(clue.categoryId)
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
      this.round = new Round(this.getCluesForRound(), game);
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