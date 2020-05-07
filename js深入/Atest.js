/**
 * 1. call&apply&bind
 */

Function.prototype.call2 = function(thisArg, ...args) {
  // let [thisArg, ...args] = arguments;
  thisArg.fn = this;
  if (!thisArg) {
    thisArg = typeof window === "undefined" ? global : window;
  }
  let res = thisArg.fn(...args);
  delete thisArg.fn;
  return res;
};

Function.prototype.apply2 = function(thisArg, args) {
  if (!thisArg) {
    thisArg = typeof window === "undefined" ? global : window;
  }
  thisArg.fn = this;
  let res;
  if (args) {
    res = thisArg.fn(...args);
  } else {
    thisArg.fn();
  }
  delete thisArg.fn;
  return res;
};

Function.prototype.bind2 = function(thisArg, ...args) {
  let fn = this;
  let context = thisArg;
  const fBound = function() {
    let nowThis = this instanceof fBound ? this : context;
    return fn.apply(nowThis, args.concat([...arguments]));
  };
  fBound.prototype = Object.create(this.prototype);
  return fBound;
};

// const obj = {
//   name: "obj"
// };
// function test(p1, p2) {
//   console.log("this.name :", this.name, p1, p2);
//   return p1 + p2;
// }
// // console.log("test.call(obj)", test.call2(obj, "p1", "p2"));
// const testBind = test.bind2(obj, "p1");
// testBind("p2");

/**
 * 2. promise & promise.all & promise串行
 */
const RESOLVED = Symbol();
const PENDING = Symbol();
const REJECTED = Symbol();
class MyPromise {
  constructor(fn) {
    this.state = PENDING;
    this.value = null;
    this.reason = null;
    this.onResolvedCallback = [];
    this.onRejectedCallback = [];
    const resolve = value => {
      if (this.state === PENDING) {
        this.state = RESOLVED;
        this.value = value;
        this.onResolvedCallback.map(cb => {
          this.value = cb(this.value);
        });
      }
    };
    const reject = reason => {
      if (this.state === PENDING) {
        this.state = REJECTED;
        this.reason = reason;
        this.onRejectedCallback.map(cb => {
          this.reason = cb(this.reason);
        });
      }
    };
    try {
      fn(resolve, reject);
    } catch (error) {
      fn(reject);
    }
  }
  then(onResolve, onReject) {
    typeof onResolve === "function" && this.onResolvedCallback.push(onResolve);
    typeof onReject === "function" && this.onRejectedCallback.push(onReject);
    return this;
  }
  catch(onReject) {
    typeof onReject === "function" && this.onRejectedCallback.push(onReject);
    return this;
  }
  finally() {}

  static resolve(value) {
    if (value instanceof MyPromise) return value;
    return new MyPromise(resolve => resolve(value));
  }
  static reject(reason) {
    return new MyPromise((resolve, reject) => reject(reason));
  }

  static all(promises) {
    return new MyPromise((resolve, reject) => {
      let result = [];
      let index = 0;
      for (let i = 0; i < promises.length; i++) {
        MyPromise.resolve(promises[i]).then(
          res => {
            result[i] = res;
            if (++index === promises.length) {
              resolve(result);
            }
          },
          err => {
            reject(err);
          }
        );
      }
    });
  }
  static race(promises) {
    return new MyPromise((resolve, reject) => {
      promises.forEach(promise => {
        MyPromise.resolve(promise).then(
          res => {
            resolve(res);
          },
          err => {
            reject(err);
          }
        );
      });
    });
  }
}

new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(5);
  }, 1000);
}).then(res => {
  // console.log("res+1", res + 1);
  return res + 1;
});

const promises1 = new MyPromise(resolve => {
  setTimeout(() => {
    resolve(1);
  }, 100);
});
const promises2 = new MyPromise(resolve => {
  setTimeout(() => {
    resolve(2);
  }, 100);
});
const promises3 = new MyPromise(resolve => {
  setTimeout(() => {
    resolve(3);
  }, 100);
});

