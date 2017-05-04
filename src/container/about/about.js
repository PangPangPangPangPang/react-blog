/**
 * Created by wangyefeng on 02/03/2017.
 */
import React from 'react'
import './about.css'

const img1 = require('../../resource/jpg/about1.jpg')
const img2 = require('../../resource/jpg/about2.jpg')
const img3 = require('../../resource/jpg/about3.jpg')

export default class About extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="about-card">
        <div className="about-item">
          <img src={img1} alt="" className="about-img about-img-left" />
          <div className="about-text">
            <p style={{ fontWeight: 'bold' }}>百度</p>
            <p>目前就职于手机百度团队,负责RN部分业务</p>
          </div>
        </div>
        <div className="about-item">
          <div className="about-text">
            <p style={{ fontWeight: 'bold' }}>新浪</p>
            <p>视频模块，工程模块化，工程效率相关</p>
          </div>
          <img src={img2} alt="" className="about-img about-img-right" />
        </div>
        <div className="about-item">
          <img src={img3} alt="" className="about-img about-img-left" />
          <div className="about-text">
            <p style={{ fontWeight: 'bold' }}>有邻</p>
            <p>作为小弟跟着带头大哥学习，阿里团队还是很棒哒！</p>
          </div>
        </div>
      </div>
    )
  }
}
