/**
 * Created by wangyefeng on 2017-03-31 11:26
 */
import React from 'react'
import { hashHistory } from 'react-router'
import './header.css'
import NormalButton from '../../compontent/normal_button'
import HomeImg from '../../resource/png/home.png'
import IconImg from '../../resource/png/logo.jpg'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      backgroundColor: '',
    }
  }
  componentDidMount() {
    document.addEventListener('scroll', this.scrollEvent, false)
  }
  scrollEvent = () => {
    if (document.body.scrollTop > 90) {
      this.setState({
        backgroundColor: 'header-animation',
      })

    } else if (document.body.scrollTop < 70) {
      this.setState({
        backgroundColor: 'header-animation-back',
      })
    }
  }
  clickHome = () => {
    hashHistory.push('home')
  }
  clickArticle = () => {
    hashHistory.push('list')
  }
  clickTags = () => {
    hashHistory.push('tag')
  }
  clickAbout = () => {
    hashHistory.push('about')
  }
  render() {
    return (
      <div className="header-base">
        <div className={`header-default ${this.state.backgroundColor}`} >
          <NormalButton title="Home Page" img={HomeImg} handleClick={this.clickHome} />
          <NormalButton title="Article" img={HomeImg} handleClick={this.clickArticle} />
          <NormalButton title="Tags" img={HomeImg} handleClick={this.clickTags} />
          <NormalButton title="About Me" img={HomeImg} handleClick={this.clickAbout} />
        </div>
        <img className="header-default-icon" src={IconImg} alt="" />
      </div>
    )
  }
}

export default Header
