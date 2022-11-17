// garden (parent) is a grid 5x6 displaying only a single month's garden. : check
// should be responsive : check
// grid would have boxes (soil) : check , needs sizing
// the boxes would be div class kids (soil): check
// listening for a mouse event ⬆️ And the user will select where the plant will grow on the grid
// We're going to record the date of the journal entry in the database, plant, and position in the grid

import React from "react";
import "./Garden.css";

const array = Array(30).fill(null);

const Garden = () => {
  function handleClick(e) {
    console.log(e);
  }
  return (
    <div className="garden">
      {array.map((soil, index) => (
        <div className="soil" key={index + 1} onClick={handleClick}>
          soil
        </div>
      ))}
    </div>
  );
};

export default Garden;
