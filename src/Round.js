import Clue from "./Clue";
import domUpdates from "./domUpdates";

class Round {
  constructor(data, game, fourCategories, currentRound) {
    this.currentClues = this.doubleClueScores(data, currentRound);
    this.turnCounter = 1;
    this.dailyDouble = Math.ceil(Math.random() * 16);
    this.dailyDoubleTwo = Math.ceil(Math.random() * 8);
    this.dailyDoubleThree = (Math.ceil(Math.random() * 8)) + 8;
    this.currentPlayer = game.players[0];
    this.game = game;
    this.fourCategories = fourCategories;
    this.clue;
    this.currentRound = currentRound;
    this.wager;
  }

  checkDailyDouble() {
    return (this.turnCounter === this.dailyDouble);
  }

  doubleClueScores(data, currentRound) {
    return data.map((clue) => {
      clue.pointValue *= currentRound;
      return clue;
    })
  }

  checkBothDailyDoubles() {
    return (this.turnCounter === this.dailyDoubleThree || this.turnCounter === this.dailyDoubleTwo);
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
    if (this.currentRound === 2) {
      this.clue = new Clue(this.getClue(categoryId, pointValueId), this.checkBothDailyDoubles());
      domUpdates.appendQuestionToDOM(this.clue.question, this.clue.pValue, this.checkBothDailyDoubles());
    } else {
      this.clue = new Clue(this.getClue(categoryId, pointValueId), this.checkDailyDouble());
      domUpdates.appendQuestionToDOM(this.clue.question, this.clue.pValue, this.checkDailyDouble());
    }
  }

  nextPlayer() {
    if (this.currentPlayer.id === 1) {
      domUpdates.updatePlayersMarker(this.currentPlayer.id, this.game.players[1])
      this.currentPlayer = this.game.players[1];
    } else if (this.currentPlayer.id === 2) {
      domUpdates.updatePlayersMarker(this.currentPlayer.id, this.game.players[2])
      this.currentPlayer = this.game.players[2];
    } else if (this.currentPlayer.id === 3) {
      domUpdates.updatePlayersMarker(this.currentPlayer.id, this.game.players[0])
      this.currentPlayer = this.game.players[0];
    }
  }

  getToNextRound() {
    if (this.turnCounter === 17) {
      this.game.startRound(this.game);
    } 
  }

  getPlayerAnswer(playersAnswer) {
    let isCorrect = this.clue.checkAnswer(playersAnswer); 
    if (isCorrect === true) {
      domUpdates.appendPlayerCorrectAnswer();
      this.turnCounter++;
      this.currentPlayer.score += this.clue.pValue;
      domUpdates.updatePlayersScore(this.currentPlayer.id, this.currentPlayer.score);
      this.nextPlayer();
    } else {
      domUpdates.appendPlayerWrongAnswer(this.clue);
      this.turnCounter++;
      this.currentPlayer.score -= this.clue.pValue;
      domUpdates.updatePlayersScore(this.currentPlayer.id, this.currentPlayer.score);
      this.nextPlayer();
    }
    this.getToNextRound();
  }
}

export default Round;