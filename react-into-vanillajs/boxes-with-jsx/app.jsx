const rootJSX = document.querySelector("#rootJSX")

function Box(props) {
  return (
    <div className='box'>
      {props.children}
    </div>
  )
}

const appJSX = (
  <div className="container">
    <Box>📦</Box>
  </div>
)

ReactDOM.render(appJSX, rootJSX)
