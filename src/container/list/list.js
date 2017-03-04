/**
 * Created by wangyefeng on 03/03/2017.
 */
import React from 'react'
import './list.css'
import Summary from '../../compontent/summary'

export default class List extends React.Component {
  getlist(num) {
    let list = new Array()
    for (let i = 0; i < num; i++) {
      list.push(<Summary key={i} name="haha" id="111"/>)
    }
    return list
  }
  render() {
    return (
      <div className="template">
        {this.getlist(10)}
      </div>
    )
  }
}
