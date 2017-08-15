import {createStore} from 'redux';
import rootReducer from './reducers.js';

const configureStore = preloadedState => createStore(
  rootReducer,
  preloadedState
)

export default configureStore
