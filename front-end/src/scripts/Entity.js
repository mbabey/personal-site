import Cell from './Cell';
import PriorityQueue from './PriorityQueue';

/**
 * Entity.
 * The Entity moves across the Grid from Cell to Cell in the most efficient way.
 * The most efficient way is the way that minimizes the change in altitude.
 */
class Entity {

  // A Grid: the grid on which the Entity exists.
  #world;
  
  // A Cell: The location of the Entity on the grid.
  #location;
  
  // A Cell: The target cell for the Entity.
  #target;

  // The shortest path from the start location to the target.
  #path;

  /**
   * Construct an Entity.
   * @param {Grid} grid the Grid on which the Entity will exist
   * @param {Cell} cell the Cell in which the Entity starts
   * @param {Cell} target the target Cell for the Entity
   */
  constructor(grid, cell, target) {
    this.#world = grid;
    this.#location = cell;
    this.#location.toggle_populated();
    this.#target = target;
    this.#target.toggle_targeted();
  }

  /**
   * Get the Entity's current Cell.
   * @returns the Entity's current Cell
   */
  get_location() {
    return this.#location;
  }

  /**
   * Set the Entity's Cell.
   * @param {Cell} cell the Entity's new Cell.
   */
  set_location(cell) {
    this.#location = cell
  }

  /**
   * Move to a new Cell using a list returned from a pathfinding algorithm that minimizes change in altitude.
   */
  move() {
    const new_cell = this.#path.shift(); // TODO: find a way to make this non-destructive.

    // Leave the old cell and enter the new cell.
    this.#location.toggle_populated();
    this.set_location(new_cell);
    this.#location.toggle_populated();
  }

  /**
   * in here, perform pathfinding optimized for minumum change in altitude.
   * This is not the optimal solution; this is a brute force approach
   * @returns the next cell that the thing will occupy
   */
  greedy_pathfind() {
    let neighbouring_cells = [];
    let new_cell;

    // get the neighbouring cells' altitudes
    // need to get an array of the neighbouring cells.
    let coords = this.#location.get_coordinates();

    for (let y = coords.y - 1; y <= coords.y + 1; ++y) {
      for (let x = coords.x - 1; x <= coords.x + 1; ++x) {
        if (!(coords.x === x && coords.y === y)) {
          let neighbour;

          neighbour = this.#world.get_cell(x, y);

          neighbouring_cells.push(neighbour);
        }
      }
    }

    console.log(neighbouring_cells);

    // pick the cell with the lowest altitude as the new cell.
  }

  dijkstra_pathfind() {

    const distances = {};
    const path = {};
    const priorityQueue = new PriorityQueue();
    let initial_cell;

    // Set up the set of unvisited Cells. Set the distance of the currently populated Cell to 0.
    for (let i = 0, row = 0; i < this.#world.get_size(); ++i) {
      if (i > this.world[0].length) {
        ++row;
      }

      let current_cell = this.#world.get_cell(i % this.world[0].length, row);
      let distance;

      if (current_cell.get_populated())
      {
        initial_cell = current_cell;
        distance = 0;
      } else {
        distance = Cell.MAX_ALTITUDE + 1;
      }

      distances[current_cell] = distance;
      path[current_cell] = null;
    }
    
    // Initialize the pQ with the initial cell and the initial cell distance (0).
    priorityQueue.enqueue(initial_cell, distances[initial_cell]);

    while (!priorityQueue.isEmpty())
    {
      // Get the nearest cell and its neighbours.
      const current_cell = priorityQueue.dequeue();
      const neighbours = this.#world.get_neighbours(current_cell);

      for (let neighbour in neighbours)
      {
        // Get the abs. val. of the difference in altitude between a neighbour and the current cell.
        const weight = Math.abs(current_cell.get_altitude() - neighbour.get_altitude);

        // Total distance is the distance from the current cell to the initial cell + the change in alt.
        const totalDistance = distances[current_cell] + weight;

        // If the total distance is less than the known distance, a shorter path has been found.
        if (totalDistance < distances[neighbour])
        {
          // Update the known distance and the path.
          distances[neighbour] = totalDistance;
          path[neighbour] = current_cell;

          // Add the neighbour to the queue with the new distance as priority.
          priorityQueue.enqueue(neighbour, totalDistance);
        }
      }
    }

    // The shortest path is the stored path from the target to the intial cell reversed.
    const s_path = [];
    for (let curr = this.#target; curr !== null; curr = path[curr])
    {
      s_path.unshift(curr);
    }

    this.#path = s_path;

    return {
      s_path,
      length: distances[this.#target]
    };
  }
}

export default Entity;