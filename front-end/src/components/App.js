import Grid from '../scripts/Grid'
import React, { useState } from 'react';
import '../styles/grid.css'

function App() {
  
  const SIZE_X = 10;
  const SIZE_Y = 10;
  const GRID_CONTAINER_SIZE = {gridTemplateColumns: `repeat(${SIZE_X}, 1fr)`, gridTemplateRows: `repeat(${SIZE_Y}, 1fr)`};
  
  const [world, setWorld] = useState(new Grid(SIZE_X, SIZE_Y));

  return (
    <div 
    className='grid-container' 
    style={GRID_CONTAINER_SIZE}>
      {world.draw()}
    </div>
  );
}


export default App;
