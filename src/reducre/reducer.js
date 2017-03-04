/**
 * Created by wangyefeng on 03/03/2017.
 */
import { combineReducers } from 'redux'

import Types from '../action/type'
const user = (state= {}, action) => {
  switch (action.type) {
    case Types.UPDATE_USER_NAME:
      return Object.assign({}, state, {name: action.name})
    default:
      return state
  }
}

const reducer = combineReducers({
  user,
})
export default reducer
