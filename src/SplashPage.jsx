import React from 'react'
import './SplashPage.css'

const SplashPage = ({ goNextPage }) => {


  return (
    <div className='splash'>
      <h1>Happy<span>Garden</span></h1>
      <img src="https://dummyimage.com/200x150/0ddd8d/#74a09.png&text=pixel+art+here" alt="" />
      <p>Visualize the effect of mindfulness by growing plants.</p>
      <p>Add a positive thought, gratitude affirmation or inspirational phrase.</p>
      <p>Come back daily to 'feed' your plants with positivity.</p>
      <p>Or simply to feel some peace and serenity.</p>
    </div>
  )
}

export default SplashPage