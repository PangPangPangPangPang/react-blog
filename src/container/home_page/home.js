/**
 * Created by wangyefeng on 02/03/2017.
 */
import React from 'react'
import './home.css'
import summary from '../../compontent/summary'


export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = { content: 'I am using __markdown__'}
  }
  componentWillMount() {
 }
  render() {
    return <summary></summary>
  }
}
