
// garden (parent) is a grid 5x6 displaying only a single month's garden. : check
// should be responsive : check
// grid would have boxes (soil) : check , needs sizing
// the boxes would be div class kids (soil): check
// listening for a mouse event ⬆️, get coordinates: check
// the user will select where the plant will grow on the grid
// We're going to record the date of the journal entry in the database, plant, and position in the grid

import React from "react";
import "./Garden.css";
import { writeToFireStore } from './initFirebase'
const array = Array(30).fill(null);

const Garden = () => {
  function handleClick(e) {
    /*
    // get parent(garden)
    const parentEl = e.target.parentNode;
    const pCords = parentEl.getBoundingClientRect();
    const parentTop = pCords.top;
    const parentLeft = pCords.left;
    const soil = e.target;
    const soilCords = soil.getBoundingClientRect();
    const soilTop = soilCords.top;
    const soilLeft = soilCords.left;

    console.log('test', e.x, e.y)
    console.log(pCords, soilCords)
    // calculate mouse position
    const mouseTop = soilTop - parentTop;
    const mouseLeft = soilLeft - parentLeft;
    const coordinates = { top: mouseTop, left: mouseLeft };
    console.log(coordinates);
    */
  }

  function selectPlot(index) {
    const entry = JSON.parse(localStorage.getItem('entry'))
    const userId = localStorage.getItem('userId')
    entry.plot = index
    console.log(entry)
    writeToFireStore(entry, userId)
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
