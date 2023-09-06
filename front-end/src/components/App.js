import Grid from '../scripts/Grid'
import Entity from '../scripts/Entity';
import React, { useState, useEffect } from 'react';
import '../styles/grid.css'

function App() {

  // The size of the world grid.
  const SIZE_X = 10;
  const SIZE_Y = 10;

  // The grid displayed on the screen.
  const world = new Grid(SIZE_X, SIZE_Y);

  // The red entity (and the yellow target, set opposite).
  const entity = create_entity_and_target(SIZE_X, SIZE_Y, world);

  // CSS for the grid.
  const GRID_CONTAINER_SIZE = { gridTemplateColumns: `repeat(${SIZE_X}, 1fr)`, gridTemplateRows: `repeat(${SIZE_Y}, 1fr)` };
  
  const [worldImage, setWorldImage] = useState(world.draw());

  useEffect(() => {
    entity.dijkstra_pathfind();

    const interval_id = setInterval(() => {

      entity.move();
      setWorldImage(world.draw());
      console.log('redrawn');
    }, 10000);

    // If the entity is at the target location, stop the iteration.
    if (entity.get_location().get_targeted() === true) {
      clearInterval(interval_id);
    }

    return () => clearInterval(interval_id);
  }, []);

  return (
    <div
      className='grid-container'
      style={GRID_CONTAINER_SIZE}>
      {worldImage}
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
function create_entity_and_target(size_x, size_y, world) {
  const start_location = get_entity_start_location(size_x, size_y);
  const target_location = get_target_start_location(size_x, size_y, start_location);

  const entity_start_cell = world.get_cell(start_location.edge_cell_horizontal, start_location.edge_cell_vertical);
  const entity_target_cell = world.get_cell(target_location.edge_cell_horizontal, target_location.edge_cell_vertical);

  const entity = new Entity(world, entity_start_cell, entity_target_cell);

  return entity;
}

/**
 * Get the starting location for the Entity. The Entity will start in a Cell at the edge of the Grid.
 * @param {Integer} size_x the X dimension of the Grid.
 * @param {Integer} size_y the Y dimension of the Grid.
 * @returns the starting coordinates of the Entity.
 */
function get_entity_start_location(size_x, size_y) {
  let edge_cell_horizontal;
  let edge_cell_vertical;

  // Pick a random edge Cell on the vertical axis and horizontal axis.
  edge_cell_horizontal = Math.floor(Math.random() * size_x);
  edge_cell_vertical = Math.floor(Math.random() * size_y);

  /* If the random vertical Cell is not the top or the bottom, 
     pick either the left or the right side of the Grid for the horizontal Cell. */
  if (!(edge_cell_horizontal === 0 || edge_cell_horizontal === size_x - 1)) {
    if (edge_cell_vertical >= size_y / 2) {
      edge_cell_vertical = size_y - 1;
    } else {
      edge_cell_vertical = 0;
    }
  }

  return { edge_cell_horizontal, edge_cell_vertical };
}

/**
 * Get the target Cell's start location based on the Entity's start location.
 * The target Cell's start location is opposite the Entity's start location.
 * @param {Integer} size_x the X dimension of the Grid.
 * @param {Integer} size_y the Y dimension of the Grid.
 * @param {JSON Object} entity_start_location the coordinates of the Entity's start location.
 * @return the start location for the target Cell.
 */
function get_target_start_location(size_x, size_y, entity_start_location) {
  const entity_horizontal = entity_start_location.edge_cell_horizontal;
  const entity_vertical = entity_start_location.edge_cell_vertical;

  const edge_cell_horizontal = (size_x - 1) - entity_horizontal;
  const edge_cell_vertical = (size_y - 1) - entity_vertical;

  return { edge_cell_horizontal, edge_cell_vertical };
}

export default App;
