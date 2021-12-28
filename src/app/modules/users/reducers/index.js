import { combineReducers } from 'redux';
import user from './users';

const usersReducers = combineReducers({
  user
});

export default usersReducers;
