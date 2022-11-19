import React from 'react'
import './SplashPage.css'
import Login from './Login'

const SplashPage = ({ goNextPage, updateUserId }) => {


  return (
    <>
      <div className='splash'>
        <h1>Happy<span>Garden</span></h1>
        <p>Visualize the effect of mindfulness by growing plants.  Add a positive thought, gratitude affirmation or inspirational phrase.  Come back daily to 'feed' your plants with positivity.  Or simply to feel some peace and serenity.</p>
        <img src="https://dummyimage.com/150x150/ddd8c4/69a297.png&text=pixel+art+here" alt="" className='splash-img' />
      </div>
      <Login goNextPage={goNextPage} updateUserId={updateUserId} />
    </>
  )
}

export default SplashPage