/**
 * Created by wangyefeng on 02/03/2017.
 */
import { Button } from 'antd'
import React from 'react'
import './home.css'
import '../about/about.css'
import Img from './timg.jpg'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = { show: true }
  }
  componentWillMount() {
  }
  click = () => {
    this.setState({
      show: !this.state.show,
    })
  }
  imgStyle = {
    height: document.body.clientHeight - 48,
    width: ((document.body.clientHeight) / 1000) * 839,
  }
  render() {
    return (
      <div className="home-template" style={{ height: document.body.clientHeight - 48 }}>
        <img className="home-img" src={Img} style={this.imgStyle} alt="" />
        <Button className="home-button" type="default" onClick={this.click}>
          Superise!
          <div className="home-side" hidden={this.state.show}>
            Nothing!233333333
          </div>
        </Button>
      </div>
    )
  }
}
