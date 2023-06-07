import Cell from './Cell'

class Grid {

  #world;

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

  get_cell(x, y) {
    return this.#world[x][y];
  }

  draw() {
    const image = this.#world.map(row => {
      return row.map(cell => {
        const location = cell.get_coordinates();
        const altitude = cell.get_altitude();
        return <div className='cell'>
          {location[0]}, {location[1]}, {altitude}
        </div>
      })
    });

    return image;
  }
}

export default Grid;