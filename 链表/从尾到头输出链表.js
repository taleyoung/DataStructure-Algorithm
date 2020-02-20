/**
 * 从尾到头输出一个链表
 */

//链表节点
class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}
//链表
class List {
  constructor() {
    this.head = new Node(null, null);
  }
  find(index) {
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }
  insert(value, index) {
    let prevNode = this.find(index);
    let currentNode = new Node(value, prevNode.next);
    prevNode.next = currentNode;
  }
}

/**
 * 逆序打印链表,利用递归的思想
 * 或者利用栈的结构，总之就是实现先进后出
 */
function printTailToHead(node) {
  if (node.next) {
    printTailToHead(node.next);
  }
  node.value && console.log("node.value", node.value);
}

//测试
const list = new List();
list.insert("a", 0);
list.insert("b", 1);
list.insert("c", 2);
list.insert("d", 3);
list.insert("e", 4);

printTailToHead(list.head);
