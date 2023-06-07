import Cell from './Cell'

class Grid {

  #world;

  constructor(size_x, size_y) {
    for (let x = 0; x < size_x; ++x) {
      for (let y = 0; y < size_y; ++y) {
        world[x][y] = new Cell(x, y);
      }
    }
  }

  get_cell(x, y) {
    return this.#world[x][y];
  }

  draw() {
    const image = this.#world.map(row => {
      return row.map(cell => {
        return <div className='cell'>
          !!
        </div>
      })
    });
  }
}