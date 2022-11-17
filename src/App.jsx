import { useState } from 'react'
import './App.css'
import Login from './Login'
import WriteEntry from './WriteEntry'
import SelectTree from './SelectTree'
import Garden from './Garden'
import SeeEntry from './SeeEntry'
import Register from './Register'


function App() {
  const [count, setCount] = useState(0)
  const [page, setPage] = useState('login')

  function goNextPage(page) {
    console.log(page)
    setPage(page)
  }

  return (
    <div className="App"> 
      {page === 'login' && <Login goNextPage={goNextPage} />}
      {page === 'register' && <Register goNextPage={goNextPage}  />}
      {page === 'write' && <WriteEntry goNextPage={goNextPage} />} 
      {page === 'select' && <SelectTree goNextPage={goNextPage} />} 
      {page === 'garden' && <Garden goNextPage={goNextPage} />} 
      {page === 'see' && <SeeEntry goNextPage={goNextPage} />}

      <button onClick={() => goNextPage('register')}>Go next</button>

    </div>
  )
}

export default App
