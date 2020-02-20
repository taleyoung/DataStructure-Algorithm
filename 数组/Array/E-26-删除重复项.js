/**
 * E.26.给定排序数组，删除其中重复元素
 *
 */

let removeDuplicates = nums => {
  let i = 0;
  let length = nums.length;
  for (let j = 1; j < length; j++) {
    if (nums[i] !== nums[j]) {
      nums[++i] = nums[j];
    }
  }
  return i + 1;
};
console.log("res:", removeDuplicates([1, 1]));
