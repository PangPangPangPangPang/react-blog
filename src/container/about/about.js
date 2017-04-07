/**
 * Created by wangyefeng on 02/03/2017.
 */
import React from 'react'
import './about.css'

export default class About extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="about-card">
        <div className="about-detail">
          <div className="about-square" style={{ backgroundColor: 'red' }} />
          <p style={{ fontWeight: 'bold' }}>百度</p>
          <p>目前就职于手机百度团队,负责RN部分业务</p>
        </div>
        <div className="about-detail">
          <div className="about-square" />
          <p style={{ fontWeight: 'bold' }}>新浪</p>
          <p>视频模块，工程模块化，工程效率相关</p>
        </div>
        <div className="about-detail">
          <div className="about-square" />
          <p style={{ fontWeight: 'bold' }}>有邻</p>
          <p>作为小弟跟着带头大哥学习，阿里团队还是很棒哒！</p>
        </div>
      </div>
    )
  }
}
