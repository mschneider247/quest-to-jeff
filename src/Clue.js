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

}

export default Clue;