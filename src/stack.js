const { NotImplementedError } = require("../extensions/index.js");


module.exports = class Stack {
  constructor() {
    this._array = []
  }

  push(element) {
    return this._array.push(element)
  }

  pop() {
    return this._array.pop()
  }

  peek() {
    return this._array[this._array.length - 1]
  }
};
