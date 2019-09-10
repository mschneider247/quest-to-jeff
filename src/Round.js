import Clue from "./Clue";
import domUpdates from "./domUpdates";

// import $ from 'jquery';

class Round {
  constructor(data, game, fourCategories, currentRound) {
    this.currentClues = this.doubleClueScores(data, currentRound);
    this.turnCounter = 1;
    this.dailyDouble = Math.ceil(Math.random() * 4);
    this.dailyDoubleTwo = Math.ceil(Math.random() * 4);
    this.currentPlayer = game.players[0];
    this.game = game;
    this.fourCategories = fourCategories;
    this.clue;
    this.currentRound = currentRound;
    this.wager;
    console.log(this.dailyDouble)
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
    console.log('checking both daily doubles')
    console.log('this.dailyDouble: ', this.dailyDouble, this.dailyDoubleTwo)
    console.log('this is checking both daily doubles', this.turnCounter === this.dailyDouble || this.turnCounter === this.dailyDoubleTwo)
    return (this.turnCounter === this.dailyDouble || this.turnCounter === this.dailyDoubleTwo);
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
    console.log('turn inputs', categoryId, pointValueId, this.currentRound)
    console.log('Round turn Method', this.turnCounter);
    
    // user input
    if (this.currentRound === 2) {
      console.log('making new instance of clue for ROUND TWO')
      this.clue = new Clue(this.getClue(categoryId, pointValueId), this.checkBothDailyDoubles());
    } else {
      this.clue = new Clue(this.getClue(categoryId, pointValueId), this.checkDailyDouble());
    }
    domUpdates.appendQuestionToDOM(this.clue.question, this.clue.pValue, this.checkDailyDouble());
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
    if (this.turnCounter === 4) {
      // end the round and take it to the next
      // was thinking of invoking new round here
      console.log('this is line 62 of Round ', this.game);
      this.game.startRound(this.game);
    } 
  }

  appendCategoriesToDOM() {

  }

  getPlayerAnswer(playersAnswer) {
    let isCorrect = this.clue.checkAnswer(playersAnswer); 
    // this.turnCounter ++;
    console.log('line 97 round: ', this.currentPlayer.score)
    console.log('this.clue.pValue: ', this.clue.pValue)

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