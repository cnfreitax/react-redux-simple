import {MIN_NUMBER_ALTERED, MAX_NUMBER_ALTERED} from './actionTypes'

// Action Creator 
export function alteredMinNumber(number) {
  return {
    type: MIN_NUMBER_ALTERED,
    payload: number
  };
};

export function alteredMaxNumber(number) {
  return {
    type: MAX_NUMBER_ALTERED,
    payload: number
  };
};