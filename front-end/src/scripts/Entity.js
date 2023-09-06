import Cell from './Cell';
import PriorityQueue from './PriorityQueue';

/**
 * Entity.
 * The Entity moves across the Grid from Cell to Cell in the most efficient way.
 * The most efficient way is the way that minimizes the change in altitude.
 */
class Entity {

  // A Cell: The location of the Entity on the grid.
  #location;

  // A Grid: the grid on which the Entity exists.
  #world;

  /**
   * Construct an Entity.
   * @param {Grid} grid the Grid on which the Entity will exist
   * @param {Cell} cell the Cell in which the Entity starts
   */
  constructor(grid, cell) {
    this.#world = grid;
    this.#location = cell;
    this.#location.toggle_populated();
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
    let new_cell;



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

    let distances = {};
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
    }
    


  }
}


export default Entity;