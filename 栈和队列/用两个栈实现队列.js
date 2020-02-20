/**
 * 两个栈实现一个队列，实现它的两个函数appendTail和deleteHead
 * 分别完成在队列尾部插入节点和在队列头部删除节点的功能
 */

/**
 * 插入数据放在stack1中
 * 将stack1中的数据弹入stack2中，这样再从stack2中弹数据的时候就符合队列了
 * 需要注意的是splice unshift shift 这几个方法的使用
 */
class Queue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  appendTail(value) {
    this.stack1.splice(0, 0, value);
  }

  deleteHead() {
    if (this.stack2.length === 0) {
      //注意这里要先取到stack1的长度，因为for循环中的shift睡改变stack1的长度
      let length = this.stack1.length;
      for (let i = 0; i < length; i++) {
        this.stack2.splice(0, 0, this.stack1.shift());
      }
    }
    return this.stack2.length === 0 ? null : this.stack2.shift();
  }
}

let queue = new Queue();
queue.appendTail(1);
queue.appendTail(2);
queue.appendTail(3);

console.log(queue.deleteHead());
