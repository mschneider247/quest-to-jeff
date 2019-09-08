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
      <p class="round__point--value" id="point" data-id=100 disabled = "false">${100 * round}</p>
      <p class="round__point--value" id="point" data-id=200>${200 * round}</p>
      <p class="round__point--value" id="point" data-id=300>${300 * round}</p>
      <p class="round__point--value" id="point" data-id=400>${400 * round}</p>
    </container>
    `) 
    })
  },

  appendQuestionToDOM(question) {
    $('.questions__current--question--prompt').html(question);
  },

  appendPointValueToDOM(value) {
    $('.questions__current--question--points').html(value);
  },

  appendCurrentPlayerToDOM(currentPlayer) {
    $('.questions__current--player--name').html(currentPlayer);
  }, 

  updatePlayersMarker(currentPlayer, nextPlayer) {
    $(`#player__${currentPlayer}--marker`).fadeOut();
    $(`#player__${nextPalyer.id}--marker`).fadeIn();
  },

  appendPlayerCorrectAnswer() {
    $(".answer-correct-banner").show();
  },

  appendPlayerWrongAnswer() {
    $(".answer-incorrect-banner").find('h3').html(this.clue.answer)
    $(".answer-incorrect-banner").show();
  },

  appendDailyDouble() {
    $('.questions__current--question--daily--double--container').append(`
    <p class="questions__current--question--daily--double"> DAILY DOUBLE! </p>
    <input class='questions__--daily--double--input' type='text' placeholder='Wager'>
    <button class='questions__--daily--double--button'>Submit Wager</button>`);
  }

};