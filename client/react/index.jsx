// boilerplates
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'babel-polyfill'

// dev
import App from './containers/App.jsx'
import configureStore from './store/Store.js'

let store = configureStore()

ReactDOM.render(
  <div>
    <Provider store={store}>
      <App />
    </Provider>
  </div>,
  document.getElementById('app')
)
