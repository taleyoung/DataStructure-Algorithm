/**
 * 合并两个有序链表
 */

/**
 * node结点为合并后的链表，p1,p2为初始两有序链表
 * 1.比较p1, p2的value值，node.next指向小的那一个，且小的那个向后移动
 * 2. 一直重复，直到p1,p2有一个到尾
 * 3. node.next指向没完的那一个
 */
class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}
//递归的解法
function mergeList1(p1, p2) {
  if (!p1) {
    return p2;
  }
  if (!p2) {
    return p1;
  }
  let head = new Node();
  if (p1.value < p2.value) {
    head = p1;
    head.next = mergeList1(p1.next, p2);
  } else {
    head = p2;
    head.next = mergeList1(p1, p2.next);
  }
  return head;
}

//循环的解法
function mergeList2(p1, p2) {
  if (!p1) {
    return p2;
  }
  if (!p2) {
    return p1;
  }
  let head = new Node(),
    node = head;
  while (p1 && p2) {
    if (p1.value < p2.value) {
      node.next = p1;
      p1 = p1.next;
    } else {
      node.next = p2;
      p2 = p2.next;
    }
    node = node.next;
  }
  if (!p1) {
    node.next = p2;
  }
  if (!p2) {
    node.next = p1;
  }
  return head;
}

let list1 = new Node(1, new Node(3, new Node(5, new Node(7, null))));
let list2 = new Node(2, new Node(4, new Node(6, new Node(8, null))));

let head = mergeList1(list1, list2);
while (head) {
  console.log(head.value);
  head = head.next;
}
