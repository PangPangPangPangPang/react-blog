/**
 * Created by wangyefeng on 02/03/2017.
 */
import React from 'react'
import { Layout, Card, Timeline } from 'antd';
import './about.css'
const { Header, Footer, Sider, Content } = Layout;



export default class About extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="about-card">
        <Timeline>
          <Timeline.Item color="green">
            <p style={{fontWeight: 'bold'}}>百度</p>
            <p>目前就职于手机百度团队,负责RN部分业务</p>
          </Timeline.Item>
          <Timeline.Item color="blue">
            <p style={{fontWeight: 'bold'}}>新浪</p>
            <p>视频模块，工程模块化，工程效率相关</p>
          </Timeline.Item>
          <Timeline.Item color="blue">
            <p style={{fontWeight: 'bold'}}>有邻</p>
            <p>作为小弟跟着带头大哥学习，阿里团队还是很棒哒！</p>
          </Timeline.Item>
        </Timeline>
      </div>
      // <div>
      //   <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
      //     <div className="custom-image">
      //       <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
      //     </div>
      //     <div className="custom-card">
      //       <h3>Europe Street beat</h3>
      //       <p>www.instagram.com</p>
      //     </div>
      //   </Card>
      // </div>
      // <div>
      //   <Layout style={{backgroundColor:"white"}}>
      //     <Header className="title">Max Wang</Header>
      //     <Content className="title content">热热爱技术的少年</Content>
      //     <Footer className="title">此致，敬礼！</Footer>
      //   </Layout>
      // </div>
    )
  }
}