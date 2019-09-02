import chai from 'chai'
const expect = chai.expect
import Round from '../src/Round.js'
import Clue from '../src/Clue.js'
import currentCategories from '../test/test-data/sample-categories-data.js'
var data = currentCategories
var round, clue;

beforeEach(() => {
  round = new Round(data);
  clue = new Clue({
    question: 'Government money that a congressman steers toward his home district',
    pointValue: 200,
    answer: 'pork',
    categoryId: 9
  }, true);
});

describe('Clue', () => {

  it('Should be an instance ofClue', () => {
    expect(clue).to.be.an.instanceOf(Clue)
  });

  it('Should double the point value when its a daily double', () => {
    expect(clue.pValue).to.equal(400);
  });

  it('Should return the question to the user', () => {
    expect(clue.question).to.be.an('string')
  })

  it('Should return a boolean depending on whether the users answer was correct or not', () => {
    expect(clue.checkAnswer('Whatevs')).to.equal(false);
    expect(clue.checkAnswer('pORk')).to.equal(true);
  })

  it('Should ')
});