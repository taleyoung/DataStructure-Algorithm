/**
 * E-134-Gas Station
 */

//根据流程暴力解释法
let canCompleteCircuit = function(gas, cost) {
  let len = gas.length;
  for (let i = 0; i < len; i++) {
    let start = i;
    let curr = gas[i];
    while (curr >= cost[i % len]) {
      curr = curr - cost[i % len] + gas[(i + 1) % len];
      i++;
      if (i % len === start) {
        return start;
      }
    }
    i = start;
  }
  return -1;
};

//根据题意总结数学规律 利用数学规律求解。
let canCompleteCircuit2 = function(gas, cost) {
  let currDiff = -1,
    currSum = 0,
    totalDiff = 0;
  let index = 0;
  for (let i = 0; i < gas.length; i++) {
    currDiff = gas[i] - cost[i];
    currSum += currDiff;
    totalDiff += currDiff;
    console.log(
      "i,currDiff,currSum,totalDiff :",
      i,
      currDiff,
      currSum,
      totalDiff
    );
    if (currSum < 0) {
      currSum = -1;
      index = i + 1;
    }
  }
  return currSum > -1 && totalDiff >= 0 ? index : -1;
};

console.log(
  "canCompleteCircuit :",
  canCompleteCircuit2([1, 2, 3, 4, 5], [3, 4, 5, 1, 2])
);
