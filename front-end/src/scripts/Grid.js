import Cell from './Cell'

class Grid {

  world = [];

  constructor(size_x, size_y) {
    for (let x = 0; x < size_x; ++x) {
      for (let y = 0; y < size_y; ++y) {
        world[x][y] = new Cell(x, y);
      }
    }
  }
}