/**
 * 原型链继承
 * 缺点
 * 1.引用类型的属性被所有实例共享
 * 如果一个类有两个实例，一个实例把arr改变了。另一个实例中的arr也被改变了
 * 原因是两个实例的__proto__是同一个
 * 2.创建Child实例时无法向Parent传参
 */
function Parent2() {
  this.name = "Parent2";
  this.arr = [1, 2];
}
function Child2() {
  this.childName = "child2";
}
//实现原型链继承的核心
Child2.prototype = new Parent();

/**
 * 构造函数继承
 * 缺点是
 * 1. 因为方法都在构造函数中定义，所以每创建一个实例都要创建一次方法
 */
function Parent1() {
  this.name = "Parent1";
  this.arr = [1, 2];
}
Parent1.prototype.sayName = function() {
  console.log("this.name", this.name);
};
function Child1() {
  //实现构造函数继承的核心
  Parent1.call(this);
  this.childName = "child1";
}

let o1 = new Child1();
let o2 = new Child2();
console.log("o1,o2", o1, o2);
o1.arr.push(3);
console.log("o1,o2", o1, o2);

/**
 *
 * 组合式继承
 * 弥补上两种的缺点
 * 他的缺点是
 */
function Parent3() {
  this.name = "parent3";
  this.arr = [1, 2];
}
function Child3() {
  //实现Parent属性的继承
  Parent3.call(this);
  this.childName = "child3";
}
//下面几种方法实现了Parent方法的继承

//第一种：这样的缺点是创建Child实例时一共进行了两次new 操作
Child3.prototype = new Parent3();
console.log(Child3);
//第二种：问题是由Child3创建的实例 原型链既有Child3也有Parent3
Child3.prototype = Parent3.prototype;
//第三种
Child3.prototype = Object.create(Parent3.prototype);
Child3.prototype.constructor = Child3;

/**
 * 原型式继承ßß
 */
