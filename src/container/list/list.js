/**
 * Created by wangyefeng on 03/03/2017.
 */
import React from 'react'
import { connect } from 'react-redux'
import './list.css'
import Summary from '../../compontent/summary'
import request from '../../action/request'
import getStore from '../../App'
import Loading from '../../compontent/loading'

class List extends React.Component {
  static propTypes = {
    displayLoading: React.PropTypes.number,
    dispatch: React.PropTypes.function,
    list: React.PropTypes.Array,
  }
  static defaultProps = {
    displayLoading: 1,
    dispatch: {},
    list: [],
  }
  constructor(props) {
    super(props)
    this.state = {
      content: getStore().getState().request.list || {},
    }
  }
  componentDidMount() {
    const { dispatch } = this.props
    const state = getStore().getState()
    if (!state.request.list) {
      dispatch(request('list'))
    }
  }
  getlist = () => {
    const list = []
    const source = this.props.list || {}
    const sourceList = source.res
    if (sourceList instanceof Array) {
      for (let i = 0; i < sourceList.length; i += 1) {
        list.push(<Summary
          key={i}
          tags={sourceList[i].tags}
          name={sourceList[i].title}
          id={sourceList[i].id}
          time={sourceList[i].time}
        />)
      }
    }
    return list
  }
  render() {
    return (
      <div className="list-template">
        {this.getlist()}
        <Loading show={this.props.displayLoading} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  const getShow = () => {
    if (state.request.list) {
      return 0
    }
    return 1
  }
  return {
    list: state.request.list,
    displayLoading: getShow(),
  }
}

export default connect(mapStateToProps)(List)
