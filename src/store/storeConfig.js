import {createStore, combineReducers} from 'redux';

const reducers = combineReducers({
  numbers: function(state, action) {

    switch(action.type) {
      case 'MIN_NUMBER_ALTERED':
        return {
          ...state, 
          min: action.payload
        };

      case 'MAX_NUMBER_ALTERED':
        return {
          ...state, 
          max: action.payload
        };

      default:
        return {
          min: 5,
          max: 10
        }
      }
    }  
  }
);

function storeConfig() {
  return createStore(reducers)
};

export default storeConfig