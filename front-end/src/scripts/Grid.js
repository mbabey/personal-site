import Cell from './Cell'

/**
 * Grid.
 * A 2D array of Cells.
 */
class Grid {

  // The array of Cells.
  #world;

  /**
   * Construct a Grid by initializing an empty array of the parameter size,
   * then by filling that array with new Cells
   * @param {Integer} size_x the X dimension of the Grid
   * @param {Integer} size_y the Y dimension of the Grid
   */
  constructor(size_x, size_y) {
    // Initialize the empty world.
    this.#world = [...Array(size_x)].map(e => Array(size_y));
    
    // Fill the world with Cells.
    for (let x = 0; x < size_x; ++x) {
      for (let y = 0; y < size_y; ++y) {
        this.#world[x][y] = new Cell(x, y);
      }
    }
  }

  /**
   * Get the Cell at the X and Y coordinates.
   * @param {*} x the X coordinate
   * @param {*} y the Y coordinate
   * @returns the Cell at the X and Y coordinates
   */
  get_cell(x, y) {
    return this.#world[x][y];
  }

  /**
   * For each Cell in the Grid, create an HTML element.
   * @returns the array of HTML elements.
   */
  draw() {
    const image = this.#world.map(row => {
      return row.map(cell => {
        const location = cell.get_coordinates();
        const altitude = cell.get_altitude();
        return <div key={location} className={`cell ${cell.get_populated() ? 'populated' : ''}`}>
          {location[0]}, {location[1]}, {altitude}
        </div>
      })
    });

    return image;
  }
}

export default Grid;