import React from 'react'
import './SplashPage.css'
import Login from './Login'
import Register from './Register'
import { useState } from 'react'

const SplashPage = ({ goNextPage, updateUserId }) => {
  const [showLogin, setLogin] = useState(true)

  function toggleLogin() {
    setLogin(!showLogin)
  }

  return (
    <>
      <div className='splash'>
        <h1>Happy<span>Garden</span></h1>
        <p>Visualize the effect of mindfulness by growing plants</p>
        <div className='splash-img'><div className='plant plum-3'></div></div>
      </div>
      {showLogin && <Login goNextPage={goNextPage} updateUserId={updateUserId} toggleLogin={toggleLogin} />}
      {showLogin == false && <Register goNextPage={goNextPage} updateUserId={updateUserId} toggleLogin={toggleLogin} />}

    </>
  )
}

export default SplashPage