import chai from 'chai';
const expect = chai.expect;

import Game from '../src/Game';

import sampleData from '../src/data/sample-data';

describe('Game', () => {
  let game;
  beforeEach(() => {
    game = new Game(sampleData);
    game.players = [{ id: 1, name: "Brit", score: 0 }, { id: 2, name: "Khalid", score: 0 }, { id: 3, name: "Jeff B.", score: 0 }]

  })

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
    
  it('should return 3 players', () => {
    game.getPlayers('Amanda', 'Foster', 'Matt');
    expect(game.players.length).to.equal(3);
  })

  it('should return roundCounter has increased by one', () => {
    game.startRound()
    expect(game.roundCounter).to.equal(1);
  })

  it('should return the winner', () => {
    game.getPlayers('Amanda', 'Foster', 'Matt');
    expect(game.displayWinner()).to.eql({ id: 1, name: 'Amanda', score: 0 });
  })

  it('should check if roundCounter has increased', () => {
    game.startRound(game);
    expect(game.roundCounter).to.eql(2);
  })

  it('should intantiate new round when roundCounter has increased to 2', () => {
    game.startRound(game)
    // how to check for an instatiation of a new round
    // expect(round.startRound(game)).to.be.an('boolean');
  })

})

