/**
 *
 * E-189 旋转数组
 */
[0, 1, 2, 3, 4, 5, 6][(4, 5, 6, 1, 2, 3)];
[6, 1, 2, 3, 4, 5, 0][(6, 0, 2, 3, 4, 5, 1)];
//暴力交换法
let rotate1 = function(nums, k) {
  let len = nums.length;
  let t, prev;
  for (let i = 0; i < k; i++) {
    prev = nums[len - 1];
    //下面每轮for循环旋转一位
    for (let j = 0; j < len; j++) {
      //这里是将prev和每一位交换，然后prev把交换来的值与下一位交换
      t = nums[j];
      nums[j] = prev;
      prev = t;
    }
  }
  return nums;
};

//循环交换法
let rotate2 = function(nums, k) {
  k = k % nums.length;
  let count = 0;
  for (let start = 0; count < nums.length; start++) {
    let prev = nums[start];
    let current = start;
    do {
      let next = (current + k) % nums.length;
      let t = prev;
      prev = nums[next];
      nums[next] = t;
      current = next;
      count++;
      console.log("nums :", nums);
    } while (start != current);
  }
  return nums;
};

console.log("rotate([0,1,2,3,4]) :", rotate2([0, 1, 2, 3, 4], 3));
