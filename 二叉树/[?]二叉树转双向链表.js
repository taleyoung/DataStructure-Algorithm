/**
 * 输入一个二叉搜索树，将其转换成排序的双向链表
 * 要求不能创建新的节点，只能调整树中指针的指向
 */

class Node {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function convertNode(node, lastNodeInList){
   if(!node){
    return null;
   }

   //先处理左子树
   //TODO:这步递归是怎么处理最左边的节点的？
   if(node.left){
       //拿到左子树转换到链表时的最后一个节点，即最大的右节点
        lastNodeInList = convertNode(node.left, lastNodeInList);
   }

   //把node节点左指针接到lastNodeInList
   node.left = lastNodeInList;
   //lastNodeInList的右指针接到node节点
   if(lastNodeInList){
    lastNodeInList.right = node;
   }
   
   //node节点是转换后链表中lastNodeInList的下一个节点
   //所以这里把lastNodeInList移到node中
   lastNodeInList = node;
   if(node.right){
       lastNodeInList = convertNode(node.right, lastNodeInList);
   }
   return lastNodeInList;
}

function convertBstTolist(root){
    //得到转化后的链表的尾结点
    let lastNodeInList = convertNode(root, null);
    //下面通过向前循环得到链表的头结点
    let headOfList = lastNodeInList;
    while(headOfList && headOfList.left){
        headOfList = headOfList.left
    }
    return headOfList
}


function 