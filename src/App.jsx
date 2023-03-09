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
    //const [date, setDate] = useState(new Date().getDate().toString())
    const [db, setDB] = useState(undefined)

    const thisYear = new Date().getFullYear().toString()
    const thisMonth = new Date().getMonth().toString()
    const thisDay = new Date().getDate().toString()

    async function fetchDB() {
        let res = await getMonth(userId)
        localStorage.setItem('db', JSON.stringify(res))
        setDB(res)
    }

    useEffect(() => {
        console.log('fetching db')
        fetchDB()

    }, [])

    useEffect(() => {
        console.log('DB', db)
        setPage(returnPage())
        console.log('page is', page)
    }, [db])

    function goNextPage(page) {
        setPage(page)
    }

    const entry = JSON.parse(localStorage.getItem('entry'))

    function returnPage() {
        console.log('owg', thisDay)
        if (userId) {
            if (db == undefined) return 'loading'
            if (db && db[thisYear] && db[thisYear][thisMonth] && db[thisYear][thisMonth][thisDay]) {
                return 'garden'
            }
            if (entry) {
                console.log('entry', entry)
                if (entry[thisDay]) {
                    if (entry[thisDay].plant) return 'garden'
                    else if (entry[thisDay].entry) return 'select'
                } else {
                    localStorage.removeItem('entry')
                }
            }
            return 'write'
        }
        return 'login'
    }
    if (page == null) return <Loading />
    if (page === 'login') return <SplashPage goNextPage={goNextPage} updateUserId={updateUserId} />
    if (page === 'register') return <Register goNextPage={goNextPage} updateUserId={updateUserId} />
    if (page === 'write') return <WriteEntry goNextPage={goNextPage} userId={userId} promptNumber={Math.floor(Math.random() * 7)} />
    if (page === 'select') return <SelectPlant goNextPage={goNextPage} />
    if (page === 'garden') return <Garden goNextPage={goNextPage} db={db} />
    if (page === 'see') return <SeeEntry goNextPage={goNextPage} />

}
export default App