import Clue from "./Clue";

class Round {
  constructor(data) {
    this.currentClues = data;
    this.turnCounter = 1;
    this.dailyDouble = Math.ceil(Math.random() * 12);
    this.currentPlayer = [];
  }

  checkDailyDouble() {
    return (this.turnCounter === this.dailyDouble);
  }

  getClue(categoryId, pValue) {
    return this.currentClues.find((clue, index) => {
      if ((clue.categoryId === categoryId) && (clue.pointValue === pValue)) {
        this.currentClues.splice(index, 1);
        return true;
      }
    });
  }

  turn() {
    let clue = new Clue(this.getClue(9, 400), this.checkDailyDouble);
    console.log(clue.question);
    let isCorrect = clue.checkAnswer('Pork');
    this.turnCounter ++;
    // if isCorrect is true ++ playerscore with clue.pValue
    // if isCorrect is false -- playerscore with clue.pValue
    
    // nextPlayer()
  }

  nextPlayer() {
    // if (this.currentPlayer.id === 1) {
    //   this.currentPlayer = game.players[1];
    // } else if (this.currentPlayer.id === 2) {
    //   this.currentPlayer = game.players[2];
    // } else if (this.currentPlayer.id === 3) {
    //   this.currentPlayer = game.players[0];
    // }

    // let currentPlayer = this.currentPlayer.id
    // switch(currentPlayer) {
    // case 1:
    //   this.currentPlayer = game.players[1];
    //   break;
    // case 2:
    //   this.currentPlayer = game.players[2];
    //   break;
    // case 3:
    //   this.currentPlayer = game.players[0];
    //   break;
    // }
  }

}

export default Round;