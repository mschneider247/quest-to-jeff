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

  it.only('should return an array of four random categories', () => {
    expect(game.getFourCategories()).to.eql([]);
  })

  it.only('should be a function', () => {
    expect(game.getFourCategories()).to.eql([]);
  })

  it.only('should be a function', () => {
    expect(game.getFourCategories()).to.eql([]);
  })

  it.only('should be a function', () => {
    expect(game.getFourCategories()).to.eql([]);
  })

  it.only('should be a function', () => {
    expect(game.getFourCategories()).to.eql([]);
  })

  it.only('should be a function', () => {
    expect(game.getFourCategories()).to.eql([]);
  })

  it.only('should be a function', () => {
    expect(game.getFourCategories()).to.eql([]);
  })

  it.only('should be a function', () => {
    expect(game.getFourCategories()).to.eql([]);
  })

})

