/**
 * Created by wangyefeng on 03/03/2017.
 */

import Type from './type'
import getStore from '../App.js'

const base_url = 'http://www.mmmmmax.wang/'

export default function request(url, params, method) {
  var reqparams = {};
  var request_url = base_url + url
  if (arguments.length < 3) {
    method = 'get';
  }
  if (arguments.length == 1) {
    params = {}
  }
  if (method === 'get') {
    let querystring = Object.keys(params).map(key => `${key}=${params[key]}`).join('&');
    if (querystring.length !== 0) {
      request_url += `?${querystring}`;
    }
  } else {
    reqparams.body = json.stringify(params);
    reqparams.headers = {
      'content-type': 'application/json'
    };
  }
  getStore().dispatch(request_action(Type.REQUEST_START, url, {}))

  return function (dispatch) {
    return fetch(request_url, reqparams)
      .then(res => res.json())
      .then(res => {
        dispatch(request_action(Type.REQUEST_SUCCESS, url, res))
        return res
          })
      .catch(res => {
        dispatch(request_action(Type.REQUEST_FAILURE, url, res))
        return res
      })
  }
}

function request_action(type, query, res) {
  return {
    type: type,
    query: query,
    res: res
  }
}
