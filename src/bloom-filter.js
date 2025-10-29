const { NotImplementedError } = require("../extensions/index.js");

module.exports = class BloomFilter {

  constructor(size) {
    this.size = size
    this.store = this.createStore(size)
  }


  insert(item) {
    for (const hash of this.getHashValues(item)) {
      const position = hash % this.size;
      this.store[position] = true;
    }
  }


  mayContain(item) {
    for (const hash of this.getHashValues(item)){
      const position = hash % this.size;
      if (this.store[position] === false) return false      
    }
    return true;
  }

  createStore(size) {
    return new Array(size).fill(false);
  }

  hash1(item) {
    let hash = 0
    for (const char of item)  hash += char.charCodeAt(0)
    return  Math.abs(hash)
  }


  hash2(item) {
    let hash = 4
    for (const char of item)  hash += char.charCodeAt(0)*3
    return  Math.abs(hash)
  }


  hash3(item) {
    let hash = 7
    for (const char of item)  hash += char.charCodeAt(0)*5
    return  Math.abs(hash)
  }

  getHashValues(item) {
    return [this.hash1(item), this.hash2(item), this.hash3(item)]
  }
};



