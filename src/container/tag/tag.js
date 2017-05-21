/**
 * Created by wangyefeng on 05/03/2017.
 */
import React from 'react'
import './tag.css'

class Tag extends React.Component {
  constructor() {
    super()
    this.ws = new WebSocket('ws://localhost:8000/chat')
    this.state = {
      userName: '',
      toName: '',
    }
  }
  componentDidMount() {
    this.ws.onopen = () => {
    }
    this.ws.onmessage = () => {
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
  clickButton = () => {
    const a = {
      action: 'normal',
      from: this.state.userName,
      to: this.state.toName,
      message: 'Hello!',
    }
    this.ws.send(JSON.stringify(a))
  }
  clickRegister = () => {
    const a = {
      action: 'register',
      from: this.state.userName,
      to: this.state.toName,
    }
    this.ws.send(JSON.stringify(a))
  }
  render() {
    return (
      <div>
        <form onSubmit={this.clickRegister}>
          UserName:
          <input type="text" value={this.state.userName} onChange={this.handleChange} />
          <input type="text" value={this.state.toName} onChange={this.handleToChange} />
          <button type="submit">Submit</button>
        </form>
        <button onClick={this.clickButton}>
          Send Message!
        </button>
      </div>
    )
  }

}

export default Tag
