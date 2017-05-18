/**
 * Created by wangyefeng on 2017-04-25 13:32
 */

import React from 'react'
import './footer.css'
import NormalButton from '../../compontent/normal_button'

const WeiboImg = require('../../resource/svg/weibo.svg')
const GithubImg = require('../../resource/svg/github.svg')

const Footer = (props) => {
  const getClazzName = () => {
    if (props.color === 'white') {
      return 'footer-white'
    }
    return 'footer-body'
  }
  const getIconClazz = () => {
    if (props.color === 'white') {
      return 'footer-icon-black'
    }
    return 'footer-icon-white'
  }
  const clickWeibo = () => {
    window.location.href = 'http://weibo.com/mmmmmmaxx'
  }
  const clickGithub = () => {
    window.location.href = 'http://www.github.com/PangPangPangPangPang'
  }

  return (
    <div className={getClazzName()}>
      <div>
        Powered by Max.
      </div>
      <div className="footer-icons">
        <WeiboImg className={getIconClazz()} onClick={clickWeibo} />
        <GithubImg className={getIconClazz()} onClick={clickGithub} />
      </div>
    </div>
  )
}
Footer.propTypes = {
  color: React.PropTypes.string,
}
Footer.defaultProps = {
  color: 'black',
}

export default Footer
