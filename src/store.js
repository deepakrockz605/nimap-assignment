import { combineReducers } from 'redux'
import dataReducer from './Reducers/dataReducer'

export default combineReducers({
  data: dataReducer
})