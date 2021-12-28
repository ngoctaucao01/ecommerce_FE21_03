import * as types from '../constants/ActionType';

export const actionBuyProduct = (product, quantity, size) => {
  return {
    type: types.BUY_PRODUCT,
    product,
    quantity,
    size
  }
}

export const actionUpdateProduct = (product, quantity) => {
  return {
    type: types.UPDATE_PRODUCT,
    product,
    quantity
  }
}

export const actionDeleteProduct = (product) => {
  return {
    type: types.DELETE_PRODUCT,
    product,
  }
}

export const actionDeleteAllProduct = () => {
  return {
    type: types.DELETE_ALL_PRODUCT,
  }
}
