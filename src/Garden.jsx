import { useState, useRef } from "react";
import "./Garden.css";
import { writeToFireStore, writeNewDoc } from './initFirebase'
import SeeEntry from "./SeeEntry";

const Garden = ({ goNextPage, db }) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const today = new Date().getDate().toString()
  const month = new Date().getMonth().toString()
  let arr = new Array(30).fill(true)

  const [showEntry, setSee] = useState(false)
  const [ls, setLs] = useState(localStorage.getItem('db') ? JSON.parse(localStorage.getItem('db')) : null)

  function selectPlot(index) {
    const entry = JSON.parse(localStorage.getItem('entry'))
    if (entry) {
      const userId = localStorage.getItem('userId')
      entry[today].plot = index
      if (db) {
        //merge entry with db
        db[month][today] = entry[today]
        console.log(db)
        writeToFireStore(db, userId)

      } else {
        writeNewDoc(entry, userId)
        //db should be empty??
        console.log(db)
        localStorage.setItem('db', JSON.stringify({ ...db, entry }))
      }
      localStorage.setItem('entry', null)
      ls.entry = null
      console.log(db)
      //update db and setLS
      localStorage.setItem('db', JSON.stringify(db))
      setLs(db)
    }
  }
  function view(entry) {
    console.log(entry.plant)
    setSee(<SeeEntry entry={entry} month={month} closeSee={closeSee} />)
    console.log(showEntry)
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
            let plant = ls[month][entry].plant
            return (
              <div className='soil' key={index + 1} onClick={() => view(ls[month][entry])}>
                <div className={plant + '-' + stage + ' plant'} ></div>
              </div>
            )
          }
        }
        return <div className="soil" key={index + 1} onClick={() => selectPlot(index)}></div>
      })
    } else {
      return arr = arr.map((s, index) => <div className="soil" key={index + 1} onClick={() => selectPlot(index)}></div>)
    }
  }
  arr = makeArr()

  return (
    <div>
      {showEntry}
      <header>
        <button>{'<'}</button>
        <h3>{months[month]}</h3>

      </header>
      <div className="garden">
        {arr}
      </div >
    </div>
  );
};

export default Garden;
