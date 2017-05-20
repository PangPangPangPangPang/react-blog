/**
 * Created by wangyefeng on 05/03/2017.
 */
import React from 'react'
import './tag.css'

class Tag extends React.Component {
  constructor() {
    super()
    this.ws = new WebSocket('ws://localhost:8000/chat')
  }
  componentDidMount() {
    this.ws.onopen = () => {
      console.log('open')
    }
    this.ws.onmessage = (obj) => {
      console.log(obj)
    }
    this.ws.onclose = () => {
      console.log('close')

    }
    this.ws.onerror = (error) => {
      console.log(error)
    }
  }
  clickButton = () => {
    this.ws.send('wokao')
  }
  render() {
    return (
      // <SocketProvider socket={this.socket}>
        <div >
          <button className="tag-button" onClick={this.clickButton} />
        </div>
      // </SocketProvider>
    )
  }

}

export default Tag
