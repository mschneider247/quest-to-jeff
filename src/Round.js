class Round {
  constructor(data) {
    this.currentClues = data;
    this.turnCounter = 0;
    this.dailyDouble = 0;
    this.currentPlayer = game.players[0];
  }
}

export default Round;