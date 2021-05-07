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

export const updatedLikeItems = (
  newsItems: NewsItemState[],
  action: {
    payload: {
      id: number;
    };
  },
) => {
  return newsItems.map(newsItem => {
    if (newsItem.id === action.payload.id) {
      return {
        ...newsItem,
        isLiked: true,
      };
    }
    return newsItem;
  });
};

export const deletedLikeItems = (
  newsItems: NewsItemState[],
  action: {
    payload: {
      id: number;
    };
  },
) => {
  return newsItems.map(newsItem => {
    if (newsItem.id === action.payload.id) {
      return {
        ...newsItem,
        isLiked: false,
      };
    }
    return newsItem;
  });
};

const newsReducer = createReducer(initialState, builder => {
  builder
    .addCase(updateNewsItemsAction, (draft, action) => {
      draft.newsItems = action.payload.newsItems;
    })

    .addCase(updateLikeAction, (draft, action) => {
      draft.newsItems = updatedLikeItems(draft.newsItems, action);
    })

    .addCase(deleteLikeAction, (draft, action) => {
      draft.newsItems = deletedLikeItems(draft.newsItems, action);
    });
});

export const newsRootReducer = {
  news: newsReducer,
};

const localReducer = combineReducers(newsRootReducer);

type NewsRootState = ReturnType<typeof localReducer>;
export const useNewsSelector: TypedUseSelectorHook<NewsRootState> = useSelector;
