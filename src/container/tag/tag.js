/**
 * Created by wangyefeng on 05/03/2017.
 */
import React from 'react'
import { connect } from 'react-redux'
import './tag.css'
import request from '../../action/request'

class Tag extends React.Component {
  static propTypes = {
    dispatch: React.PropTypes.func,
  }
  static defaultProps = {
    dispatch: {},
  }
  constructor() {
    super()
    let login = false
    if (localStorage.getItem('userId')) {
      login = true
    }
    this.arr = []
    this.ws = new WebSocket('ws://www.mmmmmax.wang/chat')
    this.state = {
      userName: '',
      toName: '',
      sentence: '',
      arr: [],
      loginStatus: login,
    }
  }
  componentDidMount() {
    this.ws.onopen = () => {
    }
    this.ws.onmessage = (e) => {
      this.arr.push(
        <div>{`Fr:${JSON.parse(e.data).content.message}`}</div>,
      )
      this.setState({
        arr: this.arr,
      })
    }
    this.ws.onclose = () => {
    }
    this.ws.onerror = (e) => {
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
    const retsult = {
      from: this.state.userName,
      to: this.state.toName,
      message: this.state.sentence,
    }
    const a = {
      action: 'normal',
      content: retsult,
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
    const { dispatch } = this.props
    const result = {
      name: this.state.userName,
    }
    dispatch(request('register', result)).then((res) => {
      if (res.statusCode === 1) {
        localStorage.setItem('userId', res.userId)
        this.setState({
          loginStatus: true,
        })
      }
    })
  }

  showLoginUserInterface = () => {
    if (!this.state.loginStatus) {
      return (
        <div>
          <div>from:</div>
          <input className="tag-input" type="text" value={this.state.userName} onChange={this.handleChange} />
          <div>to:</div>
          <input className="tag-input" type="text" value={this.state.toName} onChange={this.handleToChange} />
          <button onClick={this.clickRegister}>
            Submit
          </button>
        </div>
      )
    }
    return (
      <div>
        <input className="tag-input" type="text" value={this.state.sentence} onChange={this.handleSentenceChange} />
        <button onClick={this.clickButton}>
          Send Message!
        </button>
      </div>
    )
  }
  render() {
    return (
      <div>
        { this.showLoginUserInterface() }
        {this.state.arr}
      </div>
    )
  }

}

export default connect()(Tag)
