import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';

import { updateNewsItemsAction } from './NewsActions';

export interface NewsItemState {
  id: number | null;
  title: string;
  photoUrls: string[];
  publishedAt: string;
  isNew: boolean;
  isLiked: boolean;
}

const initialState: { newsItems: NewsItemState[] } = { newsItems: [] };

const newsReducer = createReducer(initialState, builder => {
  builder.addCase(updateNewsItemsAction, (draft, action) => {
    draft.newsItems = action.payload.newsItems;
  });
});

export const newsRootReducer = {
  news: newsReducer,
};

const localReducer = combineReducers(newsRootReducer);

type NewsRootState = ReturnType<typeof localReducer>;
export const useNewsSelector: TypedUseSelectorHook<NewsRootState> = useSelector;
