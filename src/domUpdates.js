import $ from "jquery";

export default {
  appendPlayersToDOM(players) {
    players.forEach((player) => {
      $(`#player__${player.id}--name`).text(player.name);
      $(`#player__${player.id}--score`).text(player.score);
    })
  }, // have a comma inbetween each function

  appendCatigoriesToDOM(fourCategories){
    fourCategories.forEach( (category, i) => {
      $('.round__catagory--prompt').after(
    `<button class="round__catagory" id="catagory-${i + 1}" $>${category.category}</button>
    <container class="round__point--container" style="display: none;">
      <p class="round__point--prompt">Select Point Value</p>
      <p class="round__point--value" id="point-100" data-id:100>100</p>
      <p class="round__point--value" id="point-200" data-id:200>200</p>
      <p class="round__point--value" id="point-300" data-id:300>300</p>
      <p class="round__point--value" id="point-400" data-id:400>400</p>
    </container>
    `)
    })
  }


  // $('.round__catagory--prompt').after(`
  //   </container>
  //     <p class="round__point--value" id="point-400" data-id:400>400</p>
  //     <p class="round__point--value" id="point-300" data-id:300>300</p>
  //     <p class="round__point--value" id="point-200" data-id:200>200</p>
  //     <p class="round__point--value" id="point-100" data-id:100>100</p>
  //     <p class="round__point--prompt">Select Point Value</p>
  //   <container class="round__point--container" style="display: none;">
  //   <button class="round__catagory" id="catagory-${i + 1}" $>${category.category}</button>`
  //   )

  // buildCategory(category) => {
  // return `<button class="round__catagory" id="catagory-two data-id:${category.id} $">${category.category}</button>
  //   <container class="round__point--container" style="display: none;">
  //     <p class="round__point--prompt">Select Point Value</p>
  //     <p class="round__point--value" id="point-100" data-id:100>100</p>
  //     <p class="round__point--value" id="point-200" data-id:200>200</p>
  //     <p class="round__point--value" id="point-300" data-id:300>300</p>
  //     <p class="round__point--value" id="point-400" data-id:400>400</p>
  //   </container>`
  // }

  //  getCategoryTitles() {
  //   return this.fourCategories.map(category => category.category)
  // }


};