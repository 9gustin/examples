const root = document.querySelector("#root");

const myBoxes = [
  {
    id: 'box1',
    content: 'hello world! ✨'
  },
  {
    id: 'box2',
    content: 'React.js ⚛️'
  },
  {
    id: 'box3',
    content: '📦'
  }
];

function Box(props) {
  return React.createElement('div', {
    className: 'box'
  },
    props.children
  );
}

const onRenderBoxes = myBoxes.map(box => (
  React.createElement(Box, { key: box.id }, box.content)
));

const app = React.createElement("div", { className: "container" }, onRenderBoxes);

ReactDOM.render(app, root);
