import {createStore, combineReducers} from 'redux';

const reducers = combineReducers({
  numbers: function(state, action) {
    return {
      min: 2,
      max: 5
    }
  }  
});

function storeConfig() {
  return createStore(reducers)
};

export default storeConfig