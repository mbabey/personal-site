import Grid from '../scripts/Grid'
import Entity from '../scripts/Entity';
import React, { useState } from 'react';
import '../styles/grid.css'

function App() {

  const SIZE_X = 20;
  const SIZE_Y = 20;

  const GRID_CONTAINER_SIZE = { gridTemplateColumns: `repeat(${SIZE_X}, 1fr)`, gridTemplateRows: `repeat(${SIZE_Y}, 1fr)` };
  const world = new Grid(SIZE_X, SIZE_Y);

  const [entity, setEntity] = useState(create_entity(SIZE_X, SIZE_Y, world));

  return (
    <div
      className='grid-container'
      style={GRID_CONTAINER_SIZE}>
      {world.draw()}
    </div>
  );
}

/**
 * Create an Entity and place it in a Cell at the edge of the Grid.
 * @param {Integer} size_x the X dimension of the Grid.
 * @param {Integer} size_y the Y dimension of the Grid.
 * @param {Grid} world the Grid on which the Entity shall exist.
 * @returns the Entity.
 */
function create_entity(size_x, size_y, world) {
  const start_location = get_start_location(size_x, size_y);
  console.log(start_location);
  const start_cell = world.get_cell(start_location.edge_cell_horizontal, start_location.edge_cell_vertical);

  const entity = new Entity(world, start_cell);

  return entity;
}

/**
 * Get the starting location for the Entity. The Entity will start in a Cell at the edge of the Grid.
 * @param {Integer} size_x the X dimension of the Grid.
 * @param {Integer} size_y the Y dimension of the Grid.
 * @returns the starting coordinates of the Entity.
 */
function get_start_location(size_x, size_y) {
  let edge_cell_horizontal;
  let edge_cell_vertical;

  // Pick a random edge Cell on the vertical axis and horizontal axis.
  edge_cell_horizontal = Math.floor(Math.random() * size_y);
  edge_cell_vertical = Math.floor(Math.random() * size_x);

  /* If the random vertical Cell is not the top or the bottom, 
     pick either the left or the right side of the Grid for the horizontal Cell. */
  if (!(edge_cell_horizontal === 0 || edge_cell_horizontal === size_y - 1)) {
    if (edge_cell_vertical >= size_x / 2) {
      edge_cell_vertical = size_x - 1;
    } else {
      edge_cell_vertical = 0;
    }
  }

  return { edge_cell_vertical, edge_cell_horizontal };
}

export default App;
