import Round from "./Round";
import Clue from "./Clue";

class RoundTwo extends Round {
  constructor(data, game, fourCategories) {
    super(data, game, fourCategories);
    this.currentClues = this.doubleClueScores(data);
    this.turnCounter = 0;
    this.dailyDouble = Math.ceil(Math.random() * 16);
    this.dailyDoubleTwo = Math.ceil(Math.random() * 16);
    this.currentPlayer = game.players[0];
    this.game = game;
    this.fourCategories = fourCategories;
    this.clue;
  }

  doubleClueScores(data) {
    return data.map((clue) => {
      clue.pointValue *= 2;
      return clue;
    })
  }

  checkBothDailyDoubles() {
    return (this.turnCounter === this.dailyDouble || this.turnCounter === this.dailyDoubleTwo);
  }

  turnRoundTwo(categoryId, pointValueId) { 
    console.log('turn inputs', categoryId, pointValueId)
    // console.log('Round turn Method', this.turnCounter);
    // console.log(this);
    this.clue = new Clue(super.getClue(categoryId, pointValueId), this.checkBothDailyDoubles());
    console.log(this.clue)
    // display question with clue.question
    domUpdates.appendQuestionToDOM(this.clue.question);
    domUpdates.appendPointValueToDOM(this.clue.pValue);
  
  }



}

export default RoundTwo;