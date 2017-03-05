/**
 * Created by wangyefeng on 03/03/2017.
 */
import React from 'react'
import './list.css'
import Summary from '../../compontent/summary'
import request from '../../action/request'
import { connect } from 'react-redux'

class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      content: new Array()
    }
  }
  componentDidMount() {
    let { dispatch } = this.props
    dispatch(request('http://localhost:8000/list'))
      .then(res => {
        this.setState({
          content: res
        })
      })
  }
   getlist = () => {
    let list = new Array()
    let source_list = this.state.content
    for (let i = 0; i < source_list.length; i++) {
      list.push(<Summary key={i} tags={source_list[i].tags} name={source_list[i].title} id={source_list[i].id} time={source_list[i].time}/>)
    }
    return list
  }
  render() {
    return (
      <div className="list-template">
        {this.getlist(10)}
      </div>
    )
  }
}

export default connect()(List)
