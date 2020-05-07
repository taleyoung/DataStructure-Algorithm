/**
 * 面试简单版本
 */
//防抖
function debounce(fn, wait) {
  let timer;
  return function() {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, wait);
  };
}
//节流
function throttle(fn, wait) {
  let prev = new Date();
  return function() {
    let now = new Date();
    if (now - prev > wait) {
      fn.apply(this, arguments);
      prev = new Date();
    }
  };
}
/**
 * 防抖
 */
//没有取消功能
function debounce(func, wait, immediate) {
  var timeout, result;
  return function() {
    var context = this,
      args = arguments;
    if (timeout) {
      clearTimeout(tiemout);
    }
    if (immediate) {
      var callNow = !timeout;
      tiemout = setTimeout(function() {
        timeout = null;
      }, wait);
      if (callNow) {
        result = func.apply(context, args);
      }
    } else {
      timeout = setTimeout(function() {
        func.apply(context, args);
      }, wait);
    }
    return result;
  };
}

//有取消功能
function debounce(func, wait, immediate) {
  var timeout, result;
  var debounced = function() {
    //context为了绑定this args为了拥有原函数的返回值
    var context = this;
    var args = arguments;
    if (timeout) {
      //只要timeout为真 说明一个定时器已经完成了
      clearTimeout(timeout);
    }
    if (immediate) {
      //如果timeout为假 说明是第一次触发，要立刻执行
      var callNow = !timeout;
      //不管是进入if(immediate)还是else 都需要执行setTimeout保证定时器在队列中计时
      timeout = setTimeout(function() {
        timeout = null;
      }, wait);
      if (callNow) {
        result = func.apply(context, args);
      }
    } else {
      timeout = setTimeout(function() {
        func.apply(context, args);
      }, wait);
    }
    return result;
  };
  debounced.cancel = function() {
    clearTimeout(timeout);
    timeout = null;
  };
  return debounced;
}
