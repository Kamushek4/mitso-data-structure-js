const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require('../extensions/list-tree.js');


module.exports = class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  
  root() {
    return this.root;
  }

  add(node, data) {
    if (node === null) {
      return new Node(data);
    }

    if (data < node.data) {
      node.left = this.add(node.left, data);
    } else if (data > node.data) {
      node.right = this.add(node.right, data);
    }

    return node;
  }

  has(data) {
    return this.find(data) !== null;
  }

  find(node, data) {
    if (node === null) {
      return null;
    }

    if (data === node.data) {
      return node;
    } else if (data < node.data) {
      return this.find(node.left, data);
    } else {
      return this.find(node.right, data);
    }
  }


  remove(node, data) {
    if (node === null) {
      return null;
    }

    if (data < node.data) {
      node.left = this.Node(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this.Node(node.right, data);
      return node;
    } else {
      if (node.left === null && node.right) {
        return node.right;
      } else if (node.right === null && node.left) {
        return node.left;
      } else if (node.left === null && node.right === null) {
        return null
      }

      node.data = this.min(node.right);
      node.right = this.remove(node.right, node.data);
      
      return node;
    }
  }

  min(node) {
    if (this.root === null && node === null) {
      return null;
    }

    let current = this.root
    if (node) {
      current = node
    } 
    
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  max(node) {
    if (this.root === null && node === null) {
      return null;
    }
    
    let current = this.root
    if (node) {
      current = node
    } 
    
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }
}
