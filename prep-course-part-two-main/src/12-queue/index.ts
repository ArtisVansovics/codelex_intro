/**
 * Queue
 *
 * Create a queue data structure. The queue
 * should be a class with methods 'add' and 'remove'.
 * Adding to the queue should store an element until
 * it is removed.
 *
 * Examples:
 * const q = new Queue();
 * q.add(1);
 * q.remove(); // returns 1
 */

class Queue {
  memory: number[] = []
  add(n: number) {
    this.memory.push(n)
  }
  remove() {
    return this.memory.shift()
  }
}

export { Queue };
