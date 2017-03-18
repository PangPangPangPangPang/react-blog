/**
 * Created by wangyefeng on 02/03/2017.
 */
import React from 'react'
import { Timeline } from 'antd'
import './about.css'
// const { Header, Footer, Sider, Content } = Layout;

export default class About extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
  }
  render() {
    return (
      <div className="about-card">
        <Timeline>
          <Timeline.Item color="green">
            <p style={{ fontWeight: 'bold' }}>百度</p>
            <p>目前就职于手机百度团队,负责RN部分业务</p>
          </Timeline.Item>
          <Timeline.Item color="blue">
            <p style={{ fontWeight: 'bold' }}>新浪</p>
            <p>视频模块，工程模块化，工程效率相关</p>
          </Timeline.Item>
          <Timeline.Item color="blue">
            <p style={{ fontWeight: 'bold' }}>有邻</p>
            <p>作为小弟跟着带头大哥学习，阿里团队还是很棒哒！</p>
          </Timeline.Item>
        </Timeline>
      </div>
    )
  }
}
