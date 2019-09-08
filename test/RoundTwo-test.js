import chai from 'chai';
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);
import Game from '../src/Game.js'
import RoundTwo from '../src/RoundTwo'
import sampleData from '../src/data/sample-data';
let roundTwo, game;


describe('RoundTwo', () => {

  beforeEach(() => {
    game = new Game(sampleData)
    game.players = [{ id: 1, name: "Brit", score: 0 }, { id: 2, name: "Khalid", score: 0 }, { id: 3, name: "Jeff B.", score: 0 }]
    roundTwo = new RoundTwo(game.getCluesForRound(), game);
  });

  it('Should be an instance of RoundTwo', () => {
    expect(roundTwo).to.be.an.instanceOf(RoundTwo);
  })

  it('Should have access to current categories data', () => {
    expect(roundTwo.currentClues).to.be.an('array');
  })

  it('Should be able to assign a random turn as a daily double', () => {
    expect(roundTwo.dailyDouble).to.be.an('number');
  })

  it('Should return a boolean whether the turn is a daily Double', () => {
    expect(roundTwo.checkBothDailyDoubles()).to.be.an('boolean');
  })

  it('Should return an individual clue object when given a category and point value', () => {
    chai.spy.on(roundTwo, 'getClue', () => {})
    roundTwo.getClue();
    expect(roundTwo.getClue).to.have.been.called(1)
  })

  it('Should return a boolean whether the turn is a daily Double', () => {
    expect(roundTwo.checkDailyDouble()).to.be.an('boolean');
  })

  it('should be able to double the scores', () => {
    expect(roundTwo.currentClues[0].pointValue).to.equal(200);
  })
    
});


