/**
 * Created by wangyefeng on 03/03/2017.
 */
import React from 'react'
import { Card, Tag } from 'antd'
import { Link, hashHistory } from 'react-router'
import './summary.css'

const Summary = (props) => {
  const clickDetail = () => {
    hashHistory.push(`list/${props.id}`)
  }
  const randomColor = () => {
    const colorList = [
      'pink-inverse',
      'red-inverse',
      'orange-inverse',
      'green-inverse',
      'cyan-inverse',
      'blue-inverse',
      'purple-inverse',
    ]
    const count = Math.floor((Math.random() * colorList.length))
    return colorList[count]
  }
  const renderTag = () => {
    const arr = []
    for (let i = 0; i < props.tags.length; i++) {
      arr.push(<Tag color={randomColor()} key={i}>{props.tags[i]}</Tag>)
    }
    return arr
  }
  return (
    <Card title={props.name} onClick={clickDetail} extra={<Link >Detail</Link>} className="summary-card">
      {renderTag()}
    </Card>
  )
}
Summary.propTypes = {
  name: React.PropTypes.name,
  tags: React.PropTypes.tags,
}
Summary.defaultProps = {
  name: '',
  tags: [],
}

export default Summary
