//基本类型的的浅拷贝
newArray = array.concat();
newArray = array.slice();

//Object.assign()实现浅拷贝
let a = { c: 1 };
let b = Object.assign({}, a);
a.c = 2;
console.log(b.c); // 1

//数组和对象的浅拷贝
var shallowCopy = function(obj) {
  if (typeof obj !== "object") {
    return;
  }
  var newObj = obj instanceof Array ? [] : {};
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
};

//数组和对象的深拷贝
var deepCopy = function(obj) {
  if (typeof obj !== "object") {
    return;
  }
  var newObj = obj instanceof Array ? [] : {};
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] =
        typeof obj[key] === "object" ? deepCopy(obj[key]) : obj[key];
    }
  }
  return newObj;
};

//实现jq中的extend
let extend = function() {
  const target = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    let option = arguments[i];
    if (option != null) {
      for (let name in option) {
        if (option[name] != undefined) {
          target[name] = option[name];
        }
      }
    }
  }
  return target;
};
//深拷贝版的extend
// 第二版
function extend() {
  // 默认不进行深拷贝
  var deep = false;
  var name, options, src, copy;
  var length = arguments.length;
  // 记录要复制的对象的下标
  var i = 1;
  // 第一个参数不传布尔值的情况下，target默认是第一个参数
  var target = arguments[0] || {};
  // 如果第一个参数是布尔值，第二个参数是才是target
  if (typeof target == "boolean") {
    deep = target;
    target = arguments[i] || {};
    i++;
  }
  // 如果target不是对象，我们是无法进行复制的，所以设为{}
  if (typeof target !== "object") {
    target = {};
  }

  // 循环遍历要复制的对象们
  for (; i < length; i++) {
    // 获取当前对象
    options = arguments[i];
    // 要求不能为空 避免extend(a,,b)这种情况
    if (options != null) {
      for (name in options) {
        // 目标属性值
        src = target[name];
        // 要复制的对象的属性值
        copy = options[name];

        if (deep && copy && typeof copy == "object") {
          // 递归调用
          target[name] = extend(deep, src, copy);
        } else if (copy !== undefined) {
          target[name] = copy;
        }
      }
    }
  }

  return target;
}
