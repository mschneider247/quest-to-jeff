import Player from '../src/Player';
import Round from '../src/Round';
import domUpdates from "./domUpdates";


class Game {
  constructor(data) {
    this.categories = this.createCategories(data.categories)
    this.clues = data.clues;
    this.players = [];
    this.roundCounter = 1; 
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
      this.round = new Round(this.getCluesForRound(), game, this.fourCategories, this.roundCounter);
      domUpdates.appendRoundBanner(this.roundCounter);
      domUpdates.appendCategoriesToDOM(this.round.fourCategories, this.roundCounter);
      domUpdates.appendCurrentPlayerToDOM(this.round.currentPlayer.name);
      domUpdates.appendCurrentRound(this.roundCounter);
      this.roundCounter++;
    } else if (this.roundCounter === 2) {
      this.round = new Round(this.getCluesForRound(), game, this.fourCategories, this.roundCounter);
      domUpdates.removePreviousRound();
      domUpdates.appendCategoriesToDOM(this.round.fourCategories, this.roundCounter)
      domUpdates.appendCurrentRound(this.roundCounter);
      setTimeout(function() {
        domUpdates.appendRoundBanner(2);
      },2000)
      this.roundCounter++;
    } else if (this.roundCounter > 2) {

    }
  }

  displayWinner() {
    let findWinner = this.players.sort((a, b) => b.score - a.score).shift();
    return findWinner; 
  }

} 

export default Game;