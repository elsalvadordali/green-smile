import { useState } from 'react'
import '../Styles/Garden.css'
import { writeToFireStore, writeNewDoc } from '../initFirebase'
import SeeEntry from './SeeEntry'

const Garden = ({ db }) => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  const today = new Date().getDate().toString()
  const [month, setMonth] = useState(new Date().getMonth().toString())
  let arr = new Array(30).fill(true)

  const [showEntry, setSee] = useState(false)
  const [ls, setLs] = useState(
    localStorage.getItem('db') ? JSON.parse(localStorage.getItem('db')) : null
  )

  function selectPlot(index) {
    const entry = JSON.parse(localStorage.getItem('entry'))
    console.log('ENTRYYYY', entry)
    if (entry && entry[today].entry) {
      const userId = localStorage.getItem('userId')
      entry[today].plot = index
      if (db) {
        console.log('old DB')
        db[month][today] = entry[today]
        writeToFireStore(db, userId)
        localStorage.setItem('db', JSON.stringify(db))
        setLs(db)
      } else {
        const newDb = {}
        newDb[month] = {}
        newDb[month][today] = entry[today]
        console.log('NEW DB', newDb)
        writeNewDoc(newDb, userId)
        localStorage.setItem('db', JSON.stringify(newDb))
        setLs(newDb)
      }
      localStorage.setItem('entry', null)
      console.log(ls)
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
      return arr.map((s, index) => {
        for (let entry in ls[month]) {
          if (ls[month][entry].plot == index) {
            let stage = Math.min(3, today - entry)
            console.log(entry)
            let plant = ls[month][entry].plant
            return (
              <div
                className='soil'
                key={index + 1}
                onClick={() => view(ls[month], entry)}
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
