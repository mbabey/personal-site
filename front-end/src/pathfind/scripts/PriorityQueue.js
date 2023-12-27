/**
 * PriorityQueue.
 * A PriorityQueue implementation.
 */
export default class PriorityQueue {

  /**
   * Create a new empty PriorityQueue.
   */
  constructor() {
    this.queue = [];
  }

  /**
   * Add a new element with a specified priority to the PriorityQueue.
   * @param {any} element the element to add
   * @param {Integer} priority the priority of the element
   */
  enqueue(element, priority) {
    this.queue.push({ element, priority });
    this.queue.sort((a, b) => a.priority - b.priority);
  }

  /**
   * Dequeue the element with the highest priority in the PriorityQueue.
   * @returns the first element in the queue
   */
  dequeue() {
    return this.queue.shift().element;
  }

  /**
   * Check whether the PriorityQueue is empty.
   * @returns true if empty, false otherwise
   */
  isEmpty() {
    return this.queue.length === 0;
  }
}