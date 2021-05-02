import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';

import {
  updateNewsItemsAction,
  updateLikeAction,
  deleteLikeAction,
} from './NewsActions';

export interface NewsItemState {
  id: number;
  title: string;
  photoUrls: string[];
  publishedAt: string;
  isNew: boolean;
  isLiked: boolean;
}

const initialState: { newsItems: NewsItemState[] } = { newsItems: [] };

const newsReducer = createReducer(initialState, builder => {
  builder
    .addCase(updateNewsItemsAction, (draft, action) => {
      draft.newsItems = action.payload.newsItems;
    })

    .addCase(updateLikeAction, (draft, action) => {
      const updatedNewsItems = draft.newsItems.map(newsItem => {
        if (newsItem.id === action.payload.id) {
          return {
            id: newsItem.id,
            title: newsItem.title,
            photoUrls: newsItem.photoUrls,
            publishedAt: newsItem.publishedAt,
            isNew: newsItem.isNew,
            isLiked: true,
          };
        }
        return newsItem;
      });

      draft.newsItems = updatedNewsItems;
    })

    .addCase(deleteLikeAction, (draft, action) => {
      const updatedNewsItems = draft.newsItems.map(newsItem => {
        if (newsItem.id === action.payload.id) {
          return {
            id: newsItem.id,
            title: newsItem.title,
            photoUrls: newsItem.photoUrls,
            publishedAt: newsItem.publishedAt,
            isNew: newsItem.isNew,
            isLiked: false,
          };
        }
        return newsItem;
      });

      draft.newsItems = updatedNewsItems;
    });
});

export const newsRootReducer = {
  news: newsReducer,
};

const localReducer = combineReducers(newsRootReducer);

type NewsRootState = ReturnType<typeof localReducer>;
export const useNewsSelector: TypedUseSelectorHook<NewsRootState> = useSelector;
