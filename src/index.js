import React from 'react'
import ReactDOM from 'react-dom'
import createSagaMiddleware from 'redux-saga'
import { applyMiddleware, createStore } from 'redux'
import { logger } from 'redux-logger'
import reducer from './redux/reducers'
import rootSaga from './redux/sagas'
import { Provider } from 'react-redux'

import App from './App'

import './index.css'

// Redux-Saga handle async function with middlewares
const sagaMiddleware = createSagaMiddleware()

// Saga middleware should be applied when creating store
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware, logger)
)

// Root Saga run in saga middleware
sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)
