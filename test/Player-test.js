import chai from 'chai';
const expect = chai.expect;

import Player from '../src/Player';
// import Game from '../src/Game';

describe('Player', () => {
  let player;
  beforeEach(() => {
    player = new Player();
  })

  it('should be a function', () => {
    expect(Player).to.be.a('function');
  })
  
})
