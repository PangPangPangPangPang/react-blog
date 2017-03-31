/**
 * Created by wangyefeng on 02/03/2017.
 */
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Router, Route, hashHistory, IndexRedirect } from 'react-router'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import React from 'react'
import ReactDOM from 'react-dom'
import Navigator from './container/navigator'
import reducer from './reducer/reducer'
import About from './container/about/about'
import Home from './container/home_page/home'
import List from './container/list/list'
import Tag from './container/tag/tag'
import Article from './container/article/article'

const logger = createLogger()
const store = createStore(reducer, applyMiddleware(thunk, logger))

export default function () {
  return store
}

ReactDOM.render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Navigator}>
        <IndexRedirect to="home" />
        <Route path="home" component={Home} />
        <Route path="about" component={About} />
        <Route path="tag" component={Tag} />
        <Route path="list" component={List} />
        <Route path="list/(:id)" component={Article} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'))

