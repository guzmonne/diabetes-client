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

const configureStore = preloadedState => createStore(
  rootReducer,
  preloadedState,
  compose(
    enhancer,
    middlewares,
  )
);

export default configureStore
