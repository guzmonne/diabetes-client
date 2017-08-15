import {createStore} from 'redux'
import rootReducer from './reducers.js'

const configureStore = preloadedState => {
  const store = createStore(
    rootReducer,
    preloadedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers.js', () => {
      const nextRootReducer = require('./reducers.js').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

export default configureStore
