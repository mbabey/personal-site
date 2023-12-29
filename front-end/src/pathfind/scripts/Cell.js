/** 
 * Cell.
 * A Cell in a Grid.
 */
class Cell {

  // The maximum altitude for a Cell.
  static MAX_ALTITUDE = 1000;

  // The ID of the Cell.
  id;

  // The X and Y coordinates of the Cell.
  #coordinate_x;
  #coordinate_y;

  // The altitude of the Cell, from 0 to MAX_ALTITUDE.
  #altitude;

  // Whether the Cell has something inside of it.
  #populated;

  // Whether the Cell is the destination for the Entity.
  #targeted;

  // Whether the Cell has been visited by the Entity.
  #visited;

  /**
   * Contruct a Cell. Randomly generate an altitude.
   * @param {Integer} coord_x the X coordinate
   * @param {Integer} coord_y the Y coordniate
   */
  constructor(coord_x, coord_y) {
    this.id = `${coord_x}:${coord_y}`;
    this.#coordinate_x = coord_x;
    this.#coordinate_y = coord_y;
    this.#altitude = Math.floor(Math.random() * Cell.MAX_ALTITUDE);
    this.#populated = false;
    this.#targeted = false;
    this.#visited = false;
  }

  /**
   * Get the X and Y coordinates of this Cell as an object.
   * @returns coordinates as {x, y}
   */
  get_coordinates() {
    return { x: this.#coordinate_x, y: this.#coordinate_y };
  }

  /**
   * Set the altitude of this Cell.
   */
  set_altitude(new_altitude) {
    this.#altitude = new_altitude;
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

  /**
   * Toggle the targeted state of this Cell.
   */
  toggle_targeted() {
    this.#targeted = !this.#targeted;
  }

  /**
   * Get the targeted state of this Cell.
   * @returns the targeted state of this Cell.
   */
  get_targeted() {
    return this.#targeted;
  }

  /**
   * Toggle the visited state of this Cell.
   */
  toggle_visited() {
    this.#visited = !this.#visited;
  }

  /**
   * Get the visited state of this Cell.
   * @returns the visited state of this Cell.
   */
  get_visited() {
    return this.#visited;
  }

  /**
   * Draw the cell as a column with a specified size.
   * @param {*} max_height_px the maximum height of the column.
   * @param {*} min_height_px the minimum height of the column.
   * @returns an Element with the properties and classes of the cell.
   */
  draw(max_height_px, min_height_px) {
    const location = this.get_coordinates();
    const altitude = this.get_altitude();
    const populated = this.get_populated();
    const targeted = this.get_targeted();
    const visited = this.get_visited();

    const cell_class = `cell${populated ? ' populated' : ''}${targeted ? ' targeted' : ''}${visited ? ' visited' : ''}`;
    
    const cell_height = (altitude / Cell.MAX_ALTITUDE) * max_height_px + min_height_px;
    const cell_top = -cell_height;

    const top_style = {top: `${cell_top}px`};
    const tower_style = {height: `${cell_height}px`};

    return (
      <div key={[location.x, location.y]} className={`${cell_class} box ${location.x}-${location.y}`}>
        <div className={`${cell_class} tower right`} style={tower_style}></div>
        <div className={`${cell_class} tower left`} style={tower_style}></div>
        <div className={`${cell_class} top`} style={top_style}></div>
      </div>
    );
  }
}

export default Cell;