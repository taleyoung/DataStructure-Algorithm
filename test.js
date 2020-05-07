// {a:1},'a'  -> 1

//{a:[1, {b:2}]}  ,'a[1].b'  -> 2

function get(obj, str) {
  if (!str) {
    return "";
  }
  let arr = str.split("");
  console.log("arr :", arr);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === "[") {
    }
  }
}

get({ a: 1 }, "a");
