import chai from 'chai';
const expect = chai.expect;

import Game from '../src/Game';

import sampleData from '../src/data/sample-data';

describe('Game', () => {
  let game;
  beforeEach(() => {
    game = new Game(sampleData);
  })

  it('should be a function', () => {
    expect(Game).to.be.a('function');
  })

  
  it('should start as an empty array', () => {
    expect(game.players).to.eql([]);
  })
    
  it('should show the roundCounter starting at 0', () => {
    expect(game.roundCounter).to.equal(0);
  })
    
  it('should return an array of four random categories', () => {
    game.getFourCategories();
    expect(game.fourCategories.length).to.equal(4);
  })
    
  it('should return 3 players', () => {
    game.getPlayers('Amanda', 'Foster', 'Matt');
    expect(game.players.length).to.equal(3);
  })

  it.only('should return roundCounter has increased by one', () => {
    game.getFourCategories()
    // game.startRound()
    // expect(game.roundCounter).to.equal(1);
    expect(game.startRound()).to.eql([])
  })

  it('should be a function', () => {
    expect(game.getFourCategories()).to.eql([]);
  })

  it('should be a function', () => {
    expect(game.getFourCategories()).to.eql([]);
  })

  it('should be a function', () => {
    expect(game.getFourCategories()).to.eql([]);
  })

})

