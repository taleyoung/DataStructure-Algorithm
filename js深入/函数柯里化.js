/**
 * 第一版
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
// function curry(fn, args) {
//   args = args || [];
//   return function() {
//     let _args = [...args, ...arguments];
//     return fn.length > _args.length
//       ? curry.call(this, fn, _args)
//       : fn.apply(this, _args);
//   };
// }

const add = (a, b, c, d) => {
  return a + b + c + d;
};
const curryFn = curry(add);
console.log("curryFn(1)(2)(3)(4); :", curryFn(1, 2)(3)(4));
