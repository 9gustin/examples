const root = document.querySelector("#root")

function Box(props) {
  return React.createElement('div', {
    className: 'box'
  },
    props.children
  )
}

const box =  React.createElement(Box, {}, '📦')

const app = React.createElement("div", { className: "container" }, box)

ReactDOM.render(app, root)
