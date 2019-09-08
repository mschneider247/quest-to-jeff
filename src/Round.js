import Clue from "./Clue";
import domUpdates from "./domUpdates";

import $ from 'jquery';

class Round {
  constructor(data, game, fourCategories) {
    this.currentClues = data;
    this.turnCounter = 0;
    this.dailyDouble = Math.ceil(Math.random() * 16);
    this.currentPlayer = game.players[0];
    this.game = game;
    this.fourCategories = fourCategories;
    this.clue;
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
    console.log('Round turn Method', this.turnCounter);
    // user input
    this.clue = new Clue(this.getClue(categoryId, pointValueId), this.checkDailyDouble());
    console.log(this.clue)
    domUpdates.appendQuestionToDOM(this.clue.question);
    domUpdates.appendPointValueToDOM(this.clue.pValue);
  
  
  }

  nextPlayer() {
    if (this.currentPlayer.id === 1) {
      console.log('Current player', this.currentPlayer.id)
      return this.currentPlayer = this.game.players[1];
      domUpdates.updatePlayersMarker(this.currentPlayer.id, this.game.players[0])
    } else if (this.currentPlayer.id === 2) {
      console.log('Current player', this.currentPlayer.id)
      return this.currentPlayer = this.game.players[2];
      domUpdates.updatePlayersMarker(this.currentPlayer.id, this.game.players[1])
    } else if (this.currentPlayer.id === 3) {
      console.log('Current player', this.currentPlayer.id)
      return this.currentPlayer = this.game.players[0];
      domUpdates.updatePlayersMarker(this.currentPlayer.id, this.game.players[2])
    }
  }


  getToNextRound() {
    if (this.turnCounter === 16) {
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
    if (isCorrect === true) {
      $(".answer-correct-banner").show();
      this.turnCounter++;
      console.log('Round playerMethod turn counter', this.turnCounter);
      this.currentPlayer.score += this.clue.pValue;
      domUpdates.updatePlayersScore(this.currentPlayer.id, this.currentPlayer.score);
      this.nextPlayer();
    } else {
      console.log($(".answer-incorrect-banner").find('h3'))
      $(".answer-incorrect-banner").find('h3').html(this.clue.answer)
      $(".answer-incorrect-banner").show();
      this.turnCounter++;
      this.currentPlayer.score -= this.clue.pValue;
      domUpdates.updatePlayersScore(this.currentPlayer.id, this.currentPlayer.score);
      this.nextPlayer();
    }
    console.log('Current Turn', this.turnCounter)
    this.getToNextRound();
  }
}

export default Round;