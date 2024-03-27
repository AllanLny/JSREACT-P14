import { combineReducers } from 'redux';

function employees(state = [], action) {
  switch (action.type) {
    case 'ADD_EMPLOYEE':
      return [...state, action.payload];
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  employees
});

export default rootReducer;