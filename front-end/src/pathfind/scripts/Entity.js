
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
  set_path(path) {
    this.#path = path;
  }

  /**
   * Get this Entity's target Cell.
   * @returns the target Cell.
   */
  get_target() {
    return this.#target;
  }

  /**
   * Move to a new Cell using a list returned from a pathfinding algorithm
   * that minimizes change in altitude.
   */
  move() {
    const new_cell = this.#path.shift();

    // Leave the old cell and enter the new cell.
    this.#location.toggle_populated();
    this.#location.toggle_visited();
    this.set_location(new_cell);
    this.#location.toggle_populated();
  }

  /**
   * Move to a new Cell using a list returned from a pathfinding algorithm
   * that minimizes change in altitude. Update the DOM.
   * @param {Document} DOM A Document Object Model.
   */
  move_and_update_DOM(DOM) {
    const old_cell = this.#location;
    const new_cell = this.#path.shift();

    // Leave the old cell and enter the new cell.
    old_cell.toggle_populated();
    old_cell.toggle_visited();
    DOM.querySelector(`._${old_cell.id}`).classList.remove('populated');
    DOM.querySelector(`._${old_cell.id}`).classList.add('visited');
    
    this.set_location(new_cell);
    new_cell.toggle_populated();
    DOM.querySelector(`._${new_cell.id}`).classList.add('populated');
  }

}

export default Entity;