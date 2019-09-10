import Round from "./Round";
import domUpdates from "./domUpdates";

class Clue {
  constructor(clue, dailyDouble) {
    console.log('This is the clue on', clue)
    this.question = clue.question
    this.answer = clue.answer
    this.dailyDouble = this.checkDailyDouble(dailyDouble);
    this.pValue = clue.pointValue;
  }

  checkDailyDouble(dailyDouble) {
    if (dailyDouble) {
      domUpdates.appendDailyDouble();
      return true
    } else {
      return false
    }
  }

  checkAnswer(userAnswer) {
    if (userAnswer.toLowerCase() === this.answer.toLowerCase()) {
      return true;
    }
    return false;
  }

  updatePlayerScore(currentPlayer, userAnswer) {
    this.checkAnswer(userAnswer) ? currentPlayer.score += this.pValue : currentPlayer.score -= this.pValue
  }

}

export default Clue;