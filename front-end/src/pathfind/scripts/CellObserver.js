export default class CellObserver {
  // Enumerator for Events that Cells may undergo.
  static CellEvents = {
    visited: 1,
    populated: 2
  }

  /**
   * Catch a notification from an active Cell and execute the requested CellEvent.
   * @param {Cell} cell the Cell calling the notify method
   * @param {CellEvent} cell_event the event the Cell is experiencing
   */
  static notify(cell, cell_event) {
    switch (cell_event) {
      case CellObserver.CellEvents.visited:
      case CellObserver.CellEvents.populated:
        {
          CellAnimator.bounce(cell);
          break;
        }
      default: ;
    }
  }
}

class CellAnimator {
  static bounce(cell) {
    document.querySelector(`.${cell.id}`);
    console.log(cell.id);
  }
}