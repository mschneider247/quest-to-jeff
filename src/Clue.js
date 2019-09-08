import Round from "./Round";
import domUpdates from "./domUpdates";

class Clue {
  constructor(clue, dailyDouble) {
    this.question = clue.question
    this.answer = clue.answer
    this.dailyDouble = dailyDouble;
    this.pValue = this.updatePointValue(clue.pointValue);
  }

  updatePointValue(pValue) {
    if (this.dailyDouble) {
      // dom updates for daily double in question area
      domUpdates.appendDailyDouble();
      // have DOM show what clue is a daily double after the update/pop up goes away
      // do on logic on index.js
      return pValue * 2
    } else {
      return pValue
    }
  }

  checkAnswer(userAnswer) {
    if (userAnswer.toLowerCase() === this.answer.toLowerCase()) {
      // dom updates to congragulate player
      return true;
    }
     // dom updates to show correct answer and cardi b crying
    return false;
  }

  updatePlayerScore(currentPlayer, userAnswer) {
    this.checkAnswer(userAnswer) ? currentPlayer.score += this.pValue : currentPlayer.score -= this.pValue
  }

}

export default Clue;