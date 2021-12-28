import * as types from '../constants/ActionType';

export const actionLogin = (userInfo) => {
  return {
    type: types.USER_LOGIN,
    userInfo
  }
}

export const actionLogout = () => {
  return {
    type: types.USER_LOGOUT,
  }
}
