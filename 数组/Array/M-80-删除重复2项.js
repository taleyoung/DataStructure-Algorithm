/**
 * E-80
 * 给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素最多出现两次，返回移除后数组的新长度。
 */

let removeDuplicates = function(nums) {
  let i = 1;
  let length = nums.length;
  for (let j = 2; j < length; j++) {
    if (nums[i] !== nums[j]) {
      nums[++i] = nums[j];
    } else if (nums[i] === nums[j] && nums[i] !== nums[i - 1]) {
      nums[++i] = nums[j];
    }
  }
  return i + 1;
};
console.log("res: ", removeDuplicates([1, 1, 1, 2, 2, 3]));
