import Clue from "./Clue";

class Round {
  constructor(data, game, fourCategories) {
    this.currentClues = data;
    this.turnCounter = 0;
    this.dailyDouble = Math.ceil(Math.random() * 12);
    this.currentPlayer = game.players[0];
    this.game = game;
    this.fourCategories = fourCategories;
  }

  checkDailyDouble() {
    return (this.turnCounter === this.dailyDouble);
  }

  getClue(categoryId, pValue) {
    return this.currentClues.find((clue, index) => {
      if ((clue.categoryId === Number(categoryId)) && (clue.pointValue === Number(pValue))) {
        this.currentClues.splice(index, 1);
        return true;
      }
    });
  }

  turn(categoryId, pointValueId) {
    console.log('turn inputs', categoryId, pointValueId)

    // user input
    let clue = new Clue(this.getClue(categoryId, pointValueId), this.checkDailyDouble());
    console.log(clue)
    // display question with clue.question
    // domUpdates.appendQuestionToDOM(clue.question);
  
    let isCorrect = clue.checkAnswer('Pork');
    // this.turnCounter ++;

    if (isCorrect === true) {
      this.turnCounter++;
      this.currentPlayer.score += clue.pValue;
      this.nextPlayer();
    } else {
      this.turnCounter++;
      this.currentPlayer.score -= clue.pValue;
      this.nextPlayer();
    }
  
  }

  nextPlayer() {
    if (this.currentPlayer.id === 1) {
      this.currentPlayer = this.game.players[1];
    } else if (this.currentPlayer.id === 2) {
      this.currentPlayer = this.game.players[2];
    } else if (this.currentPlayer.id === 3) {
      this.currentPlayer = this.game.players[0];
    }
  }


  getToNextRound() {
    if (this.turnCounter === 16) {
      // end the round and take it to the next
      // was thinking of invoking new round here
    } 
  }

  appendCategoriesToDOM() {

  }
}

export default Round;