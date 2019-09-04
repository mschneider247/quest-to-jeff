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

// $('#catagory-one').click( () => {
//   $(event.target).next().slideToggle('slow')
// });


$('#catagory-one').on('click', (event) => {
  // event.preventDefault();
  $(".round__point--container").not($(event.target).next()).slideUp();
  $(event.target).next().slideToggle('slow') 
})

$('#catagory-two').click(() => {
  $(".round__point--container").not($(event.target).next()).slideUp();
  $(event.target).next().slideToggle('slow');
});

$('#catagory-three').click(() => {
  $(".round__point--container").not($(event.target).next()).slideUp();
  $(event.target).next().slideToggle('slow');
});

$('#catagory-four').click(() => {
  $(".round__point--container").not($(event.target).next()).slideUp();
  $(event.target).next().slideToggle('slow');
});



console.log('This is the JavaScript entry file - your code begins here.');
