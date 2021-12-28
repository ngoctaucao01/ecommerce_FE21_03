import * as types from '../constants/ActionType';

let initState = {
  isLogin: false,
  info: {
    email: '',
    firstName: '',
    lastName: '',
    newsletter: false,
    uid: '',
    isAdmin: false
  }
}

const user = (state = initState, action) => {
  switch (action.type) {
    case types.USER_LOGIN:
      state.isLogin = true;
      state.info = action.userInfo;
      return state;
    case types.USER_LOGOUT:
      state.isLogin = false;
      state.info = {
        email: '',
        firstName: '',
        lastName: '',
        newsletter: false,
        uid: '',
        isAdmin: false
      };
      return state;
    default:
      return state;
  }
}

export default user;
