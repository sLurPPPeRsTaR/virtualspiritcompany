import {legacy_createStore as createStore} from 'redux';

const intialState = {
  counter: 0,
};

const reducer = (state = intialState, action) => {
  if (action.type === '_INCREASE_COUNTER') {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }
  if (action.type === '_DECREASE_COUNTER') {
    if (state.counter > 0) {
      return {
        ...state,
        counter: state.counter - 1,
      };
    }
  }
  if (action.type === '_RESET_COUNTER') {
    return {
      ...state,
      counter: 0,
    };
  }
  return state;
};

const store = createStore(reducer);

export default store;
