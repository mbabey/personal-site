import Grid from '../scripts/Grid'
import Entity from '../scripts/Entity';
import React, { useState } from 'react';
import '../styles/grid.css'

function App() {

  const SIZE_X = 10;
  const SIZE_Y = 10;
  const GRID_CONTAINER_SIZE = { gridTemplateColumns: `repeat(${SIZE_X}, 1fr)`, gridTemplateRows: `repeat(${SIZE_Y}, 1fr)` };

  const [world, setWorld] = useState(new Grid(SIZE_X, SIZE_Y));
  const [entity, setEntity] = useState(create_entity(SIZE_X, SIZE_Y, world));

  return (
    <div
      className='grid-container'
      style={GRID_CONTAINER_SIZE}>
      {world.draw()}
    </div>
  );
}

function create_entity(size_x, size_y, world) {
  const start_location = get_start_location(size_x, size_y);
  const start_cell = world.get_cell(start_location.edge_cell_x, start_location.edge_cell_y);

  const entity = new Entity(world, start_cell);

  return entity;
}

function get_start_location(size_x, size_y) {
  // Pick a random edge Cell; put an Entity in the edge Cell.
  // If the random Cell is the top or the bottom, pick a random cell along the cross axis.
  let edge_cell_y = Math.floor(Math.random() * size_y);
  let edge_cell_x;
  if (edge_cell_y === 0 || edge_cell_y === size_y - 1) {
    edge_cell_x = Math.floor(Math.random() * size_x);
  } else { // Otherwise, pick either the left or the right side of the Grid.
    const res = Math.random();
    if (res >= 0.5) {
      edge_cell_x = size_x - 1;
    } else {
      edge_cell_x = 0;
    }
  }

  return { edge_cell_x, edge_cell_y };
}

export default App;
