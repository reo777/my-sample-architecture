import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { newsRootReducer } from './pages/news/newsReducer';

const rootReducer = combineReducers({
  ...newsRootReducer,
});

export const store = configureStore({ reducer: rootReducer });
