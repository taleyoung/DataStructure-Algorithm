/**
 * 37-输入两个链表，找出他们的第一个公共节点
 */

/**
 * 笨方法是o(n2)的遍历，要想降低复杂度，需要思考两个链表的特点
 * 可得知因为是链表，只会有一个next，所以形状必然是Y形，而不是X形
 * 所以找公共节点只需要从链表后面往前遍历，最后一个相同的便是
 * 从后往前遍历的方法就是利用栈结构。
 */

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

function findFirstCommonNode1(head1, head2) {
  let stack1 = [];
  let stack2 = [];
  let i = head1,
    j = head2;
  while (i) {
    stack1.push(i);
    i = i.next;
  }
  while (j) {
    stack2.push(j);
    j = j.next;
  }
  let node;
  while (stack1.length && stack2.length) {
    let top1 = stack1.pop(),
      top2 = stack2.pop();
    if (top1 === top2) {
      node = top1;
    } else {
      return node;
    }
  }
}

const node4th = new Node(4);
const node3th = new Node(3, node4th);
const list1 = new Node(1, new Node(2, new Node(3, node3th)));
const list2 = new Node(5, new Node(6, node3th));

console.log(findFirstCommonNode1(list1, list2));
