//通过循环的方式
function sequencePromise(promiseArr) {
  var sequence = Promise.resolve();
  promiseArr.forEach((fn, index) => {
    console.log("sequence", index, sequence);
    sequence = sequence.then(() => fn());
  });
}

function seq(promises) {
  let s = Promise.resolve();
  promises.forEach(promise => {
    s = s.then(() => s());
  });
}

//通过reduce的方式;
/**
 * 二者本质上其实还是一样的。
 */
function sequencePromise2(promiseArr) {
  promiseArr.reduce(
    (prevPromise, nextPromise) => prevPromise.then(() => nextPromise()),
    Promise.resolve()
  );
}
/**
 * 递归的方法
 */
function iteratorPromise(arr) {
  (function iter() {
    if (arr.length)
      arr
        .shift()()
        .then(iter);
  })();
}

let promise1 = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("promise1");
      resolve();
    }, 1000);
  });
};

let promise2 = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("promise2");
      resolve();
    }, 1000);
  });
};
let promise3 = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("promise3");
      resolve();
    }, 1000);
  });
};
let arr = [promise1, promise2, promise3];
sequencePromise2(arr);
