import {SAVE_CLOTH_TO_CART} from './Types';

export const initialState = {
  isLoading: false,
  clothList: [],
  resetPassword: null,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_CLOTH_TO_CART: {
      return {
        ...state,
        isLoading: false,
        clothList: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};
