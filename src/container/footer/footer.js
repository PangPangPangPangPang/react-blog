/**
 * Created by wangyefeng on 2017-04-25 13:32
 */

import React from 'react'
import './footer.css'

const Footer = (props) => {
  const getClazzName = () => {
    if (props.color === 'white') {
      return 'footer-white'
    }
    return 'footer-body'
  }
  return (
    <div className={getClazzName()}>
      <div>
        Powered by Max.
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
