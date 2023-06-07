class Entity {
  
  // A Cell: The location of the entity on the grid.
  #location;
  
  // A Grid: the grid on which the entity exists.
  #world;
  
  constructor(grid, cell) {
    this.#world = grid;
    this.#location = cell;
  }

  get_location() {
    return this.#location;
  }

  set_location(cell) {
    this.#location = cell
  }

  move() {
    let new_cell;
    
    // in here, perform pathfinding optimized for minumum change in altitude.

    this.set_location(new_cell);
  }
}

export default Entity;