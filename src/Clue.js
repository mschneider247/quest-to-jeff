import Round from "./Round";

class Clue {
  constructor(clue, dailyDouble) {
    this.question = clue.question
    this.answer = clue.answer
    this.dailyDouble = dailyDouble;
    this.pValue = this.updatePointValue(clue.pointValue);
  }

  updatePointValue(pValue) {
    if (this.dailyDouble) {
      return pValue * 2
    } else {
      return pValue
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