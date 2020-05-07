//渲染虚拟dom
function render(vdom) {
  // 如果是字符串或者数字，创建一个文本节点
  if (typeof vdom === "string" || typeof vdom === "number") {
    return document.createTextNode(vdom);
  }
  const { tag, props, children } = vdom;
  // 创建真实DOM
  const element = document.createElement(tag);
  // 设置属性
  setProps(element, props);
  // 遍历子节点，并获取创建真实DOM，插入到当前节点
  children.map(render).forEach(element.appendChild.bind(element));

  // 虚拟 DOM 中缓存真实 DOM 节点
  vdom.dom = element;

  // 返回 DOM 节点
  return element;
}

function setProps(element, props) {
  Object.entries(props).forEach(([key, value]) => {
    setProp(element, key, value);
  });
}

function setProp(element, key, vlaue) {
  element.setAttribute(
    // className使用class代替
    key === "className" ? "class" : key,
    vlaue
  );
}
const vdom = <div>hello world!!!</div>; // h('div', {}, 'hello world!!!')
const app = document.getElementById("app");
const ele = render(vdom);
app.appendChild(ele);

//diff算法
class Component {
  vdom = null; // 组件的虚拟DOM表示
  $el = null; // 虚拟DOM生成的真实节点

  state = {
    text: "Initialize the Component"
  };

  // 手动修改组件state
  setState(newState) {
    this.state = {
      ...this.state,
      ...newState
    };
    const newVdom = this.render();
    const patches = diff(this.vdom, newVdom);
    patch(this.$el, patches);
  }

  changeText(text) {
    this.setState({
      text
    });
  }

  render() {
    const { text } = this.state;
    return <div>{text}</div>;
  }
}
const app = document.getElementById("app");
const component = new Component();
createElement(app, component);

// 将文本更改为数字，每秒 +1
let count = 0;
setInterval(() => {
  component.changeText(++count);
}, 1000);