MyPromise.all([promises1, promises2, promises3]).then(res => {
  // console.log("resALL", res);
});
MyPromise.race([promises1, promises2, promises3]).then(res => {
  // console.log("resRACE", res);
});

/**
 * 3. 函数柯里化
 */

const curry = (fn, args) => {
  args = args || [];
  return function() {
    let _args = [...args, ...arguments];
    return fn.length > _args.length
      ? curry.call(this, fn, _args)
      : fn.apply(this, _args);
  };
};

const curry2 = (fn, args) => {
  args = args || [];
  return function() {
    let _args = [...args, ...arguments];
    return fn.length > _args.length
      ? curry.call(this, fn, _args)
      : fn.apply(this, _args);
  };
};

const add = (a, b, c, d) => a + b + c + d;
const curryAdd = curry(add);
console.log("curryAdd() :", curryAdd(1, 2)(3)(4));
/**
 * 4. 原型相关  new ,instanceOf
 */

function myNew(fn, ...args) {
  let obj = {};
  Object.getPrototypeOf(obj) = fn.prototype;
  let res = fn.call(obj, ...args);
  return typeof res === "object" ? res : obj;
}
function say() {
  console.log("this.name", this.name);
}
let user = {
  name: "hh"
};
user.tell = new say();
console.log("user.tell :", user.tell);

function instanceof2(left, right) {
  prototype = right.prototype;
  while (left) {
    if (left === prototype) {
      return true;
    }
    left = Object.getPrototypeOf(left);
  }
  return false;
}
/**
 *5. 多种继承
 */
//1. 原型链继承
function Parent() {}
function Child() {}
Child.prototype = new Parent();

//2. 构造函数继承
function Parent() {}
function Child() {
  Parent.call(this);
}

//3.组合
function Parent() {}
function Child() {
  Parent.call(this);
}
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;
/**
 * 6. 封装ajax
 */

/**
 * 7. 浅拷贝，深拷贝
 */
const deepClone = obj => {
  let res = Array.isArray(obj) ? [] : {};
  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === "object") {
        res[key] = deepClone(obj[key]);
      } else {
        res[key] = obj[key];
      }
    }
  }
  return res;
};

/**
 * 8. 防抖，节流
 */
const throllte = (fn, wait) => {
  let prev = new Date();
  return function() {
    let now = new Date();
    if (now - prev > wait) {
      fn.call(this, ...arguments);
      prev = new Date();
    }
  };
};

const debouce = (fn, wait) => {
  let timer;
  return function() {
    if (timer) {
      cleatTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.call(this, ...arguments);
    }, wait);
  };
};

/**
 * 9.jsonp
 */

function jsonp(url, data) {
  return new Promise((resolve, reject) => {
    let jsNode = document.createElement("script");
    url += `?callback=${callbackName}`;
    if (data) {
      for (key in data) {
        url += `&${key}=${data[key]}`;
      }
    }
    jsNode.src = url;
    window[callbackName] = function(res) {
      document.body.removeChild(jsNode);
      delete window[callbackName];
      if (result) {
        resolve(res);
      } else {
        reject("error");
      }
    };
    document.addEventListener("error", function(e) {
      document.body.removeChild(jsNode);
      delete window[callbackName];
      reject("error");
    });
    document.body.appendChild(jsNode);
  });
}

/**
 * 10. 数组去重
 */

let unique = arr => {
  return [...new Set(arr)];
};

let unique2 = arr => {
  arr.filter((item, index) => arr.indexOf(item) === index);
};

let unique3 = arr => {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (res.indexOf(arr[i]) !== -1) {
      res.push(arr[i]);
    }
  }
  return res;
};
/**
 * 11.数组扁平化
 */

function flat1(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      res = arr.concat(arr[i]);
    } else {
      res.push(arr[i]);
    }
  }
  return res;
}

function flat2(arr) {
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr;
}
console.log("flat2", flat2([1, 2, 3, [4, 5]]));
/**
 * 12.随机排序
 */

/**
 * 13. 排序
 */
