import { combineReducers } from 'redux';
import carts from './carts';

const cartsReducers = combineReducers({
  carts
});

export default cartsReducers;
