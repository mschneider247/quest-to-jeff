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
  round = new Round(game.getCluesForRound());
  id = round.currentClues[0].categoryId
  player = round.currentPlayer
  clue = new Clue(round.getClue(id, 200), round.checkDailyDouble());
});

describe('Clue', () => {

  it('Should be an instance ofClue', () => {
    expect(clue).to.be.an.instanceOf(Clue)
  });
  
  it('Should double the point value when its a daily double', () => {
    clue.updatePlayerScore(player)
    // console.log(player.score)
    if (clue.dailyDoubleBoolean === true) {
      expect(clue.pValue).to.equal(400);
    } else {
      expect(clue.pValue).to.equal(200);
    }
  });

  it('Should return the question to the user', () => {
    expect(clue.question).to.be.an('string')
  })

  it('Should return a boolean depending on whether the users answer was correct or not', () => {
    expect(clue.checkAnswer('Whatevs')).to.equal(false);
  })

});