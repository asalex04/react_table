import { combineReducers, createStore } from 'redux'
import appReducer from './appReducer'
import conditionReducer from "./conditionsReducer";

const rootReducer = combineReducers({
  app: appReducer,
  condition: conditionReducer
})

const store = createStore(rootReducer)

export default store
