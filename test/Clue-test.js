import chai from 'chai'
const expect = chai.expect
import Game from '../src/Game.js'
import Round from '../src/Round.js'
import Clue from '../src/Clue.js'
// import currentCategories from '../test/test-data/sample-categories-data.js'
import sampleData from '../src/data/sample-data';
var data = sampleData
var game, round, clue, id, player;

beforeEach(() => {
  game = new Game(data)
  game.players = [{ id: 1, name: "Brit", score: 0 }, { id: 2, name: "Khalid", score: 0 }, { id: 3, name: "Jeff B.", score: 0 }]
  round = new Round(game.getCluesForRound(), game);
  id = round.currentClues[0].categoryId
  player = round.currentPlayer
  clue = new Clue(round.getClue(id, 400), round.checkDailyDouble());
});

describe('Clue', () => {

  it('Should be an instance ofClue', () => {
    expect(clue).to.be.an.instanceOf(Clue)
  });
  
  it('Should double the point value when its a daily double', () => {
    clue.updatePlayerScore(player, clue.answer)
    if (clue.dailyDouble === true) {
      expect(clue.pValue).to.equal(800);
    } else {
      expect(clue.pValue).to.equal(400);
    }
  });

  it('Should return the question to the user', () => {
    expect(clue.question).to.be.an('string')
  })

  it('Should return a boolean depending on whether the users answer was correct or not', () => {
    expect(clue.checkAnswer('Whatevs')).to.equal(false);
  })

});