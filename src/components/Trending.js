import React from 'react'

function Trending() {
  return (
     <div>
  <ul class="cards">
    <li class="cards_item">
      <div class="card">
        <div class="card_image">
          <img src="https://picsum.photos/500/300/?image=10" />

          </div>
        <div class="card_content">
          <h2 class="card_title">Movie Name</h2>
          <p class="card_text">Movie Description</p>
          <button class="btn card_btn">Show details</button>
        </div>
      </div>
    </li>
    </ul>
    </div>
  )
}

export default Trending