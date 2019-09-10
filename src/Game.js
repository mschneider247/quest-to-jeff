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
    this.roundTwo;
    this.fourCategories;
  }
  
  createCategories(categories) {
    let categoriesList = Object.keys(categories);
    const result = categoriesList.map((category) => {
      return {
        category: this.toNormalizedCase(category), id: categories[category]
      }
    })
    return result
  }

  toNormalizedCase(word) {
    let tempArray = [];
    word.split('').forEach((letter, i) => {
      const isCapitol = letter.toLowerCase() != letter;
      const perviousLettter = word[i - 1]
      let perviousIsCapitol
      if (perviousLettter) {
        perviousIsCapitol = perviousLettter.toLowerCase() != perviousLettter;
      }
      if (i === 0) {
        tempArray.push(letter.toUpperCase())
      } else if (isCapitol && !perviousIsCapitol) {
        tempArray.push(' ')
        tempArray.push(letter)
      } else {
        tempArray.push(letter)
      }
    })
    return tempArray.join('')
  }

  getFourCategories() { 
    let randomGenerator = this.categories.sort(() => Math.random() - 0.5); 
    return randomGenerator.splice(0, 4);
  }

  getCluesForRound() {
    this.fourCategories = this.getFourCategories()
    let fourIds = this.fourCategories.map((category) => category.id)
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
      this.round = new Round(this.getCluesForRound(), game, this.fourCategories, this.round);
      domUpdates.appendCategoriesToDOM(this.round.fourCategories, this.roundCounter);
      domUpdates.appendCurrentPlayerToDOM(this.round.currentPlayer.name);
      domUpdates.appendCurrentRound(this.roundCounter);
      this.roundCounter++;
      // append round on domUpdates
    } else if (this.roundCounter === 2) {
      console.log('ISS ROUND TWO MODAFUCKAAAAAAAA!')
      this.round = new Round(this.getCluesForRound(), game, this.fourCategories, this.round);
      domUpdates.removePreviousRound();
      domUpdates.appendCategoriesToDOM(this.round.fourCategories, 2);
      domUpdates.appendCurrentRound(this.roundCounter);
      this.roundCounter++;
      
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