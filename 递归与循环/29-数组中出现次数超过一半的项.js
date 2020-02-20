/**
 * 29. 数组中有一个数字出现的次数超过数组长度的一半，找出这个数字
 * 如[1,2,3,2,2,2,5,4,2],长度为9，而2出现5次
 */

/**
 * 方案一，根据数组特点
 * 数字出现的次数超过数组长度的一半，说明出现的次数比其他所有
 * 出现数字的总和还要多。
 * 考虑保存两个值，一个是数组中的数字target=nums[0]，一个是次数times
 * times默认为1，如果下一个数字等于target，则加一，否则减一
 * 等于0的时候说明出现次数不大于其他所有数字总和，将其赋给target
 */

function check(nums, target) {
  let times = 0;
  nums.forEach(num => num === target && times++);
  return times * 2 >= nums.length;
}

function moreThanHalfTime(nums) {
  if (!Array.isArray(nums) || nums.length === 0) {
    return;
  }
  let times = 1,
    target = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (times === 0) {
      times = 1;
      target = nums[i];
    } else if (target === nums[i]) {
      times++;
    } else {
      times--;
    }
  }
  return check(nums, target) ? target : null;
}

console.log(moreThanHalfTime([3, 1, 3, 2, 2]));
console.log(moreThanHalfTime([1, 2, 3, 2, 2, 2, 5, 4, 2]));
