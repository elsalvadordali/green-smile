import { useState, useEffect } from 'react'
import './App.css'
import SplashPage from './SplashPage'
import Login from './Login'
import WriteEntry from './WriteEntry'
import SelectPlant from './SelectPlant'
import Garden from './Garden'
import SeeEntry from './SeeEntry'
import Register from './Register'
import { getMonth } from "./initFirebase";


function App() {
  const [page, setPage] = useState(null)
  const [userId, setUserId] = useState(localStorage.getItem('userId') || null)
  const [db, setDB] = useState(null)

  const thisMonth = new Date().getMonth()
  const thisDay = new Date().getDate()

  useEffect(() => {
    if (userId) {
      async function fetchDB() {
        let res = await getMonth(userId)
        localStorage.setItem('db', JSON.stringify(res))
        setDB(res)
      }
      fetchDB()
    }
  }, [userId])

  useEffect(() => {
    if (db) {
    }
    setPage(returnCurrentPage())

  }, [db])

  function returnPageFromLocalStorage() {
    let ls = JSON.parse(localStorage.getItem('entry'))
    if (ls == null && userId) return 'write'
    if (ls == null) return 'login'
    if (ls[thisMonth][thisDay].plant) return 'garden'
    if (ls[thisMonth][thisDay].entry) return 'select'
    if (ls) return 'write'
    return 'login'
  }

  function returnCurrentPage() {
    if (db) {
      if (db[thisMonth][thisDay].plant) return 'garden'
      if (db[thisMonth][thisDay].entry) return 'select'
      return 'write'
    } else {
      return returnPageFromLocalStorage()
    }
  }

  function updateUserId(uId) {
    //checkPreviousEntry(uId)
    setUserId(uId)
  }


  function goNextPage(page) {
    setPage(page)
  }
  return (
    <div className="App">
      {page === 'login' && <SplashPage goNextPage={goNextPage} updateUserId={updateUserId} />}
      {page === 'register' && <Register goNextPage={goNextPage} updateUserId={updateUserId} />}
      {page === 'write' && <WriteEntry goNextPage={goNextPage} userId={userId} promptNumber={Math.floor(Math.random() * 7)} />}
      {page === 'select' && <SelectPlant goNextPage={goNextPage} />}
      {page === 'garden' && <Garden goNextPage={goNextPage} db={db} />}
      {page === 'see' && <SeeEntry goNextPage={goNextPage} />}
    </div>
  )

}

export default App;
