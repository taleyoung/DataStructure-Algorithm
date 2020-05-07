function compose(...func) {
  return args => func.reduceRight((composed, fn) => fn(composed), args);
}

dispatch = compose(...chains)(store.dispatch);

/**
 * 使得[f1,f2,f3]
 * dispatch = f1(f2(f3(store.dispatch)))
 */
