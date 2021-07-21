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
  return (
    <div className='box'>
      {props.children}
    </div>
  )
}

const onRenderBoxes = myBoxes.map(box => (
  <Box key={box.id}>{box.content}</Box>
));

const app = <div className="container">{onRenderBoxes}</div>

ReactDOM.render(app, root);
