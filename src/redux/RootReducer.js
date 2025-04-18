import {combineReducers} from 'redux';

import cartReducer from './cart/Reducer';

const appReducer = combineReducers({
  cartReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'RESET') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
