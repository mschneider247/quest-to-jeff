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
})