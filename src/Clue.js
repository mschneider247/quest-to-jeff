import Round from "./Round";

class Clue {
  constructor(clueObj, dailyDoubleBoolean) {
    this.question = clueObj.question
    this.answer = clueObj.answer
    this.dailyDoubleBoolean = dailyDoubleBoolean;
    this.pValue = this.updatePointValue(clueObj.pointValue);
  }

  updatePointValue(pValue) {
    if (this.dailyDoubleBoolean) {
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