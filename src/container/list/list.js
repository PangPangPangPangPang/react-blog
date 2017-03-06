/**
 * Created by wangyefeng on 03/03/2017.
 */
import React from 'react'
import './list.css'
import Summary from '../../compontent/summary'
import request from '../../action/request'
import { connect } from 'react-redux'
import getStore from '../../App'

class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      content: getStore().getState().request.list || {}
    }
  }
  componentDidMount() {
    let { dispatch } = this.props
    dispatch(request('list'))
  }
  getlist = () => {
    let list = new Array()
    let source = this.props.list || {}
    let source_list = source.res
    if (source_list instanceof Array) {
      for (let i = 0; i < source_list.length; i++) {
        list.push(<Summary
          key={i}
          tags={source_list[i].tags}
          name={source_list[i].title}
          id={source_list[i].id}
          time={source_list[i].time}
        />)
      }
    }
    return list
  }
  render() {
    return (
      <div className="list-template">
        {this.getlist()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    list: state.request.list
  }
}

export default connect(mapStateToProps)(List)
