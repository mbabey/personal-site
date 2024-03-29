import Cell from './Cell';

/**
 * Grid.
 * A 2D array of Cells.
 */
class Grid {

  // The array of Cells.
  #arr;

  /**
   * Construct a Grid by initializing an empty array of the parameter size,
   * then by filling that array with new Cells
   * @param {Integer} size_x the X dimension of the Grid
   * @param {Integer} size_y the Y dimension of the Grid
   */
  constructor(size_x, size_y) {
    // Initialize the empty arr.
    this.#arr = [...Array(size_y)].map(e => Array(size_x));

    // Fill the arr with Cells.
    for (let y = 0; y < size_y; ++y) {
      for (let x = 0; x < size_x; ++x) {
        this.#arr[y][x] = new Cell(x, y);
      }
    }
  }

  static async async_create_grid(size_x, size_y) {
    return new Promise((resolve, reject) => {
      if (size_x > 0 && size_y > 0) {
        resolve(new Grid(size_x, size_y));
      } else {
        reject('Invalid Grid size; Grid dimensions must be positive.');
      }
    });
  }

  /**
   * Get the Cell at the X and Y coordinates.
   * @param {Integer} x the X coordinate
   * @param {Integer} y the Y coordinate
   * @returns the Cell at the X and Y coordinates, or null if the Cell does not exist.
   */
  get_cell(x, y) {
    let cell;
    try {
      cell = this.#arr[y][x];
    } catch (e) {
      cell = null;
    }
    return cell;
  }

  /**
   * Get the x-dimension size of this Grid.
   * @returns the x-dimension size of this Grid.
   */
  get_size_x() {
    return this.#arr[0].length;
  }

  /**
   * Get the y-dimension size of this Grid.
   * @returns the y-dimension size of this Grid.
   */
  get_size_y() {
    return this.#arr.length;
  }

  /**
   * Get the size of this Grid.
   * @returns the size of this Grid.
   */
  get_size() {
    return this.#arr[0].length * this.#arr.length;
  }

  /**
   * Given a Cell in this Grid, return the neighbours of that Cell. If the neighbour does not exist, do not return a value.
   * @param {Cell} cell The Cell of which to find neighbours.
   * @returns the neighbours of the parameter Cell.
   */
  get_neighbours(cell) {
    const { x, y } = cell.get_coordinates();

    const left_n = this.get_cell(x - 1, y);
    const top_n = this.get_cell(x, y + 1);
    const right_n = this.get_cell(x + 1, y);
    const bottom_n = this.get_cell(x, y - 1);

    const neighbours = {};

    if (left_n) neighbours.left = left_n;
    if (top_n) neighbours.top = top_n;
    if (right_n) neighbours.right = right_n;
    if (bottom_n) neighbours.bottom = bottom_n;

    return neighbours;
  }

  /**
   * Draw each Cell in the Grid.
   * @param {Number} max_height_px the maximum height of the column.
   * @param {Number} min_height_px the minimum height of the column.
   * @returns the array of HTML elements.
   */
  draw(max_height_px, min_height_px) {
    const image = this.#arr.map(row => {
      return row.map(cell => {
        return cell.draw(max_height_px, min_height_px);
      })
    });

    return image;
  }
}

export default Grid;