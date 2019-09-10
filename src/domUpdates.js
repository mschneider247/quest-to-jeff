import $ from "jquery";

export default {
  appendPlayersToDOM(players) {
    players.forEach((player) => {
      $(`#player__${player.id}--name`).text(player.name);
      $(`#player__${player.id}--score`).text(player.score);
    })
  }, // have a comma inbetween each function

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
    $('.questions__current--question--submit--btn').prop('disabled', true);
    if (dailyDouble === true) {
      // $('.questions__--daily--double--button').prop('disabled', true); 
      $('.questions__current--question--prompt').hide(question);
    } else {
      $('.questions__current--question--prompt').html(question);
      $('.questions__current--question--points').html(value);
    }
  },

  // appendPointValueToDOM(value) {
  //   $('.questions__current--question--points').html(value);
  // },

  appendCurrentPlayerToDOM(currentPlayer) {
    $('.questions__current--player--name').html(currentPlayer);
  }, 

  updatePlayersMarker(currentPlayer, nextPlayer) {
    $(`#player__${currentPlayer}--marker`).fadeOut();
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

  // appendPlayerWrongAnswer(clue) {
  //   $(".answer-incorrect-banner").find('h3').html(clue.answer)
  //   $(".answer-incorrect-banner").show();
  // },

  appendRoundBanner(round) {
    $('main').hide();
    $(".round-banner").show();
    $('.banner-header').html(`Welcome to Round ${round + 1}!!!`)
    setTimeout(function() {
      $('main').show();
      $(".round-banner").hide();
    }, 2000)
  },

  hideFeedback() {
    $(".answer-incorrect-banner").hide();
    $(".answer-correct-banner").hide();
  },

  appendDailyDouble() {
    $('.questions__current--question--daily--double--container').append(`
    <p class="questions__current--question--daily--double"> DAILY DOUBLE! </p>
    <input class='questions__--daily--double--input'  type=”number” placeholder='    Wager'>
    <button class='questions__--daily--double--button'>Submit Wager</button>`);
  },

  removePreviousRound() {
    $('.round__point--container').remove();
    $('.round__catagory').remove();
  }, 

  appendTooHighWagerErr() {
    $('.questions__current--question--daily--double').append('<p class="wager--err">Wager Too High 🔆 Drop it down ⬇️</p>')
  }

};