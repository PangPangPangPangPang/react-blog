/**
 * Created by wangyefeng on 03/03/2017.
 */

import Type from './type'
import getStore from '../App'

const baseUrl = 'http://www.mmmmmax.wang/'
// const baseUrl = 'http://localhost:8000/'
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
  if (arguments.length < 3) {
    method = 'get'
  }
  if (arguments.length === 1) {
    params = {}
  }
  if (method === 'get') {
    const querystring = Object.keys(params).map(key => `${key}=${params[key]}`).join('&')
    if (querystring.length !== 0) {
      requestUrl += `?${querystring}`
    }
  } else {
    reqparams.body = json.stringify(params)
    reqparams.headers = {
      'content-type': 'application/json',
    }
  }
  getStore().dispatch(requestAction(Type.REQUEST_START, url, {}))

  return function (dispatch) {
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

