/**
 * Created by wangyefeng on 02/03/2017.
 */
import { Button } from 'antd'
import React from 'react'
import './home.css'
import '../about/about.css'
import Img from './timg.jpg'
import NormalButton from '../../compontent/normal_button'
import HomeImg from '../../resource/png/home.png'

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
        <NormalButton className="home-button" title="Home Page" img={HomeImg} handleClick={this.click} />
        <div className="home-side" hidden={this.state.show}>
          Nothing!233333333
        </div>
      </div>
    )
  }
}
