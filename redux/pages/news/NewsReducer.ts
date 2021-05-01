import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';

import { getNewsItems } from './newsActions';

interface NewsItemState {
  id: number;
  title: string;
  photoUrls: string[];
  publishedAt: string;
  isNew: boolean;
  isLiked: boolean;
}

const initialState: NewsItemState[] = [
  {
    id: 0,
    title: '',
    photoUrls: [''],
    publishedAt: '',
    isNew: true,
    isLiked: true,
  },
];

const newsReducer = createReducer(initialState, builder =>
  builder.addCase(getNewsItems, (draft, action) => {
    draft;
  }),
);

export const newsRootReducer = {
  newsItems: newsReducer,
};

const localReducer = combineReducers(newsRootReducer);
type NewsRootState = ReturnType<typeof localReducer>;
export const useNewsSelector: TypedUseSelectorHook<NewsRootState> = useSelector;
