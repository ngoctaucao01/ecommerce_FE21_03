import { combineReducers } from 'redux';
import productsReducers from '../modules/products/reducers';
import usersReducers from '../modules/users/reducers';
import cartsReducers from '../modules/carts/reducers';

const appReducers = combineReducers({
  productsReducers,
  usersReducers,
  cartsReducers
});

export default appReducers;
