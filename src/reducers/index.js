import { combineReducers } from 'redux'

import userReducer from './user'

//combineReducers will be used to combine different reducer into a common file
export default combineReducers({
  userReducer: userReducer,
})