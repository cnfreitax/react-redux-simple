import {MIN_NUMBER_ALTERED, MAX_NUMBER_ALTERED} from '../actions/actionTypes'

const initialState = {
  min: 5,
  max: 10
};


export default function(state = initialState, action) {

  switch(action.type) {
    case MIN_NUMBER_ALTERED:
      return {
        ...state, 
        min: action.payload
      };

    case MAX_NUMBER_ALTERED:
      return {
        ...state, 
        max: action.payload
      };

    default:
      return state
    
  } 
};