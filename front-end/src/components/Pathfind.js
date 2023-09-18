import Grid from '../scripts/Grid'
import Entity from '../scripts/Entity';
import PriorityQueue from '../scripts/PriorityQueue';
import React, { useState, useEffect } from 'react';

import '../styles/pathfind.css'

function Pathfind() {

  // The millisecond interval at which the Entity will move from Cell to Cell.
  const INTERVAL_MS = 100;

  // The size of the world grid.
  const SIZE_X = 20;
  const SIZE_Y = 20;

  // CSS for the grid.
  const GRID_CONTAINER_SIZE = { gridTemplateColumns: `repeat(${SIZE_X}, 1fr)`, gridTemplateRows: `repeat(${SIZE_Y}, 1fr)` };

  const [worldImage, setWorldImage] = useState();

  useEffect(() => {
    async function run() {
      // Create the Grid.
      const world = await Grid.async_create_grid(SIZE_X, SIZE_Y);

      // Create the Entity and it's target (opposite the Entity).
      const entity = await create_entity_and_target(SIZE_X, SIZE_Y, world);

      // Run the Dijkstra pathfinding algorithm.
      const path_info = await dijkstra_pathfind(entity, entity.get_target(), world);

      // Set the path for the Entity to follow.
      entity.set_path(path_info.s_path);

      const interval_id = setInterval(() => {

        // Move the Entity along the path and redraw the World.
        entity.move();
        setWorldImage(world.draw());

        // If the entity is at the target location, stop the iteration.
        if (entity.get_location().get_targeted() === true) {
          clearInterval(interval_id);
        }
      }, INTERVAL_MS);

      return () => clearInterval(interval_id);
    }

    return () => run();
    // eslint-disable-next-line
  }, []);

  return (
    <div
      id='pathfind'
      className='grid-container'
      style={GRID_CONTAINER_SIZE}
    >
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
  return new Promise((resolve) => {
    const start_location = get_entity_start_location(size_x, size_y);
    const target_location = get_target_start_location(size_x, size_y, start_location);

    const entity_start_cell = world.get_cell(start_location.edge_cell_horizontal, start_location.edge_cell_vertical);
    const entity_target_cell = world.get_cell(target_location.edge_cell_horizontal, target_location.edge_cell_vertical);

    const entity = new Entity(world, entity_start_cell, entity_target_cell);

    resolve(entity);
  });
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

/**
 * Perform a Dijkstra pathfinding algorithm to find the shortest path from the Entity to the target.
 * @param {Entity} entity the Entity.
 * @param {Cell} target the Entity's target.
 * @param {Grid} world the World in which the pathfind takes place.
 * @returns the shortest path from the Entity to the target and the distance of that path.
 */
function dijkstra_pathfind(entity, target, world) {
  return new Promise((resolve) => {
    const distances = {};
    const path = {};
    const priorityQueue = new PriorityQueue();
    const initial_cell = entity.get_location();

    // Set up the set of unvisited Cells. Set the distance of the currently populated Cell to 0.
    for (let i = 0, row = 0; i < world.get_size(); ++i) {
      if (i !== 0 && i % world.get_size_x() === 0) {
        ++row;
      }

      const current_cell = world.get_cell(i % world.get_size_x(), row);

      distances[current_cell.id] = Infinity;
      path[current_cell.id] = null;
    }
    distances[initial_cell.id] = 0;

    // Initialize the pQ with the initial cell and the initial cell distance (0).
    priorityQueue.enqueue(initial_cell, distances[initial_cell.id]);

    // Main loop.
    while (!priorityQueue.isEmpty()) {
      // Get the nearest cell and its neighbours.
      const current_cell = priorityQueue.dequeue();
      const neighbours = world.get_neighbours(current_cell);

      for (let n in neighbours) {
        const neighbour = neighbours[n];
        // Get the abs. val. of the difference in altitude between a neighbour and the current cell.
        const weight = Math.abs(current_cell.get_altitude() - neighbour.get_altitude());

        // Total distance is the distance from the current cell to the initial cell + the change in alt.
        const totalDistance = distances[current_cell.id] + weight;
        // If the total distance is less than the known distance, a shorter path has been found.
        if (totalDistance < distances[neighbour.id]) {
          // Update the known distance and the path.
          distances[neighbour.id] = totalDistance;
          path[neighbour.id] = current_cell;

          // Add the neighbour to the queue with the new distance as priority.
          priorityQueue.enqueue(neighbour, totalDistance);
        }
      }
    }

    // The shortest path is the stored path from the target to the intial cell reversed.
    const s_path = [];
    for (let curr = target; curr !== null; curr = path[curr.id]) {
      s_path.unshift(curr);
    }

    resolve({
      s_path,
      length: distances[target.id]
    });
  });
}

export default Pathfind;