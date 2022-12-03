import { useState, useEffect } from 'react'
import './App.css'
import SplashPage from './Components/SplashPage'
import WriteEntry from './Components/WriteEntry'
import SelectPlant from './Components/SelectPlant'
import Garden from './Components/Garden'
import SeeEntry from './Components/SeeEntry'
import Register from './Components/Register'
import Loading from './Components/Loading'
import { getMonth } from "./initFirebase";


function App() {
  const [page, setPage] = useState(null)
  const [userId, setUserId] = useState(localStorage.getItem('userId') || null)
  const [date, setDate] = useState(new Date().getDate().toString())
  const [db, setDB] = useState(null)

  const thisYear = new Date().getFullYear()
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
    let lsEntry = JSON.parse(localStorage.getItem('entry'))

    if (lsEntry == null && userId) return 'write'
    if (lsEntry == null) return 'login'
    if (lsEntry[date]) {
      if (lsEntry[thisDay].plant) return 'garden'
      else if (lsEntry[thisDay].entry) return 'select'
      else if (lsEntry) return 'write'
      return 'login'
    } else {
      lsEntry = null
      localStorage.setItem('entry', null)
      if (userId) return 'write'
      return 'login'
    }
  }

  function returnCurrentPage() {
    if (db) {
      if (db[thisYear] && db[thisYear][thisMonth] && db[thisYear][thisMonth][thisDay]) {
        if (db[thisYear][thisMonth][thisDay].plant) return 'garden'
        else if (db[thisYear][thisMonth][thisDay].entry) return 'select'
      } else if (db[thisMonth] && db[thisMonth][thisDay]) {
        if (db[thisMonth][thisDay].plant) return 'garden'
        else if (db[thisMonth][thisDay].entry) return 'select'
      }
      else {
        return returnPageFromLocalStorage()

      }
    }
    return returnPageFromLocalStorage()
  }

  function updateUserId(uId) {
    //checkPreviousEntry(uId)
    setUserId(uId)
  }


  function goNextPage(page) {
    setPage(page)
  }


  if (page === 'login') return <SplashPage goNextPage={goNextPage} updateUserId={updateUserId} />
  if (page === 'register') return <Register goNextPage={goNextPage} updateUserId={updateUserId} />
  if (page === 'write') return <WriteEntry goNextPage={goNextPage} userId={userId} promptNumber={Math.floor(Math.random() * 7)} />
  if (page === 'select') return <SelectPlant goNextPage={goNextPage} />
  if (page === 'garden') return <Garden goNextPage={goNextPage} db={db} />
  if (page === 'see') return <SeeEntry goNextPage={goNextPage} />
  return <Loading />



}

export default App;
