import { useState } from 'react'
import { writeNewDoc } from '../initFirebase'
import SeeEntry from './SeeEntry'
import '../Styles/Garden.css'

const Garden = ({ db }) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const YEAR = new Date().getFullYear().toString()
  const TODAY = new Date().getDate().toString()
  const [month, setMonth] = useState(new Date().getMonth().toString())
  let arr = new Array(30).fill(true)
  const [showEntry, setSee] = useState(false)
  const [ls, setLs] = useState(
    localStorage.getItem('db') ? JSON.parse(localStorage.getItem('db')) : null
  )

  function createNewDB(entry) {
    const newDb = {}
    newDb[YEAR] = {}
    newDb[YEAR][month] = {}
    newDb[YEAR][month][TODAY] = entry[TODAY]
    writeNewDoc(newDb, userId)
    localStorage.setItem('db', JSON.stringify(newDb))
    setLs(newDb)
  }

  function selectPlot(index) {
    const entry = JSON.parse(localStorage.getItem('entry'))
    if (entry && entry[TODAY].entry) {
      const userId = localStorage.getItem('userId')
      entry[TODAY].plot = index

      if (db) {
        //is it month or year? Month:
        if (Object.keys(db)[0] < 12) {
          const newStyle = {}
          newStyle[YEAR] = db

          if (!newStyle[YEAR][month]) newStyle[YEAR][month] = {}
          newStyle[YEAR][month][TODAY] = entry
          localStorage.setItem('db', JSON.stringify({ ...db[YEAR] }))
          writeNewDoc(newStyle, userId)
        } else {
          //year exists but month might not
          if (!db[YEAR][month]) db[YEAR][month] = {}
          db[YEAR][month][TODAY] = entry[TODAY]
          writeNewDoc(db, userId)
          localStorage.setItem('db', JSON.stringify({ ...db[YEAR] }))
          setLs(db)
        }
      } else {
        createNewDB(entry)
      }
      localStorage.setItem('entry', null)
      //ls.entry = null
    }
  }
  function view(currMonth, entry) {
    setSee(
      <SeeEntry
        entry={currMonth[entry]}
        month={month}
        closeSee={closeSee}
        date={entry}
      />
    )
  }
  function closeSee() {
    setSee(false)
  }

  function makeArr() {
    if (ls) {
      const entryArray = ls[YEAR] ? ls[YEAR][month] : ls[month]
      console.log('ENTRY ARRAY', entryArray)
      return arr.map((s, index) => {
        for (let entryIndex in entryArray) {
          console.log(entryIndex, entryArray[entryIndex])
          if (entryArray[entryIndex].plot == index) {
            let stage = Math.min(3, TODAY - entryIndex)
            let plant = entryArray[entryIndex].plant
            return (
              <div
                className='soil'
                key={index + 1}
                onClick={() => view(ls[month], entryIndex)}
              >
                <div className={plant + '-' + stage + ' plant'}></div>
              </div>
            )
          }
        }
        return (
          <div
            className='soil'
            key={index + 1}
            onClick={() => selectPlot(index)}
          ></div>
        )
      })
    } else {
      return (arr = arr.map((s, index) => (
        <div
          className='soil'
          key={index + 1}
          onClick={() => selectPlot(index)}
        ></div>
      )))
    }
  }
  arr = makeArr()

  return (
    <div>
      {showEntry}
      <header>
        {ls[month - 1] && (
          <button onClick={() => setMonth(month - 1)}>{'<'}</button>
        )}
        <h3>{months[month]}</h3>
        {ls[month + 1] && (
          <button onClick={() => setMonth(month + 1)}>{'<'}</button>
        )}
      </header>
      <div className='garden'>{arr}</div>
    </div>
  )
}

export default Garden
