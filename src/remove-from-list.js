const { NotImplementedError } = require('../extensions/index.js');


module.exports = function removeKFromList(l, k) {
  if (!l) return null;
  
  let list = new ListNode(0);
  list.next = l;
  
  let current = list;
  
  while (current.next !== null) {
    if (current.next.value === k) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  
  return list.next;
}

function ListNode(x) {
  this.value = x;
  this.next = null;
}