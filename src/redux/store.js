import {legacy_createStore as createStore} from 'redux';

const intialState = {
  counter: 0,
  isReset: false,
};

const reducer = (state = intialState, action) => {
  if (action.type === '_INCREASE_COUNTER') {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === '_DECREASE_COUNTER') {
    if (state.counter > 0) {
      return {
        counter: state.counter - 1,
      };
    }
  }
  if (action.type === '_RESET_COUNTER') {
    return {
      counter: 0,
      isReset: true,
    };
  }
  if (action.type === '_UPDATE_ISRESET') {
    return {
      counter: 0,
      isReset: action.value,
    };
  }
  return state;
};

const store = createStore(reducer);

export default store;
