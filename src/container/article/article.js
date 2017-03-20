/**
 * Created by wangyefeng on 04/03/2017.
 */
import React from 'react'
import marked from 'marked'
import hl from 'highlight.js'
import { connect } from 'react-redux'
import request from '../../action/request'
import './article.css'

const renderer = new marked.Renderer()

renderer.heading = function heading(text, level) {
  let content = ''
  if (level === 1) {
    content = `${text}<br/><br/>`
  } else {
    content = `<br/>${text}<br/><br/>`
  }
  const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-')
  return `<h${level}><a name="${escapedText}" class="anchor" href="#${escapedText}"><span class="header-link"></span></a>${content}</h${level}>`
}

renderer.list = function list(body){
return `<div class="article-list" >${body}</div>`
}

// renderer.list = function list(body, ordered) {
  // const type = ordered ? 'ol' : 'ul'
  // const attrs = {
    // type: '',
    // start: '',
  // }

  // if (+ordered || +ordered === 0) {
    // if (+ordered !== 1) {
      // attrs.start = `start="${ordered}"`
    // }
  // } else {
    // const typeCase = (ordered === ordered.toUpperCase()) ? 'A' : 'a'
    // attrs.type = `type="${typeCase}"`
    // const startLetter = ordered.toString().toUpperCase().charCodeAt(0) - 64
    // attrs.start = (startLetter > 1 && startLetter < 9) ? `start="${startLetter}"` : ''
  // }
  // const attr = [attrs.type, attrs.start].filter(x => x).join(' ')

  // return `<${type} ${attr}>
    // ${body}
    // </${type}>
    // `
// }
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

class Article extends React.Component {
  constructor(props) {
    super(props)
    this.state = { content: '' }
  }
  componentDidMount() {
    const { dispatch } = this.props
    const dic = { id: this.props.params.id }
    dispatch(request('article', dic, 'get'))
      .then((res) => {
        this.setState({
          content: res.content,
        })
      })
  }
  render() {
    return <div className="article-page" dangerouslySetInnerHTML={{ __html: marked(this.state.content) }} />
  }
}
Article.propTypes = {
  dispatch: React.PropTypes.dispatch,
  params: React.PropTypes.params,
}

Article.defaultProps = {
  dispatch: {},
  params: {},
}

export default connect()(Article)
