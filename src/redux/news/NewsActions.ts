import { createAction } from '@reduxjs/toolkit';
import { NewsItemState } from './NewsReducer';

export const getNewsItemsAction = createAction('news/get');

export const updateNewsItemsAction = createAction<{
  newsItems: NewsItemState[];
}>('newsItems/update');

export const updateLikeAction = createAction<{ id: number }>('like/update');

export const deleteLikeAction = createAction<{ id: number }>('like/delete');
