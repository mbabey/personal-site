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

  // The physical height, in pixels, of the Cell.
  #physical_height;

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
    this.id = `${coord_x}-${coord_y}`;
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
   * Get the physical height, in pixels, of this Cell.
   * @returns the physical height, in pixels
   */
  get_physical_height() {
    return this.#physical_height;
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
   * @param {Number} max_height_px the maximum height of the column.
   * @param {Number} min_height_px the minimum height of the column.
   * @returns an Element with the properties and classes of the cell.
   */
  draw(max_height_px, min_height_px) {
    const cell_class = `cell${this.#populated ? ' populated' : ''}${this.#targeted ? ' targeted' : ''}${this.#visited ? ' visited' : ''}`;
    
    this.#physical_height = (this.#altitude / Cell.MAX_ALTITUDE) * max_height_px + min_height_px;

    const top_style = {top: `${-this.#physical_height}px`};
    const tower_style = {height: `${this.#physical_height}px`};

    return (
      <div key={[this.#coordinate_x, this.#coordinate_y]} className={`_${this.id} ${cell_class} box `}>
        <div className={`cell tower right`} style={tower_style}></div>
        <div className={`cell tower left`} style={tower_style}></div>
        <div className={`cell top`} style={top_style}></div>
      </div>
    );
  }
}

export default Cell;
