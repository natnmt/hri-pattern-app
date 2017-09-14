import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'

import { toggle } from '../reducers/ToggleUIReducer'
import { pattern } from '../reducers/PatternReducer'

export default function configureStore(initialState) {
  const reducers = combineReducers({ toggle, pattern })

	// return createStore(reducers, initialState, compose(applyMiddleware(thunkMiddleware, createLogger())))
  return createStore(reducers, initialState, compose(applyMiddleware(thunkMiddleware), window.devToolsExtension ? window.devToolsExtension() : f => f))
}
