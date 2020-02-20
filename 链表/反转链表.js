/**
 * 输入一个链表的头结点，反转链表，并输出反转后的头结点
 */

/**
 * 方案一，运用链表的头插法
 * 方案二，原地反转，不利用额外空间
 * 1. 三个指针，分别记录当前node，前pre，后一个next结点
 * 2。 结点node的next指向pre，
 * 3. pre和node往后移一位
 */

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

function reverseList(head) {
  if (!head) {
    return null;
  }
  let node = head,
    pre = null;
  while (node) {
    let next = node.next;
    node.next = pre;
    pre = node;
    node = next;
  }
  return pre;
}

let node3 = new Node(3, null),
  node2 = new Node(2, node3),
  node1 = new Node(1, node2);
let head = new Node(0, node1);

console.log(reverseList(head));
