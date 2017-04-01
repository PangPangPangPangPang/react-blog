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

  getImg = () => {
    if (this.props.img) {
      return (
        <img className="normal-button-image" src={this.props.img} alt="" />
      )
    }
    return null
  }

  render() {
    return (
      <button className="normal-button" onClick={this.props.handleClick}>
        {this.getImg()}
        <div className="normal-button-title">{this.props.title}</div>
      </button>
    )
  }
}

export default NormalButton
