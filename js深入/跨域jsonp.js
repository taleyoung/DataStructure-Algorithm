//promise封装
const jsonp = function(url, data) {
  return new Promise((resolve, reject) => {
    let jsNode = document.createElement("script");
    let dataString = url.indexOf("?") === -1 ? "?" : "&";
    url += `${dataString}callback=${callbackName}`;
    if (data) {
      for (let i in data) {
        url += `&${i}=${data[i]}`;
      }
    }
    jsNode.src = url;
    window[callbackName] = result => {
      delete window[callbackName];
      document.body.removeChild(jsNode);
      if (result) {
        resolve(result);
      } else {
        reject(result);
      }
    };
    // js加载异常的情况
    jsNode.addEventListener(
      "error",
      () => {
        delete window[callbackName];
        document.body.removeChild(jsNode);
        reject("JavaScript资源加载失败");
      },
      false
    );
    // 添加js节点到document上时，开始请求
    document.body.appendChild(jsNode);
  });
};
jsonp("http://192.168.0.103:8081/jsonp", { a: 1, b: "heiheihei" })
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.error(err);
  });

//普通的封装
function jsonp(url, data, calback) {
  let script = document.createElement("script");
  url += url.indexOf("?") === -1 ? "?" + "callback" + "=" + callback : "&";
  let params;
  for (let i in data) {
    params += "&" + i + "=" + data[i];
  }
  url += params;
  script.src = url;
  document.querySelector("header").appendChild(script);
}
jsonp("http://baidu.com", { id: 34 }, "myCallback");

/**
 * html5标准中的postMessage用来跨域
 */
//可能写错了
//窗口A（http://A.com） 向跨域的B窗口发送信息
window.postMessage("data", "http://B.com");
window.addEventListener(
  "message",
  function(e) {
    console.log("e.origin", e.origin); //http://A.com
    console.log("e.source", e.source); //B的window
    console.log("e.data", e.data); //data
  },
  false
);

//CORS的原理就是让浏览器知道发送请求时加上origin为*
