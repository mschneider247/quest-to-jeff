import $ from "jquery";

export default {
  appendPlayersToDOM(players) {
    players.forEach((player) => {
      $(`#player__${player.id}--name`).text(player.name);
      $(`#player__${player.id}--score`).text(player.score);
    })
  },

  appendAnswerBannerToDOM(players) {
    players.forEach((player) => {
      $(`#player__${player.id}--name`).text(player.name);
      $(`#player__${player.id}--score`).text(player.score);
    })
  },

  updatePlayersScore(playerID, currentScore) {
    $(`#player__${playerID}--score`).text(currentScore)
  },

  appendCategoriesToDOM(fourCategories, round) {
    fourCategories.forEach( (category, i) => {
      $('.round__catagory--prompt').after(
        `<button class="round__catagory" id="catagory-${i + 1}" data-id=${category.id}>${category.category}</button>
    <container class="round__point--container" style="display: none;">
      <p class="round__point--prompt">Select Point Value</p>
      <button class="round__point--value" id="point" data-id=${100 * round}>${100 * round}</button>
      <button class="round__point--value" id="point" data-id=${200 * round}>${200 * round}</button>
      <button class="round__point--value" id="point" data-id=${300 * round}>${300 * round}</button>
      <button class="round__point--value" id="point" data-id=${400 * round}>${400 * round}</button>
    </container>
    `) 
    })
  },

  appendQuestionToDOM(question, value, dailyDouble) {
    if (!dailyDouble) {
      $('.questions__current--question--submit--btn').prop('disabled', true);
      $('.questions__current--question--title').after(`<h4 class="questions__current--question--prompt">Question: ${question}</h4>`)
      $('.questions__current--question--points').after(`<h2 class="questions__current--question--points--actual">Points: ${value}</h2>`)
    }
  },

  appendCurrentPlayerToDOM(currentPlayer) {
    $('.questions__current--player--name').html(currentPlayer);
  }, 

  updatePlayersMarker(currentPlayer, nextPlayer) {
    $(`.player__${currentPlayer}`).removeClass('highlight-border');
    $(`#player__${currentPlayer}--marker`).fadeOut();
    $(`.player__${nextPlayer.id}`).addClass('highlight-border');
    $(`#player__${nextPlayer.id}--marker`).fadeIn();
  },

  appendPlayerCorrectAnswer() {
    $(".answer-correct-banner").show();
    setTimeout(function() {
      $(".answer-correct-banner").hide();
    }, 2000)
  },

  appendPlayerWrongAnswer(clue) {
    $(".answer-incorrect-banner").find('h3').html(clue.answer)
    $(".answer-incorrect-banner").show();
    setTimeout(function() {
      $(".answer-incorrect-banner").hide();
    }, 2000)
  },

  appendRoundBanner(round) {
    $('main').hide();
    $(".round-banner").show();
    $('.banner-header').html(`Welcome to Round ${round}!!!`)
    setTimeout(function() {
      $('main').show();
      $(".round-banner").hide();
    }, 850)
  },

  appendDailyDouble() {
    $('.questions__current--question--title').hide();
    $('.questions__current--question--answer--input').hide();
    $('.questions__current--question--submit--btn').hide();
    $('.questions__current--question--points').before(`<div class='questions__current--question--daily--double--container'>
    <p class="questions__current--question--daily--double"> DAILY DOUBLE! </p>
    <input class='questions__--daily--double--input'  type=”number” placeholder='    Wager'>
    <button class='questions__--daily--double--button' disabled = "true">Submit Wager</button></div>`);
  },

  displayQuestionContainer() {
    $('.questions__current--question--title').show();
    $('.questions__current--question--answer--input').show();
    $('.questions__current--question--submit--btn').show();
    $('.questions__current--question--daily--double--container').hide();
  },

  removePreviousRound() {
    $('.round__point--container').remove();
    $('.round__catagory').remove();
  }, 

  appendTooHighWagerErr() {
    $('.questions__current--question--daily--double').append('<p class="wager--err">Wager Too High 🔆 Drop it down ⬇️</p>')
  },

  appendCurrentRound(currentRound) {
    $('.round__current--num').html(currentRound)
  }

};