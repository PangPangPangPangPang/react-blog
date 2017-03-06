/**
 * Created by wangyefeng on 02/03/2017.
 */
//navigator height 48px

import React from "react"
import { BackTop, Menu, Icon } from 'antd'
import { hashHistory } from "react-router"
import { connect } from "react-redux"

const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup

class Navigator extends React.Component {
  state = {
    current: 'mail',
  }
  handleClick = (e) => {
    switch (e.key) {
      case 'smile':
        hashHistory.push('about')
        break
      case 'home':
        hashHistory.push('home')
        break
      case 'article':
        hashHistory.push('list')
        break
      case 'tag':
        hashHistory.push('tag')
        break
      default:
        break
    }
    this.setState({
      current: e.key,
    });
  }
  render() {
    return (
    <div>
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="home">
          <Icon type="home" />Home Page
        </Menu.Item>
        <Menu.Item key="article" >
          <Icon type="file-text" />Article
        </Menu.Item>
        <Menu.Item key="tag">
          <Icon type="tag-o"/>Tags
        </Menu.Item>
        <Menu.Item key="smile">
          <Icon type="smile-o"/>About Me
        </Menu.Item>
      </Menu>
      {this.props.children}
    </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    value: state.count
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction)
  }
}

export default connect()(Navigator)
