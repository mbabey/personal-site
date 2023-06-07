/**
 * Entity.
 * The Entity moves across the Grid from Cell to Cell in the most efficient way.
 * The most efficient way is the way that minimizes the change in altitude.
 */
class Entity {
  
  // A Cell: The location of the entity on the grid.
  #location;
  
  // A Grid: the grid on which the entity exists.
  #world;
  
  /**
   * Construct an Entity.
   * @param {Grid} grid the Grid on which the Entity will exist
   * @param {Cell} cell the Cell in which the Entity starts
   */
  constructor(grid, cell) {
    this.#world = grid;
    this.#location = cell;
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
   * Move to a new Cell using a pathfinding algorithm that minimizes change in altitude.
   */
  move() {
    let new_cell;
    
    // in here, perform pathfinding optimized for minumum change in altitude.

    this.set_location(new_cell);
  }
}

export default Entity;