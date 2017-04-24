/**
 * Created by wangyefeng on 03/03/2017.
 */

import Type from './type'
import getStore from '../App'

// const baseUrl = 'http://www.mmmmmax.wang/'
const baseUrl = 'http://localhost:8000/'
function requestAction(type, query, res) {
  return {
    type,
    query,
    res,
  }
}

export default function request(url, params, method) {
  const reqparams = {}
  let requestUrl = baseUrl + url
  let requestMethod = method
  let requestParams = params

  if (arguments.length < 3) {
    requestMethod = 'get'
  }
  if (arguments.length === 1) {
    requestParams = {}
  }
  if (requestMethod === 'get') {
    const querystring = Object.keys(requestParams).map(key => `${key}=${requestParams[key]}`).join('&')
    if (querystring.length !== 0) {
      requestUrl += `?${querystring}`
    }
  } else {
    reqparams.body = JSON.stringify(requestParams)
    reqparams.headers = {
      'content-type': 'application/json',
    }
  }
  getStore().dispatch(requestAction(Type.REQUEST_START, url, {}))

  return function result(dispatch) {
    return fetch(requestUrl, reqparams)
      .then(res => res.json())
      .then((res) => {
        dispatch(requestAction(Type.REQUEST_SUCCESS, url, res))
        return res
      })
      .catch((res) => {
        dispatch(requestAction(Type.REQUEST_FAILURE, url, res))
        return res
      })
  }
}

