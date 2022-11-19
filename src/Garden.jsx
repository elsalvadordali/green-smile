import { setPersistence } from "firebase/auth";
import { useState } from "react";
import "./Garden.css";
import { writeToFireStore, writeNewDoc } from './initFirebase'

const Garden = ({ goNextPage, db }) => {
  const ls = JSON.parse(localStorage.getItem('db'))
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const [month, setMonth] = useState(new Date().getMonth().toString())

  let date = new Date().getDate().toString()

  function selectPlot(index) {
    const entry = JSON.parse(localStorage.getItem('entry'))
    if (entry) {
      const userId = localStorage.getItem('userId')
      entry[month][date].plot = index
      if (db) {
        writeToFireStore(entry, userId)

      } else {
        writeNewDoc(entry, userId)
        localStorage.setItem('db', JSON.stringify({ ...db, entry }))
        console.log(JSON.parse(localStorage.getItem('db')))
        //localStorage.setItem('entry', null)

      }

    }
  }
  function view() {
    goNextPage('seeEntry')
  }

  const today = new Date().getDate()
  let arr = new Array(30).fill(true)
  if (ls) {
    arr = arr.map((s, index) => {
      for (let entry in ls[month]) {
        if (ls[month][entry].plot == index) {
          let stage = Math.min(3, today - entry)
          let plant = ls[month][entry].plant
          return (
            <div className='soil' key={index + 1} onClick={() => view(index)}>
              <div className={plant + '-' + stage + ' plant'} ></div>
            </div>
          )
        }
      }
      return <div className="soil" key={index + 1} onClick={() => selectPlot(index)}></div>
    })
  } else {
    arr = arr.map((s, index) => <div className="soil" key={index + 1} onClick={() => selectPlot(index)}></div>)
  }
  return (
    <div>
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
