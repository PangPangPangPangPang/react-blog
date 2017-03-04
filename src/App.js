/**
 * Created by wangyefeng on 02/03/2017.
 */
import React from 'react'
import ReactDOM  from 'react-dom'
import Navigator from './container/navigator'
import { Router, Route, hashHistory, IndexRedirect } from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducre/reducer'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import About from './container/about/about'
import Home from './container/home_page/home'
import List from './container/list/list'
import Article from './container/article/article'

let logger = createLogger()
let store = createStore(reducer, applyMiddleware(thunk, logger))

ReactDOM.render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Navigator}>
        <IndexRedirect to="home"/>
        <Route path="home" component={Home}/>
        <Route path="about" component={About}/>
        <Route path="list" component={List}/>
        <Route path="list/(:id)" component={Article}/>
      </Route>
    </Router>
  </Provider>
), document.getElementById("root"))

