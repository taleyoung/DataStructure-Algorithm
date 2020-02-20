/**
 * 输出链表中倒数第k个结点
 * 计数方式为最后一个结点为倒数第一个结点
 */

/**
 * 方案一，遍历两次： 先遍历一边找到一共有几个结点，然后遍历第二遍招第n-k+1的数
 * 方案二，遍历一次：第一个node先往前n-k个，然后两个再一块next，
 * 直到第一个到达尾结点,那第二个就是倒数k个的结点
 * 需要注意程序的健壮性，比如一开始要判断head不为空，k要大于0，
 * 中间next操作要判断next不为空
 */
class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

function findKthFromTail(head, k) {
  if (!head || k <= 0) {
    return null;
  }
  let nodeRight = head,
    nodeLeft = head;
  for (let i = 0; i < k; i++) {
    if (nodeRight.next) {
      nodeRight = nodeRight.next;
    } else {
      return null;
    }
  }
  while (nodeRight) {
    nodeRight = nodeRight.next;
    nodeLeft = nodeLeft.next;
  }
  return nodeLeft;
}

let node4 = new Node(4, null),
  node3 = new Node(3, node4),
  node2 = new Node(2, node3),
  node1 = new Node(1, node2),
  head = new Node(0, node1);

console.log(findKthFromTail(head, 2));
