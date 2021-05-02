import { createAction } from '@reduxjs/toolkit';
import { NewsItemState } from './NewsReducer';

export const getNewsItemsAction = createAction('getNewsItemsAction');

export const updateNewsItemsAction = createAction<{
  newsItems: NewsItemState[];
}>('updateNewsItemsAction');

export const updateLikeAction = createAction<{ id: number }>(
  'updateLikeAction',
);

export const deleteLikeAction = createAction<{ id: number }>(
  'deleteLikeAction',
);
