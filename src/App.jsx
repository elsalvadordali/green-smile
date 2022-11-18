import { useState } from 'react'
import './App.css'
import SplashPage from './SplashPage'
import Login from './Login'
import WriteEntry from './WriteEntry'
import SelectPlant from './SelectPlant'
import Garden from './Garden'
import SeeEntry from './SeeEntry'
import Register from './Register'

function App() {
  const [userId, setUserId] = useState(localStorage.getItem('userId') || null)
  const [page, setPage] = useState(userId ? 'write' : 'splash')

  function goNextPage(page) {
    setPage(page)
  }
  function updateUserId(userId) {
    setUserId(userId)
  }

  return (
    <div className="App">
      {page === 'splash' && <SplashPage goNextPage={goNextPage} updateUserId={updateUserId} />}
      {page === 'register' && <Register goNextPage={goNextPage} updateUserId={updateUserId} />}
      {page === 'write' && <WriteEntry goNextPage={goNextPage} userId={userId} promptNumber={Math.floor(Math.random() * 7)} />}
      {page === 'select' && <SelectPlant goNextPage={goNextPage} />}
      {page === 'garden' && <Garden goNextPage={goNextPage} />}
      {page === 'see' && <SeeEntry goNextPage={goNextPage} />}


    </div>
  );
}

export default App;
