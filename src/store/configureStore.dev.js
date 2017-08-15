import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import {connectRoutes} from 'redux-first-router';
import createHistory from 'history/createBrowserHistory.js';
import {entities, error} from './reducers.js'

const history = createHistory();

const routesMap = {
  HOME: '/',
  CONFIGURATION: '/configuration',
};

const {reducer, middleware, enhancer} = connectRoutes(history, routesMap);

const rootReducer = combineReducers({
  location: reducer,
  entities,
  error,
});

const middlewares = applyMiddleware(middleware);

const configureStore = preloadedState => {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      enhancer,
      middlewares,
      window.devToolsExtension && process.env.NODE_ENV !== 'production' ? window.devToolsExtension() : f => f
    )
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
