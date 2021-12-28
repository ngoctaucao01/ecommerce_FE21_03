import { combineReducers } from 'redux';
import category from './category';
import tags from './tags';

const productsReducers = combineReducers({
  category,
  tags
});

export default productsReducers;
