/**
 * Created by wangyefeng on 03/03/2017.
 */
import React from 'react'
import { connect } from 'react-redux'
import './list.css'
import request from '../../action/request'
import getStore from '../../App'

class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      content: getStore().getState().request.list || {},
    }
  }
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(request('list'))
  }
  getlist = () => {
    // const list = new Array()
    const list = []
    const source = this.props.list || {}
    const sourceList = source.res
    if (sourceList instanceof Array) {
      for (let i = 0; i < sourceList.length; i++) {
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
      </div>
    )
  }
}

List.propTypes = {
  list: React.PropTypes.list,
  dispatch: React.PropTypes.dispatch,
}
List.defaultProps = {
  list: [],
  dispatch: {},
}
function mapStateToProps(state) {
  return {
    list: state.request.list,
  }
}

export default connect(mapStateToProps)(List)
