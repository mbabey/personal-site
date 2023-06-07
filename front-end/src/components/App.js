import Grid from '../scripts/Grid'
import React, { useState } from 'react';

const SIZE_X = 10;
const SIZE_Y = 10;

function App() {

  const [world, setWorld] = useState(new Grid(SIZE_X, SIZE_Y));

  return (
    <>
      {world.draw()}
    </>
  );
}


export default App;
