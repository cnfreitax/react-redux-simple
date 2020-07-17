import {createStore, combineReducers} from 'redux';

import numberState from './reducers/numbersReducers'

const reducers = combineReducers({
  numbers: numberState,
});

function storeConfig() {
  return createStore(reducers)
};

export default storeConfig