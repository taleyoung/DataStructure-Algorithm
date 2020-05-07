//promise实现
function sleep(ms) {
  return new Promise(resolve => {
    console.log(111);
    setTimeout(resolve, ms);
  });
}
sleep(500).then(() => {
  console.log(222);
  //先打印111 然后500毫秒后打印222
});

//async。await封装
function sleep(ms) {
  return new Promise(resolve => {
    console.log(111);
    setTimeout(resolve, ms);
  });
}
async function test(ms) {
  const res = await sleep(ms);
  console.log(1111);
  return res;
}
