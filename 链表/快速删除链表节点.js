/**
 * 给定单项链表的头指针和一个节点指针，在o(1)复杂度内删除节点
 */

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

function deleteNode(head, toDelNode) {
  if (!head || !deleteNode) {
    return;
  }
  let nextNode = toDelNode.next;
  if (nextNode) {
    toDelNode.value = nextNode.value;
    toDelNode.next = nextNode.next;
  } else {
    let node = head;
    while (node.next !== toDelNode) {
      node = node.next;
    }
    node.next = null;
  }
}

let node3 = new Node(3, null),
  node2 = new Node(2, node3),
  node1 = new Node(1, node2),
  head = new Node(0, node1);

deleteNode(head, node3);
let node = head;
while (node) {
  console.log("node.value", node);
  node = node.next;
}
