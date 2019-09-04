
import $ from 'jquery';
import './css/base.scss';
import domUpdates from "./domUpdates";

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images'
import data from '../src/data/sample-data';
import Game from './Game';


$('.main-game').hide();

$('.name-input').keydown(function() {
  if (
    $('#player__one--name-input').val() !== '' && $('#player__two--name-input').val() !== '' && $('#player__three--name-input').val() !== '') {
    $('.start-game-btn').prop('disabled', false);
  }
});

$('.start-game-btn').click(function(e) {
  e.preventDefault();
  let player1 = $('#player__one--name-input').val();
  let player2 = $('#player__two--name-input').val();
  let player3 = $('#player__three--name-input').val();
  $('.welcome-banner').hide();
  $('.main-game').fadeIn('swing');
  gameStart(player1, player2, player3)
})


function gameStart(player1, player2, player3) {
  const game = new Game(data);
  game.getPlayers(player1, player2, player3);
  game.startRound(game);
}

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

$(".header__btn").click(function () {
    location.reload(true);


console.log('This is the JavaScript entry file - your code begins here.');
