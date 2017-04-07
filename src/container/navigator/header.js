/**
 * Created by wangyefeng on 2017-03-31 11:26
 */
import React from 'react'
import { hashHistory } from 'react-router'
import './header.css'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      backgroundColor: '',
      iconColor: '',
    }
  }
  componentDidMount() {
    document.addEventListener('scroll', this.scrollEvent, false)
  }
  scrollEvent = () => {
    if (document.body.scrollTop > 90) {
      this.setState({
        backgroundColor: 'header-animation',
        iconColor: 'header-default-icon-animation',
      })
    } else if (document.body.scrollTop < 70) {
      this.setState({
        backgroundColor: 'header-animation-back',
        iconColor: 'header-default-icon-animation-back',
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
          <NormalButton title="Home Page" img={'home'} handleClick={this.clickHome} />
          <NormalButton title="Article" img={'article'} handleClick={this.clickArticle} />
          <NormalButton title="Tags" img={'tag'} handleClick={this.clickTags} />
          <NormalButton title="About Me" img={'about'} handleClick={this.clickAbout} />
        </div>
        <Logo className={`header-default-icon ${this.state.iconColor}`} />
      </div>
    )
  }
}

export default Header
