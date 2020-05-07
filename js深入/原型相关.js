//实现 foo = new Foo()
function myNew(func) {
  var res = {};
  if (func.prototype !== null) {
    res.__proto__ = func.prototype;
  }
  var ret = func.apply(res, Array.prototype.slice.call(arguments, 1));
  if ((typeof ret === "object" || typeof ret === "function") && ret !== null) {
    return ret;
  }
  return res;
}
//另一种写法 本质都是一样的 不过下面的更容易理解一点
function myNew2(func) {
  var obj = {};
  var fn = [].shift.call(arguments);
  obj.__proto__ = fn.prototype;
  var ret = fn.apply(obj, arguments);
  /**
   * 这里是因为通过new Foo() 的时候
   * 如果Foo有返回值且是对象 实例智能访问到返回对象中的内容
   * 如果无返回值或返回值不是对象 则实例可以访问到Foo中涉及到的东西。
   */
  return typeof ret === "object" ? ret : obj;
}

//实现 foo instanceOf Foo
function instanceOf(left, right) {
  //获取 类型 的原型
  var prototype = right.prototype;
  //获取对象的原型
  // var left = left.__proto__;
  let left = Object.getPrototypeOf(left);
  //在一个循环中不断检测left的__proto__
  while (true) {
    if (left === null) {
      //表示原型链到头 返回false
      return false;
    }
    if (left === prototype) {
      //left原型链中含有right的原型
      return true;
    }
    //left通过原型链向上寻找。
    left = Object.getPrototypeOf(left);
  }
}

//实现Object.create()
Object.create = function(o) {
  function f() {}
  f.prototype = o;
  return new f();
};

var obj = { a: 1 };
//等同于
var obj = Object.create(Object.prototype, {
  a: {
    writable: true,
    enumerable: true,
    configurable: true,
    value: 1
  }
});
