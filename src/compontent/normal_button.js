/**
 * Created by wangyefeng on 2017-03-31 16:57
 */

import React from 'react'
import './normal_button.css'

class NormalButton extends React.Component {

  propTypes = {
    // default button event handler
    handleClick: React.PropTypes.handleClick,
    // default button image
    img: React.PropTypes.img,
    // defalut button content
    title: React.PropTypes.title,
  }
  defaultProps = {
    handleClick: () => {},
    img: '',
    title: '',
  }

  constructor(props) {
    super(props)
    this.state = {
      backgroundColor: '',
      fontColor: '',
      imgColor: '',
    }
  }

  componentDidMount() {
    document.addEventListener('scroll', this.scrollEvent, false)
  }

  scrollEvent = () => {
    if (document.body.scrollTop > 90) {
      this.setState({
        backgroundColor: 'normal-button-animation',
        fontColor: 'normal-button-title-animation',
        imgColor: 'normal-button-image-animation',
      })
    } else if (document.body.scrollTop < 70) {
      this.setState({
        backgroundColor: 'normal-button-animation-back',
        fontColor: 'normal-button-title-animation-back',
        imgColor: 'normal-button-image-animation-back',
      })
    }
  }
  getImg = () => {
    let Img = null
    switch (this.props.img) {
      case 'home': {
        Img = require('../resource/svg/home.svg')
        break
      }
      case 'tag': {
        Img = require('../resource/svg/push-pin.svg')
        break
      }
      case 'article': {
        Img = require('../resource/svg/notebook-1.svg')
        break
      }
      case 'about': {
        Img = require('../resource/svg/user-6.svg')
        break
      }
      default: {
        Img = require('../resource/svg/home.svg')
        break
      }
    }
    return (
      <Img className={`normal-button-image ${this.state.imgColor}`} />
    )
  }

  render() {
    return (
      <button className={`normal-button ${this.state.backgroundColor}`} onClick={this.props.handleClick}>
        {this.getImg()}
        <div className={`normal-button-title ${this.state.fontColor}`}>{this.props.title}</div>
      </button>
    )
  }
}
export default NormalButton
