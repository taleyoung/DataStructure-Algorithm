function flatten(arr) {
  var result = [];
  for (let i = 0, len = arr.length; i < len; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

function flatten2(arr) {
  return arr.reduce(
    (prev, next) =>
      Array.isArray(next) ? prev.concat(flatten(next)) : prev.concat(next),
    []
  );
}
function flatten(arr) {
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr;
}

console.log("flatten2([]", flatten2([1, 2, 3, [4, 5], 6]));
