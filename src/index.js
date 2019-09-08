
import $ from 'jquery';
import './css/base.scss';
import domUpdates from "./domUpdates";

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images'

import Game from './Game';
$('#player__2--marker').hide();
$('#player__3--marker').hide();
let game;

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
  fetch("https://fe-apps.herokuapp.com/api/v1/gametime/1903/jeopardy/data")
    .then(data => data.json())
    .then(data => gameStart(data.data, player1, player2, player3))
    .catch(err => console.log(err));
  $('.welcome-banner').hide();
  $('.main-game').fadeIn('swing');
  
})

function gameStart(data, player1, player2, player3) {
  game = new Game(data);
  game.getPlayers(player1, player2, player3);
  game.startRound(game);
}

$('.round__div').on('click', (event) => {
  
  if (event.target.id === 'point') {
    game.round.turn(event.target.parentElement.previousElementSibling.dataset.id, event.target.dataset.id)
  }

  if (event.target.id === 'catagory-1') {
    console.log('class 1')
    $(".round__point--container").not($(event.target).next()).slideUp();
    $(event.target).next().slideToggle('slow')
  }

  if (event.target.id === 'catagory-2') {
    console.log('class 2')
    $(".round__point--container").not($(event.target).next()).slideUp();
    $(event.target).next().slideToggle('slow')
  }

  if (event.target.id === 'catagory-3') {
    console.log('class 3')
    $(".round__point--container").not($(event.target).next()).slideUp();
    $(event.target).next().slideToggle('slow')
  }

  if (event.target.id === 'catagory-4') {
    console.log('class 4')
    $(".round__point--container").not($(event.target).next()).slideUp();
    $(event.target).next().slideToggle('slow')
  }
})

// $('#catagory-1').on('click', (event) => {
//   // console.log('THIS IS FIRING!!!')
//   $(".round__point--container").not($(event.target).next()).slideUp();
//   $(event.target).next().slideToggle('slow') 
// })

// $('#catagory-2').click(() => {
//   // console.log('THIS IS FIRING!!!')
//   $(".round__point--container").not($(event.target).next()).slideUp();
//   $(event.target).next().slideToggle('slow');
// });

// $('#catagory-3').click(() => {
//   // console.log('THIS IS FIRING!!!')
//   $(".round__point--container").not($(event.target).next()).slideUp();
//   $(event.target).next().slideToggle('slow');
// });

// $('#catagory-4').click(() => {
//   // console.log('THIS IS FIRING!!!')
//   $(".round__point--container").not($(event.target).next()).slideUp();
//   $(event.target).next().slideToggle('slow');
// });

$(".header__btn").click(function () {
  location.reload(true);
});

$('.questions__current--question--submit--btn').click(function() {
  // check answer
  // give feedback
  // update score
  let playersAnswer = $(`.questions__current--question--answer--input`).val();
  $(".questions__current--question--prompt").hide();
  $(".questions__current--question").hide();
  
  game.round.getPlayerAnswer(playersAnswer);

  // go to next player
});

function clearQuestionArea() {
  
}

console.log('This is the JavaScript entry file - your code begins here.');
