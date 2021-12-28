import { remove } from 'lodash';
import * as types from '../constants/ActionType';
import LocalStorageUtils, { LOCAL_STORAGE_KEY } from '../../../utils/browser/LocalStorage';

let initState = [];
let cartItems = LocalStorageUtils.getItem(LOCAL_STORAGE_KEY.CARTS);
initState = (cartItems !== null && cartItems.length > 0) ? cartItems : initState;

let getProductPosition = (cartItems, product) => {
  let total = cartItems.length;
  for (let i = 0; i < total; i++) {
    if (cartItems[i].product.id === product.id) {
      return i;
    }
  }
  return -1;
}

const carts = (state = initState, action) => {
  let { product, quantity, size } = action;
  switch (action.type) {
    case types.BUY_PRODUCT:
      let position = getProductPosition(state, product);
      let price = product.price.new || product.price;
      if (position > -1) { //edit
        state[position].quantity += quantity;
        state[position].size = size;
      } else {
        state.push({
          product: {
            id: product.id,
            name: product.name,
            price,
            image_url: product.image_url,
            size: product.size
          },
          quantity,
          size
        });
      }
      LocalStorageUtils.setItem(LOCAL_STORAGE_KEY.CARTS, state);
      return [...state];
    case types.UPDATE_PRODUCT:
      return state;
    case types.DELETE_PRODUCT:
      remove(state, (cartItems) => {
        return cartItems.product.id === product.id;
      });
      LocalStorageUtils.setItem(LOCAL_STORAGE_KEY.CARTS, state);
      return [...state];
    case types.DELETE_ALL_PRODUCT:
      LocalStorageUtils.removeItem(LOCAL_STORAGE_KEY.CARTS);
      return state = [];
    default:
      return state;
  }
}

export default carts;
