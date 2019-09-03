// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you import jQuery into a JS file if you use jQuery in that file
import $ from 'jquery';

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images'
import data from '../src/data/sample-data';
import Game from './Game';


const game = new Game(data);

console.log('before', game)
game.startRound(game);




console.log('This is the JavaScript entry file - your code begins here.');
