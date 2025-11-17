import CartActionTypes from "./action-types";

export const addProductToCart = (payload) => {
  return {
    type: CartActionTypes.ADD_PRODUCT,
    payload,
  };
};

export const removeProductFromCart = (payload) => {
  return {
    type: CartActionTypes.REMOVE_PRODUCT,
    payload,
  };
};

export const incrementProduct = (payload) => {
  return {
    type: CartActionTypes.INCREMENT_PRODUCT,
    payload,
  };
};
export const decrementProduct = (payload) => {
  return {
    type: CartActionTypes.DECREMENT_PRODUCT,
    payload,
  };
};
