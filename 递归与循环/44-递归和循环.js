/**
 * 从扑克牌中随机抽5张牌，判断是不是一个顺子，即这 5 张牌是不是连续的。
 * 2 ～ 10 为数字本身，A为1,J为11，Q为12，K为13，而大、小王可以看成任意数字。
 */

/**
 * 要对题意理解并转化，看似有具体场景，实际上就是判断是数组是否连续
 * 特殊在0可以表示任何数，只要判断0的个数和interval的个数就可
 */

function isContinues(nums) {
  if (!Array.isArray(nums) || nums.length === 0) {
    return false;
  }
  let length = nums.length;
  nums = nums.sort((x, y) => x - y);
  let zeroNum = 0;
  nums.forEach(num => num === 0 && zeroNum++);
  let interval = 0;
  for (let i = zeroNum + 1; i < length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      return false;
    }
    interval += nums[i + 1] - nums[i] - 1;
  }
  return interval <= zeroNum;
}

console.log(isContinues([8, 10, 0, 6, 0]));
