//实现一个简化版的promise 没有A+规范
const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";
class MyPromise {
  constructor(fn) {
    this.state = PENDING;
    this.value = null;
    this.reason = null;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];
    const resolve = value => {
      setTimeout(() => {
        if ((this.state = PENDING)) {
          this.state = FULFILLED;
          this.value = value;
          this.onFulfilledCallbacks.map(cb => {
            this.value = cb(this.value);
          });
        }
      });
    };
    const reject = reason => {
      setTimeout(() => {
        if ((this.state = PENDING)) {
          this.state = REJECTED;
          this.reason = reason;
          this.onRejectedCallbacks.map(cb => {
            this.reason = cb(this.reason);
          });
        }
      });
    };
    try {
      fn(resolve, reject);
    } catch (error) {
      fn(reject);
    }
  }

  then(onFulfilled, onRejected) {
    typeof onFulfilled === "function" &&
      this.onFulfilledCallbacks.push(onFulfilled);
    typeof onRejected === "function" &&
      this.onRejectedCallbacks.push(onRejected);
    return this;
  }
  catch(onRejected) {
    typeof onRejected === "function" &&
      this.onRejectedCallbacks.push(onRejected);
    return this;
  }
  finally(cb) {
    return this.then(
      value => MyPromise.resolve(cb()).then(() => value),
      reason =>
        MyPromise.resolve(cb()).then(() => {
          throw reason;
        })
    );
  }

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
    resolve(2);
  }, 2000);
})
  .then(res => {
    return res + 1;
  })
  .then(res => {
    // console.log("res", res);
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
  console.log("resALL", res);
});

MyPromise.race([promises1, promises2, promises3]).then(res => {
  console.log("resRACE", res);
});

Promise.resolve = param => {
  if (param instanceof Promise) return param;
  return new Promise((resolve, reject) => {
    if (param && param.then && typeof param.then === "function") {
      // param 状态变为成功会调用resolve，将新 Promise 的状态变为成功，反之亦然
      param.then(resolve, reject);
    } else {
      resolve(param);
    }
  });
};

// 添加then方法
function then(onFulfilled, onRejected) {
  const { _value, _status } = this;
  // 返回一个新的Promise对象
  return new MyPromise((onFulfilledNext, onRejectedNext) => {
    // 封装一个成功时执行的函数
    let fulfilled = value => {
      try {
        if (!isFunction(onFulfilled)) {
          onFulfilledNext(value);
        } else {
          let res = onFulfilled(value);
          if (res instanceof MyPromise) {
            // 如果当前回调函数返回MyPromise对象，必须等待其状态改变后在执行下一个回调
            res.then(onFulfilledNext, onRejectedNext);
          } else {
            //否则会将返回结果直接作为参数，传入下一个then的回调函数，并立即执行下一个then的回调函数
            onFulfilledNext(res);
          }
        }
      } catch (err) {
        // 如果函数执行出错，新的Promise对象的状态为失败
        onRejectedNext(err);
      }
    };
    // 封装一个失败时执行的函数
    let rejected = error => {
      try {
        if (!isFunction(onRejected)) {
          onRejectedNext(error);
        } else {
          let res = onRejected(error);
          if (res instanceof MyPromise) {
            // 如果当前回调函数返回MyPromise对象，必须等待其状态改变后在执行下一个回调
            res.then(onFulfilledNext, onRejectedNext);
          } else {
            //否则会将返回结果直接作为参数，传入下一个then的回调函数，并立即执行下一个then的回调函数
            onFulfilledNext(res);
          }
        }
      } catch (err) {
        // 如果函数执行出错，新的Promise对象的状态为失败
        onRejectedNext(err);
      }
    };
    switch (_status) {
      // 当状态为pending时，将then方法回调函数加入执行队列等待执行
      case PENDING:
        this._fulfilledQueues.push(fulfilled);
        this._rejectedQueues.push(rejected);
        break;
      // 当状态已经改变时，立即执行对应的回调函数
      case FULFILLED:
        fulfilled(_value);
        break;
      case REJECTED:
        rejected(_value);
        break;
    }
  });
}
