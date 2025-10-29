const { NotImplementedError } = require('../extensions/index.js');
const { ListNode } = require('../extensions/list-node.js');


module.exports = class Queue {
  constructor() {
    this.list = null
  }

  getUnderlyingList() {
    return this.list
  }

  enqueue(value) {
    let current = this.list
    while (current.next)     current = current.next
    current.next = new ListNode(value)
  }

  dequeue() {
    if (!this.list) return null
    const oldList = this.list
    this.list = this.list.next
    return oldList
  }
}

