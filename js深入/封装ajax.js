//ajax自己封装
function myAjax(opt) {
  opt = opt || {};
  opt.url = opt.url || "";
  opt.method = opt.method.toUpperCase || "POST";
  opt.aysnc = opt.aysnc || true;
  opt.data = opt.data || null;
  opt.success = opt.success || function() {};
  let xhr;
  if (XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }
  let params = [];
  for (var key in opt.data) {
    params.push(`${key}=${data[key]}`);
  }
  let postData = params.join("&");
  if (opt.method.toUpperCase === "POST") {
    xhr.open(opt.method, opt.url, opt.async);
    xhr.setRequestHeader(
      "Content-Type",
      "application/x-www-form-urlencoded;charset=utf-8"
    );
    xhr.send(postData);
  } else {
    xhr.open(opt.method, opt.url + "?" + postData, opt.async);
    xhr.send();
  }
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      opt.success(xhr.responseText);
    }
  };
}
//url取参数
var url = "http://www.taobao.com/index.php?key0=0&key1=1&key2=2";
function parseQueryString(url) {
  let str = url.split("?")[1];
  let items = str.split("&");
  let name, value, arr, obj;
  for (let i = 0; i < items.length; i++) {
    arr = items[i].split("=");
    name = arr[0];
    value = arr[1];
    obj[name] = value;
  }
  return obj;
}
