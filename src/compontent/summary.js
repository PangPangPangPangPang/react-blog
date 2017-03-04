/**
 * Created by wangyefeng on 03/03/2017.
 */
import React from 'react'
import './summary.css'
import { Card } from 'antd'
import { Link } from 'react-router'

class Summary extends React.Component {
  render() {
    return (
      <Card title={this.props.name} extra={<Link to={'list/'+ this.props.id}>Detail</Link>} className="summary-card">
        <p>content</p>
      </Card>
    )
  }
}

export default Summary
