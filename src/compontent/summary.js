/**
 * Created by wangyefeng on 03/03/2017.
 */
import React from 'react'
import './summary.css'
import { Card, Tag } from 'antd'
import { Link } from 'react-router'
import { hashHistory} from 'react-router'

class Summary extends React.Component {
  click_detail = (e) => {
    hashHistory.push('list/'+this.props.id)
  }
  random_color = () => {
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
  render_tag = () => {
    let arr = new Array()
    for (let i = 0; i < this.props.tags.length; i++) {
      arr.push(<Tag color={this.random_color()} key={i}>{this.props.tags[i]}</Tag>)
    }
    return arr
  }
  render() {
    return (
      <Card title={this.props.name} onClick={this.click_detail} extra={<Link >Detail</Link>} className="summary-card">

        {this.render_tag()}
      </Card>
    )
  }
}

export default Summary
