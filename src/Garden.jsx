
// garden (parent) is a grid 5x6 displaying only a single month's garden. : check
// should be responsive : check
// grid would have boxes (soil) : check , needs sizing
// the boxes would be div class kids (soil): check
// listening for a mouse event ⬆️, get coordinates: check
// the user will select where the plant will grow on the grid
// We're going to record the date of the journal entry in the database, plant, and position in the grid

import React from "react";
import "./Garden.css";
import { writeToFireStore } from './initFirebase';
const array = Array(30).fill(null);

const Garden = () => {
  // function handleClick(e) {

  // }

  function selectPlot(index) {
    const userId = localStorage.getItem('userId');
    let month = new Date().getMonth().toString();
    let date = new Date().getDate().toString();
    const entry = JSON.parse(localStorage.getItem('entry'));
    entry[month][date].plot = index;

    writeToFireStore(entry, userId);
    localStorage.clear();
  }
  return (
    <div className="garden">
      {array.map((soil, index) => (
        <div className="soil" key={index + 1} onClick={() => selectPlot(index)}>
          soil
        </div>
      ))}
    </div>
  );
};

export default Garden;
