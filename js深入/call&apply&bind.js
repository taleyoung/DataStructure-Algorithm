/**
 * call 的实现
 */
//使用 ...拓展符的做法
Function.prototype.call3 = function() {
  //arguments 是函数中的一个对象 指传入函数的参数
  //调用的时候是应该是 foo(obj,1,2,3) 第一个为上下文 后面为参数
  let [thisArg, ...args] = [...arguments];
  if (!thisArg) {
    thisArg = typeof window === "undefined" ? global : window;
  }
  thisArg.fn = this;
  let result = thisArg.fn(...args);
  delete thisArg.fn;
  return result;
};

/**
 * apply的实现
 */
Function.prototype.apply2 = function(thisArg, rest) {
  if (!thisArg) {
    thisArg = typeof window === "undefined" ? global : window;
  }
  let result;
  thisArg.fn = this;
  if (!rest) {
    result = thisArg.fn();
  } else {
    result = thisArg.fn(...rest);
  }
  delete thisArg.fn;
  return result;
};

/**
 * bind的模拟实现
 */
Function.prototype.bind2 = function(context) {
  //这里的this指调用他的对象 若不是函数则报错。
  if (typeof this !== "function") {
    throw new Error(
      "Function.prototype.bind - what is trying to be bound is not callable"
    );
  }
  //保存调用的this,  bar.bind2(obj)这里的this就是bar
  var self = this;

  //Array.prototype.slice.apply(arguments,1); 这一步是取出arguments这个类数组对象的第二位至最后
  var args = Array.prototype.slice.apply(arguments, 1);
  //制造fNOP 是为了优化原型链那一步
  var fNOP = function() {};
  var fBound = function() {
    //注意下面的arguments和上面的arguments是不一样的 下面的arguments是调用绑定函数是传进去的参数
    var bindArgs = Array.prototype.slice.call(arguments);
    //若bind返回的函数被当作构造函数的话 this应指向调用它的对象，也就是说一开始bind绑定的this失效了
    //若不是作构造函数，只是普通使用的话，this便为最开始用bind绑定的对象
    return self.apply(
      this instanceof fBound ? this : context,
      args.concat(bindArgs)
    );
  };
  /**
   * 修改fBound中this指向如果是这么做的话：
   * fBound.prototype = this.prototype
   * 那么fBound.prototype和this.prototype则是同一个
   * 之后再修改fbound.protype的时候 也会修改this.prototype
   * 所以这里用了fNOP来中转一下
   * 或者直接用fBound.prototype = Object.create(this.prototype)
   */
  fNOP.prototype = this.prototype;
  //使用new之后的效果就是 fBound.__proto__ = fNOP.prototype = this.prototype
  fBound.prototype = new fNOP();
  return fBound;
};

//简洁版的bind
Function.prototype.bind3 = function(thisArg, ...args) {
  let fn = this;
  let context = thisArg;
  const fBound = function() {
    let nowThis = this instanceof fBound ? this : context;
    return fn.apply(nowThis, args.concat([...arguments]));
  };
  fBound.prototype = Object.create(this.prototype);
  return fBound;
};

//测试
var obj = {
  value: 1
};
function foo(a, b) {
  console.log(this.value);
  console.log(a, b);
}
var bindFoo = foo.bind(obj, 2);
bindFoo(3);
