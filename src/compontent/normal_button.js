/**
 * Created by wangyefeng on 2017-03-31 16:57
 */

import React from 'react'

class NormalButton extends React.Component {
  render() {
    return (
      <button onClick={this.props.handleClick}>
        my button
      </button>
    )
  }
}

export default NormalButton
