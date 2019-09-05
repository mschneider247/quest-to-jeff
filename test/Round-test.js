import chai from 'chai';
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);
import Game from '../src/Game.js'
import Round from '../src/Round.js'
import sampleData from '../src/data/sample-data';
var round, game;


beforeEach(() => {
  game = new Game(sampleData)
  game.players = [{ id: 1, name: "Brit", score: 0 }, { id: 2, name: "Khalid", score: 0 }, { id: 3, name: "Jeff B.", score: 0 }]
  round = new Round(game.getCluesForRound(), game);
});

describe('Round', () => {

  it('Should be an instance of Round', () => {
    expect(round).to.be.an.instanceOf(Round);
  })

  it('Should have access to current categories data', () => {
    expect(round.currentClues).to.be.an('array');
  })

  it('Should be able to assign a random turn as a daily double', () => {
    expect(round.dailyDouble).to.be.an('number');
  })

  it('Should return a boolean whether the turn is a daily Double', () => {
    expect(round.checkDailyDouble()).to.be.an('boolean');
  })

  it('Should return an individual clue object when given a category and point value', () => {
    chai.spy.on(round, 'getClue', () => {})
    round.getClue();
    expect(round.getClue).to.have.been.called(1)
  })

  it('Should return a boolean whether the turn is a daily Double', () => {
    expect(round.checkDailyDouble()).to.be.an('boolean');
  })

  // it.only('Should do things with a player', () => {
  //   round.nextPlayer(game)
  //   // expect(round.checkDailyDouble()).to.be.an('boolean');
  // })

  it('Should increase turnCounter by one', () => {
    round.turn();
    expect(round.turn()).to.equal(1);
  })

  it('Should check if players move to next players', () => {
    round.turn();
    expect(round.turn()).to.equal([]);
  })

})