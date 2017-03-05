/**
 * Created by wangyefeng on 03/03/2017.
 */

export default function request(url, params, method) {
  var reqparams = {};
  if (arguments.length < 3) {
    method = 'get';
  }
  if (arguments.length == 1) {
    params = {}
  }
  if (method === 'get') {
    let querystring = Object.keys(params).map(key => `${key}=${params[key]}`).join('&');
    if (querystring.length !== 0) {
      url += `?${querystring}`;
    }
  } else {
    reqparams.body = json.stringify(params);
    reqparams.headers = {
      'content-type': 'application/json'
    };
  }
  return function (dispatch) {
    return fetch(url, reqparams)
      .then(res => res.json())
      .then(res => {
        return res
          })
  }
}
