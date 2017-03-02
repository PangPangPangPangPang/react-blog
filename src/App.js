/**
 * Created by wangyefeng on 02/03/2017.
 */
import React from "react"
import ReactDom from "react-dom"
import Hello from "./hello.js"

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <div id="app">
      <Hello/>
    </div>
  }
}

ReactDom.render(<App/>, document.getElementById("root"))
