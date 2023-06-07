import Grid from '../scripts/Grid'
import React, { useState } from 'react';

const SIZE_X = 10;
const SIZE_Y = 10;

function App() {

  const [world, setWorld] = useState(null);


  return (
    <>
      {create_grid(world, setWorld)}
    </>
  );
}

function create_grid(world, setWorld) {
  setWorld(new Grid(SIZE_X, SIZE_Y));
  // for each Grid Cell, need to create an HTML element
  // HTML elements are updated each time the Grid is changed.
  world.draw();
}

export default App;
