import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import favoritesReducer from './favorites/reducer';
import loadingReducer from './loading/reducer';
import searchReducer from './search/reducer';

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  loading: loadingReducer,
  search: searchReducer,
});

const store = createStore(rootReducer, {}, applyMiddleware(thunk, logger));

export default store;
