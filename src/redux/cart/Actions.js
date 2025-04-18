import {SAVE_CLOTH_TO_CART} from './Types';

const saveClothToCart = payload => ({
  type: SAVE_CLOTH_TO_CART,
  payload,
});

export const requestSaveClothToList = data => async dispatch => {
  dispatch(saveClothToCart(data));
};
