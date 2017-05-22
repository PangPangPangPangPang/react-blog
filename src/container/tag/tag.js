/**
 * Created by wangyefeng on 05/03/2017.
 */
import React from 'react'
import './tag.css'

class Tag extends React.Component {
  constructor() {
    super()
    this.arr = []
    this.ws = new WebSocket('ws://localhost:8000/chat')
    this.state = {
      userName: '',
      toName: '',
      sentence: '',
      arr: [],
    }
  }
  componentDidMount() {
    this.ws.onopen = () => {
    }
    this.ws.onmessage = (e) => {
      this.arr.push(
        <div>{`Fr:${JSON.parse(e.data).message}`}</div>,
      )
      this.setState({
        arr: this.arr,
      })
    }
    this.ws.onclose = () => {
    }
    this.ws.onerror = () => {
    }
  }
  handleChange = (e) => {
    this.setState({
      userName: e.target.value,
    })
  }
  handleToChange = (e) => {
    this.setState({
      toName: e.target.value,
    })
  }
  handleSentenceChange = (e) => {
    this.setState({
      sentence: e.target.value,
    })
  }
  clickButton = () => {
    const a = {
      action: 'normal',
      from: this.state.userName,
      to: this.state.toName,
      message: this.state.sentence,
    }
    this.arr.push(
      <div>{`Me:${this.state.sentence}`}</div>,
    )
    this.setState({
      arr: this.arr,
    })
    this.ws.send(JSON.stringify(a))
  }
  clickRegister = () => {
    const a = {
      action: 'register',
      from: this.state.userName,
      to: this.state.toName,
      message: 'register',
    }
    this.ws.send(JSON.stringify(a))
  }
  render() {
    return (
      <div>
        <form onSubmit={this.clickRegister}>
          <div>from:</div>
          <input className="tag-input" type="text" value={this.state.userName} onChange={this.handleChange} />
          <div>to:</div>
          <input className="tag-input" type="text" value={this.state.toName} onChange={this.handleToChange} />
          <button type="submit">Submit</button>
        </form>
        <input className="tag-input" type="text" value={this.state.sentence} onChange={this.handleSentenceChange} />
        <button onClick={this.clickButton}>
          Send Message!
        </button>
        {this.state.arr}
      </div>
    )
  }

}

export default Tag
