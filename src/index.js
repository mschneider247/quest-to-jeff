import $ from 'jquery';
import './css/base.scss';
import domUpdates from "./domUpdates";
import Game from './Game';

let game;
$('#player__2--marker').hide();
$('#player__3--marker').hide();

$('.main-game').hide();

$('.name-input').keydown(function() {
  if (
    $('#player__one--name-input').val() !== '' && $('#player__two--name-input').val() !== '' && $('#player__three--name-input').val() !== '') {
    $('.start-game-btn').prop('disabled', false);
  }
});

$('.questions__current--question--answer--input').keyup(function() {
  if (
    $('.questions__current--question--answer--input').val() !== '') {
    $('.questions__current--question--submit--btn').prop('disabled', false);
  }
});

$('.questions').keyup(function(e) {
  $('.questions__--daily--double--button').prop('disabled', false);
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
  $(".questions__current--question--prompt").hide();
  $(".questions__current--question").hide();
})

function gameStart(data, player1, player2, player3) {
  game = new Game(data);
  game.getPlayers(player1, player2, player3);
  game.startRound(game);
}

$('.round__div').on('click', (event) => {
  if (event.target.id === 'point') {
    let categoryID = event.target.parentElement.previousElementSibling.dataset.id;
    let pointValueID = event.target.dataset.id;
    let nearestButton = event.target.closest('#point')
    if (game.roundCounter === 2) {
      game.round.turn(categoryID, pointValueID);
    } else {
      game.round.turn(categoryID, pointValueID);
    }
    $(".questions__current--question").show();
    $(".answer-incorrect-banner").hide();
    $(".answer-correct-banner").hide();
    $(nearestButton).prop('disabled', true).addClass("disabled");
  }

  if (event.target.id === 'catagory-1') {
    $(".round__point--container").not($(event.target).next()).slideUp();
    $(event.target).next().slideToggle('fast')
  }

  if (event.target.id === 'catagory-2') {
    $(".round__point--container").not($(event.target).next()).slideUp();
    $(event.target).next().slideToggle('fast')
  }

  if (event.target.id === 'catagory-3') {
    $(".round__point--container").not($(event.target).next()).slideUp();
    $(event.target).next().slideToggle('fast')
  }

  if (event.target.id === 'catagory-4') {
    $(".round__point--container").not($(event.target).next()).slideUp();
    $(event.target).next().slideToggle('fast')
  }
})

$('.questions__current--question').unbind().on('click', (event) => {
  if (event.target.className === 'questions__--daily--double--button') {
    if (parseInt($('.questions__--daily--double--input').val()) > parseInt(highestWagerPossible())) {
      domUpdates.appendTooHighWagerErr()
    } else {
      game.round.clue.pValue = parseInt($('.questions__--daily--double--input').val())
      $('.questions__current--question--points').after(`<h2 class="questions__current--question--points--actual">Points: ${game.round.clue.pValue}</h2>`);
      $('.questions__current--question--title').after(`<h4 class="questions__current--question--prompt">Question: ${game.round.clue.question}</h4>`);
      $('.questions__current--question--daily--double--container').hide();
      findHighestRemainingValue();
    }
    $('.questions__--daily--double--input').val('');
    domUpdates.displayQuestionContainer();
  }
}) 

const findHighestRemainingValue = () => {
  const searchButtonsPoints = $(".round__point--container").find('button')
  return Object.keys(searchButtonsPoints).filter((key) => searchButtonsPoints[key].disabled === false)
    .map((key) => {
      return searchButtonsPoints[key].innerText
    }).sort((a, b) => b - a)[0];
}

const highestWagerPossible = () => {
  return (findHighestRemainingValue() > parseInt(game.round.currentPlayer.score)) ? findHighestRemainingValue() : parseInt(game.round.currentPlayer.score)
}

$(".header__btn").click(function () {
  location.reload(true);
});

$('.questions__current--question--submit--btn').click(function() {
  $(".round__point--container").slideUp();
  let playersAnswer = $(`.questions__current--question--answer--input`).val();
  clearAnswerField();
  $(".questions__current--question").hide();
  $(".questions__current--player").hide();
  $('.questions__current--question--prompt').remove();
  $('.questions__current--question--points--actual').remove();
  game.round.getPlayerAnswer(playersAnswer);
});

function clearAnswerField() {
  $(".questions__current--question--answer--input").val('');
}
