var isValid = function(s) {
  if (!s.length) {
    return true;
  }
  let left = ["(", "{", "["];
  let right = [")", "}", "]"];
  let stack = [];
  stack.push(s[0]);
  for (let i = 1; i < s.length; i++) {
    if (left.includes(s[i])) {
      stack.push(s[i]);
    } else {
      let last = stack.pop();
      if (left.indexOf(last) !== right.indexOf(s[i])) {
        return false;
      }
    }
  }
  if (stack.length) {
    return false;
  }
  return true;
};

console.log("isValid() :", isValid("()"));
