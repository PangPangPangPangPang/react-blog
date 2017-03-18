/**
 * Created by wangyefeng on 04/03/2017.
 */
import React from 'react'
import marked from 'marked'
import 'highlight.js/styles/darcula.css'
import { connect } from 'react-redux'
import request from '../../action/request'

const renderer = new marked.Renderer()

renderer.heading = function (text, level) {
  const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-')

  return '<h' + level + '><a name="' +
    escapedText +
    '" class="anchor" href="#' +
    escapedText +
    '"><span class="header-link"></span></a>' +
    text + '</h' + level + '>'
}
marked.setOptions({
  highlight: function (code) {
    return require('highlight.js').highlightAuto(code).value;
  },
  renderer: renderer,
})

class Article extends React.Component {
  constructor(props) {
    super(props)
    this.state = { content: '' }
  }
  componentDidMount() {
    const { dispatch } = this.props
    const dic = { id: this.props.params.id }
    dispatch(request('article', dic, 'get'))
      .then(res => {
        this.setState({
          content: res.content,
        })
      })
  }
  render() {
    return <div className="page" dangerouslySetInnerHTML={{ __html: marked(this.state.content) }} />
  }
}

export default connect()(Article)
