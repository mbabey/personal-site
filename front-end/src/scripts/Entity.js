
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
    this.#location.toggle_visited();
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
   * Set the path for the Entity to follow.
   * @param {Cell[]} path the path to follow.
   */
  set_path(path)
  {
    this.#path = path;
  }

  /**
   * Move to a new Cell using a list returned from a pathfinding algorithm that minimizes change in altitude.
   */
  move() {
    const new_cell = this.#path.shift();

    // Leave the old cell and enter the new cell.
    this.#location.toggle_populated();
    this.#location.toggle_visited();
    this.set_location(new_cell);
    this.#location.toggle_populated();
  }

  dijkstra_pathfind() {
    const distances = {};
    const path = {};
    const priorityQueue = new PriorityQueue();
    let initial_cell;

    // Set up the set of unvisited Cells. Set the distance of the currently populated Cell to 0.
    for (let i = 0, row = 0; i < this.#world.get_size(); ++i) {
      if (i !== 0 && i % this.#world.get_size_x() === 0) {
        ++row;
      }

      let current_cell = this.#world.get_cell(i % this.#world.get_size_x(), row);
      let distance;

      if (current_cell.get_populated()) {
        initial_cell = current_cell;
        distance = 0;
      } else {
        distance = Infinity;
      }

      distances[current_cell.id] = distance;
      path[current_cell.id] = null;
    }

    // Initialize the pQ with the initial cell and the initial cell distance (0).
    priorityQueue.enqueue(initial_cell, distances[initial_cell.id]);

    // Main loop.
    while (!priorityQueue.isEmpty()) {
      // Get the nearest cell and its neighbours.
      const current_cell = priorityQueue.dequeue();
      const neighbours = this.#world.get_neighbours(current_cell);

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
    for (let curr = this.#target; curr !== null; curr = path[curr.id]) {
      s_path.unshift(curr);
    }

    return {
      s_path,
      length: distances[this.#target.id]
    };
  }
  
}

export default Entity;