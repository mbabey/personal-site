// A Cell in a Grid.
class Cell {

  static #MAX_HEIGHT = 1000;

  // The X and Y coordinates of the Cell.
  #coordinate_x;
  #coordinate_y;

  // The altitude of the Cell, from 0 to MAX_HEIGHT.
  #altitude;

  /**
   * Contruct a Cell. Randomly generate an altitude.
   * @param {Integer} coord_x the X coordinate
   * @param {Integer} coord_y the Y coordniate
   */
  constructor(coord_x, coord_y) {
    this.#coordinate_x = coord_x;
    this.#coordinate_y = coord_y;
    this.#altitude = Math.floor(Math.random() * Cell.#MAX_HEIGHT);
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
}

export default Cell;