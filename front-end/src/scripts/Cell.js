class Cell {

  #coordinate_x;
  #coordinate_y;
  #altitude;

  constructor(coord_x, coord_y) {
    this.#coordinate_x = coord_x;
    this.#coordinate_y = coord_y;
    this.#altitude = Math.floor(Math.random() * 1000);
  }

  get_coordinates() {
    return [this.#coordinate_x, this.#coordinate_y];
  }

  get_altitude() {
    return this.#altitude;
  }
}

export default Cell;