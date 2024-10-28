import {combineReducers} from '@reduxjs/toolkit';
import {newsReducer} from './reducer';

const rootReducers = combineReducers({
  news: newsReducer,
});

export default rootReducers;