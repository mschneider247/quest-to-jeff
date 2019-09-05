import chai from 'chai';
const expect = chai.expect;

import sampleData from '../src/data/sample-data';
import Game from '../src/Game';
import Clue from '../src/Clue';

describe('Game', () => {
  let game, clue;
  beforeEach(() => {
    game = new Game(sampleData);
    game.players = [{ id: 1, name: "Brit", score: 0 }, { id: 2, name: "Khalid", score: 0 }, { id: 3, name: "Jeff B.", score: 0 }];
    clue = new Clue({
      question: 'An effort lasting from 1985 to 1991 eliminated this paralytic illness from Latin America',
      answer: 'polio',
      pointValue: 200,
      categoryId: 3
    }, true);
  });

  it('should be a function', () => {
    expect(Game).to.be.a('function');
  })

  it('should show the roundCounter starting at 0', () => {
    expect(game.roundCounter).to.equal(0);
  })
    
  it('should return an array of four random categories', () => {
    game.getCluesForRound();
    expect(game.getFourCategories().length).to.equal(4);
  })
    
  it('game should have 3 players', () => {
    expect(game.players.length).to.equal(3);
  })

  it('should return roundCounter has increased by one', () => {
    game.roundCounter++;
    expect(game.roundCounter).to.equal(1);
  })

  it('should return the winner', () => {
    game.players[0].score += 1000;
    expect(game.displayWinner()).to.eql({ id: 1, name: 'Brit', score: 1000 });
  })

})

