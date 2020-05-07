//栈
class Stack {
  constructor() {
    this.stack = [];
  }
  push(element) {
    this.stack.push(element);
  }
  pop() {
    this.stack.pop();
  }
  getCount() {
    return this.stack.length;
  }
  getPeek() {
    return this.stack[this.getCount() - 1];
  }
  isEmpty() {
    return this.getCount() === 0;
  }
}
//匹配括号问题
let isValid = function(s) {
  let map = {
    "(": -1,
    ")": 1,
    "[": -2,
    "]": 2,
    "{": -3,
    "}": 3
  };
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] < 0) {
      stack.push(s[i]);
    } else {
      let last = stack.pop();
      if (map[last] + map[s[i]] != 0) {
        return false;
      }
    }
  }
  if (stack.length > 0) {
    return false;
  }
  return true;
};

//队列
class Queue {
  constructor() {
    this.queue = [];
  }
  enQueue(element) {
    this.queue.push(element);
  }
  deQueue(element) {
    this.queue.shift();
  }
  getHeader() {
    return this.queue[0];
  }
  getCount() {
    return this.queue.length;
  }
  isEmpty() {
    return this.getCount() === 0;
  }
}
//循环队列
class Queue {
  constructor(length) {
    this.queue = new Array(length + 1);
    this.first = 0;
    this.last = 0;
    this.size = 0;
  }
  enQueue(item) {
    if ((this.last + 1) % this.queue.length == this.first) {
      this.resize(this.getLength() * 2 + 1);
    }
    this.queue[this.last] = item;
    this.last = (this.last + 1) % this.queue.length;
    this.size++;
  }
  deQueue() {
    if (this.isEmpty()) {
      throw Error("..");
    }
    let res = this.queue[this.first];
    this.queue[this.first] = null;
    this.first = (this.first + 1) % this.queue.length;
    this.size--;
    if (this.size === this.getLength() / 4 && this.getLength() / 2 != 0) {
      this.resize(this.getLength() / 2);
    }
    return res;
  }
  getHeader() {
    if (this.isEmpty()) {
      throw Error("..");
    }
    return this.queue[first];
  }
  getLength() {
    return this.last - this.first;
  }
  isEmpty() {
    return this.getLength() === 0;
  }
  resize() {
    let p = new Array(length);
    for (let i = 0; i < length; i++) {
      p[i] = this.queue((i + this.first) % this.length);
    }
    this.queue = p;
    this.first = 0;
    this.last = this.size;
  }
}

//单向链表
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    // 长度非必要
    this.length = 0;
  }
  push(data) {
    // 创建一个新节点
    const node = new Node(data);
    // 检查头部是否为空
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    }
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }
  pop() {
    // 先检查链表是否为空
    if (this.isEmpty()) {
      return null;
    }
    // 如果长度为1
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.length--;
      return this.tail;
    }
    let node = this.tail;
    let currentNode = this.head;
    let penultimate;

    while (currentNode) {
      if (currentNode.next === this.tail) {
        penultimate = currentNode;
        break;
      }
      currentNode = currentNode.next;
    }

    penultimate.next = null;
    this.tail = penultimate;
    this.length--;
    return node;
  }

  get(index) {
    // 处理边界条件
    if (index === 0) {
      return this.head;
    }
    if (index < 0 || index > this.length) {
      return null;
    }

    let currentNode = this.head;
    let i = 0;
    while (i < index) {
      i++;
      currentNode = currentNode.next;
    }
    return currentNode;
  }
  delete(index) {
    let currentNode = this.head;

    if (index === 0) {
      let deletedNode;
      currentNode.next = this.head;
      deletedNode = currentNode;
      this.length--;

      return deletedNode;
    }

    if (index < 0 || index > this.length) {
      return null;
    }

    let i = 0;
    let previous;

    while (i < index) {
      i++;
      previous = currentNode;
      currentNode = currentNode.next;
    }
    previous.next = currentNode.next;
    this.length--;
    return currentNode;
  }

  isEmpty() {
    return this.length === 0;
  }
  print() {
    const list = [];
    let currentNode = this.head;
    while (currentNode) {
      list.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return list.join(" => ");
  }
}
const l = new LinkedList();

// 添加节点
const values = ["A", "B", "C"];
values.forEach(value => l.push(value));

console.log(l);
console.log(l.pop());
console.log(l.get(1));
console.log(l.isEmpty());
console.log(l.print());
