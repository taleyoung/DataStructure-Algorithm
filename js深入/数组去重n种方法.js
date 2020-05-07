const unique1 = array => [...new Set(array)];

function unique2(array) {
  var res = [];
  for (var i = 0, len = array.length; i < len; i++) {
    var current = array[i];
    if (res.indexOf(current) === -1) {
      res.push(current);
    }
  }
  return res;
}

function unique3(array) {
  //未排序
  let res = array.filter(function(item, index, array) {
    return array.indexOf(item) === index;
  });
  //已排序
  let res2 = array
    .concat()
    .sort()
    .filter(function(item, index, array) {
      return !index || item !== array[index - 1];
    });
  return res;
}

function unique4(array) {
  var res = [];
  //使用.concat()是为了复制一个新数组出来 这样的话就不会改变原有数组的值了。
  var sortedArray = array.concat().sort();
  var seen;
  for (var i = 0, len = sortedArray.length; i < len; i++) {
    if (!i || seen !== sortedArray[i]) {
      res.push(sortedArray[i]);
    }
    seen = sortedArray[i];
  }
  return res;
}
