import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { newsRootReducer } from './news/NewsReducer';
import { buildNewsMiddleware } from './news/NewsMiddleware';

const rootReducer = combineReducers({
  ...newsRootReducer,
});

const newsMiddleware = buildNewsMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: [newsMiddleware],
});
