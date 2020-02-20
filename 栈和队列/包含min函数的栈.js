/**
 * 实现一个栈,实现min（求最小值），pop,push都是o(1)复杂度
 */

/**
 * 本题的思想非常重要，想实现min函数，正常思路都是排序等等，那样时间复杂度会高
 * 所以要有'空间换时间'的概念，多加一个辅助栈来记录对应的最小值
 * 还要注意的是对边界情况的判定
 */

class StackWithMin {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }
  push(value) {
    let minLength = this.minStack.length;
    let length = this.stack.length;
    this.stack.push(value);
    if (minLength === 0) {
      this.minStack.push(value);
    } else if (value < this.minStack[minLength - 1]) {
      this.minStack.push(value);
    } else {
      this.minStack.push(this.minStack[minLength - 1]);
    }
  }

  pop() {
    //先判断栈内是否为空
    if (this.stack.length === 0) {
      return null;
    }
    this.stack.pop();
    this.minStack.pop();
  }

  min() {
    if (this.minStack.length === 0) {
      return null;
    }
    return this.minStack[this.minStack.length - 1];
  }
}

let stack = new StackWithMin();
stack.push(1);
stack.push(2);
stack.push(4);
stack.push(43);
stack.push(42);
stack.push(3);
stack.push(0);
console.log(stack.min());
