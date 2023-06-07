/** 
 * Cell.
 * A Cell in a Grid.
 */
class Cell {

  // The maximum altitude for a cell.
  static #MAX_ALTITUDE = 1000;

  // The X and Y coordinates of the Cell.
  #coordinate_x;
  #coordinate_y;

  // The altitude of the Cell, from 0 to MAX_ALTITUDE.
  #altitude;

  // Whether the Cell has something inside of it.
  #populated;

  /**
   * Contruct a Cell. Randomly generate an altitude.
   * @param {Integer} coord_x the X coordinate
   * @param {Integer} coord_y the Y coordniate
   */
  constructor(coord_x, coord_y) {
    this.#coordinate_x = coord_x;
    this.#coordinate_y = coord_y;
    this.#altitude = Math.floor(Math.random() * Cell.#MAX_ALTITUDE);
    this.#populated = false;
  }

  /**
   * Get the X and Y coordinates of this Cell as an array.
   * @returns coordinates as [x, y]
   */
  get_coordinates() {
    return [this.#coordinate_x, this.#coordinate_y];
  }

  /**
   * Get the altitude of this Cell.
   * @returns the altitude
   */
  get_altitude() {
    return this.#altitude;
  }

  /**
   * Toggle the populated state of this Cell.
   */
  toggle_populated() {
    this.#populated = !this.#populated;
  }

  /**
   * Get the populated state of this Cell.
   * @returns the populated state of this Cell.
   */
  get_populated() {
    return this.#populated;
  }
}

export default Cell;