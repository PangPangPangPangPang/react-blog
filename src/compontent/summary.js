/**
 * Created by wangyefeng on 03/03/2017.
 */
import React from 'react'
import './summary.css'
import { Card, Tag } from 'antd'
import { Link } from 'react-router'
import { hashHistory} from 'react-router'

let Summary = (props) => {
  let click_detail = () => {
    hashHistory.push('list/'+props.id)
  }
  let random_color = () => {
    let color_list = [
      "pink-inverse",
      "red-inverse",
      "orange-inverse",
      "green-inverse",
      "cyan-inverse",
      "blue-inverse",
      "purple-inverse"
    ]
    let count = Math.floor((Math.random() * color_list.length))
    return color_list[count]
  }
  let render_tag = () => {
    let arr = new Array()
    for (let i = 0; i < props.tags.length; i++) {
      arr.push(<Tag color={random_color()} key={i}>{props.tags[i]}</Tag>)
    }
    return arr
  }
  return (
    <Card title={props.name} onClick={click_detail} extra={<Link >Detail</Link>} className="summary-card">
      {render_tag()}
    </Card>
  )
}

export default Summary
