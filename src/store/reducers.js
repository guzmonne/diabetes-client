import * as ActionTypes from './actions.js';
import merge from 'lodash/merge';
import {combineReducers} from 'redux';

// Entities reducer.
const entitiesDefaultState = {
  measurements: {},
};
const entities = (state=entitiesDefaultState, action) => {
  if (action.response && action.response.entities) {
    return merge({}, state, action.response.entities);
  }
  return state;
}
// Errors reducer.
const errorMessageDefaultState = null;
const errorMessage = (state=errorMessageDefaultState, action) => {
  const {type, error} = action;

  if (type === ActionTypes.RESET_ERROR_MESSAGE) {
    return null;
  } else if (error) {
    return error;
  }

  return state;
}

const rootReducer = combineReducers({
  entities,
  errorMessage,
});

export default rootReducer;
