import { createStore } from 'redux';
import appReducers from './app/reducers';

const store = createStore(
  appReducers, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;