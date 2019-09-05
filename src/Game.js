import Player from '../src/Player';
import Round from '../src/Round';
import domUpdates from "./domUpdates";

class Game {
  constructor(data) {
    this.categories = this.createCategories(data.categories)
    this.clues = data.clues;
    this.players = [];
    this.roundCounter = 1; // goes up to 3
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
    if (this.roundCounter === 1) {
      this.roundCounter++;
      this.round = new Round(this.getCluesForRound(), game);
      this.round.turn();
      // this.round.nextPlayer(game);
      this.round.getToNextRound();
      // append round on domUpdates
    } else if (this.roundCounter === 2) {
      this.roundCounter++;
      // we want to instantiate a new class of round 
      this.round = new Round(this.getCluesForRound(), game);
      // this.round.current clues
      // loop through it to attack the point values
      // and increase the point values times 2
      // on dom updates we change the point value board
    } else if (this.roundCounter > 2) {
      // start round 3
      // this.round.current clues[0]
      // have just one category and one question
      // method that allows all players for a wager 
    }
  }

  displayWinner() {
    let findWinner = this.players.sort((a, b) => b.score - a.score).shift();
    // display winner on dom with domUpdates 
    return findWinner; // may break test once we get scores
  }

} 

export default Game;