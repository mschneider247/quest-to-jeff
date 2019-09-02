import chai from 'chai'
const expect = chai.expect
import Round from '../src/Round.js'
import currentCategories from '../test/test-data/sample-categories-data.js'
var round;
var data = currentCategories

beforeEach(() => {
  round = new Round(data);
});

describe('Round', () => {

  it('Should be an instance of Round', () => {
    expect(round).to.be.an.instanceOf(Round);
  })

  it('Should have access to current categories data', () => {
    expect(round.currentClues).to.equal(data);
  })

  it('Should be able to assign a random turn as a daily double', () => {
    expect(round.dailyDouble).to.be.an('number');
  })

  it('Should return a boolean whether the turn is a daily Double', () => {
    expect(round.checkDailyDouble()).to.be.an('boolean');
  })

  it('Should return an individual clue object when given a category and point value', () => {
    expect(round.getClue(9, 200)).to.eql({
      question: 'Government money that a congressman steers toward his home district',
      pointValue: 200,
      answer: 'pork',
      categoryId: 9
    });
    expect(round.currentClues.length).to.equal(48);
  })

  it('Should return a boolean whether the turn is a daily Double', () => {
    expect(round.checkDailyDouble()).to.be.an('boolean');
  })
})