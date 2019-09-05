import $ from "jquery";

export default {
  appendPlayersToDOM(players) {
    players.forEach((player) => {
      $(`#player__${player.id}--name`).text(player.name);
      $(`#player__${player.id}--score`).text(player.score);
    })
  }, // have a comma inbetween each function

  appendCategoriesToDOM(fourCategories, round) {
    fourCategories.forEach( (category, i) => {
      $('.round__catagory--prompt').after(
        `<button class="round__catagory" id="catagory-${i + 1}" data-id=${category.id}>${category.category}</button>
    <container class="round__point--container" style="display: none;">
      <p class="round__point--prompt">Select Point Value</p>
      <p class="round__point--value" id="point" data-id=100>${100 * round}</p>
      <p class="round__point--value" id="point" data-id=200>${200 * round}</p>
      <p class="round__point--value" id="point" data-id=300>${300 * round}</p>
      <p class="round__point--value" id="point" data-id=400>${400 * round}</p>
    </container>
    `)
    })
  }

};