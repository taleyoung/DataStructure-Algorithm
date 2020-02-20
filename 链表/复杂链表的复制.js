/**
 *复制一个复杂链表。在复杂链表中，每个结点除了有一个 next 指针指向下一个结点外，
 *还有一个 sibling 指向链表中的任意结点或者 NULL
 */

/**
 * 正常思路是第一遍复制next链表，第二遍遍历原链表找到sibling节点，
 * 然后遍历复制链表找到该节点进行复制
 * 优化的点在于通过一个map建立原链表和复制链表的对应关系，
 * 第一次遍历原链表的时候记录map，第二次只需遍历原链表找到sibling，
 * 然胡通过map搞定复制链表的sibling节点了 不用再遍历一次了
 */

class Node {
  constructor(value, next, sibling) {
    this.value = value;
    this.next = next;
    this.sibling = sibling;
  }
}

function copyList(first) {
  if (!first) {
    return null;
  }

  //这里使用map数据结构，建立映射关系
  let map = new Map();

  let copyFirst = new Node(first.value),
    copyLast = copyFirst;
  //建立第一个节点和复制节点的映射关系
  map.set(first, copyFirst);

  let node = first.next;
  while (node) {
    //遍历原链表的每个节点，并为复制链表创建新的节点然后向后递进
    copyLast.next = new Node(node.value);
    copyLast = copyLast.next;
    map.set(node, copyLast);
    node = node.next;
  }

  //第二遍遍历，根据上面建立的映射条件连接sibling节点
  node = first;
  while (node) {
    map.get(node) && (map.get(node).sibling = map.get(node.sibling));
    node = node.next;
  }
  return copyFirst;
}
const node1 = new Node("a"),
  node2 = new Node("b"),
  node3 = new Node("c"),
  node4 = new Node("d");

node1.next = node2;
node2.next = node3;
node3.next = node4;

node1.sibling = node3;
node4.sibling = node2;

let copyNode = copyList(node1);
while (copyNode) {
  console.log(copyNode);
  copyNode = copyNode.next;
}
