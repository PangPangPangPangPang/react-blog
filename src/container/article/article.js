/**
 * Created by wangyefeng on 04/03/2017.
 */
import React from 'react'
import marked from 'marked'
import hl from 'highlight.js'
import { connect } from 'react-redux'
import '../../../node_modules/highlight.js/styles/monokai-sublime.css'
import request from '../../action/request'
import './article.css'
import getStore from '../../App'
import Loading from '../../compontent/loading'

const renderer = new marked.Renderer()

marked.setOptions({
  highlight(code) {
    return `<div class="article-code" >${hl.highlightAuto(code).value}</div>`
  },
  renderer,
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: true,
  sanitize: true,
  smartLists: true,
  smartypants: true,
})

renderer.heading = function heading(text, level) {
  const font = 24 - (level * 2)
  return `<div style="font-size: ${font}px;margin-bottom: 10px"><strong>${text}</strong></div>`
}

renderer.paragraph = function paragraph(text) {
  return `<div class="article-paragraph">${text}</div>`
}

renderer.list = function list(body, ordered) {
  const type = ordered ? 'lower-roman' : 'circle'
  return `<ul style="list-style-type: ${type}; margin-left: 20px; font-size: 15px; margin-bottom: 20px;">${body}</ul>`
}

renderer.listitem = function listitem(text) {
  return `<li>${text}</li>`
}

renderer.blockquote = function em(text) {
  return `<blockquote>${text}</blockquote>`
}

class Article extends React.Component {
  constructor(props) {
    super(props)
    this.state = { content: '' }
  }
  componentDidMount() {
    const { dispatch } = this.props
    const dic = { id: this.props.params.id }
    dispatch(request('article', dic, 'get'))
  }
  render() {
    return <div className="article-page" dangerouslySetInnerHTML={{ __html: marked(this.props.content.res.content) }} />
  }
}

Article.propTypes = {
  dispatch: React.PropTypes.dispatch,
  params: React.PropTypes.params,
  content: React.PropTypes.content,
}

Article.defaultProps = {
  dispatch: {},
  params: {},
  content: { res: { content: '' } },
}

function mapStateToProps(state) {
  return {
    content: state.request.article,
  }
}

export default connect(mapStateToProps)(Article)
