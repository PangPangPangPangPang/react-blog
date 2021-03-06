/**
 * Created by wangyefeng on 03/03/2017.
 */
import React from 'react'
import { hashHistory } from 'react-router'
import './summary.css'

const Summary = (props) => {
  const clickDetail = () => {
    hashHistory.push(`list/${props.id}`)
  }
  const renderTag = () => {
    const arr = []
    for (let i = 0; i < props.tags.length; i += 1) {
      arr.push(
        <div key={`${i}`} className="summary-tag">
          {props.tags[i]}
        </div>)
    }
    return arr
  }
  return (
    <div className="summary-card" onClick={clickDetail}>
      {props.name}
      <hr className="summary-seperate" />
      <div className="summary-tags">
        {renderTag()}
      </div>
    </div>
  )
}
Summary.propTypes = {
  name: React.PropTypes.string,
  tags: React.PropTypes.array,
}
Summary.defaultProps = {
  name: '',
  tags: [],
}

export default Summary
