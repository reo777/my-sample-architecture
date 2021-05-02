import type { Action, Middleware } from 'redux';
import { getNewsItemsAction, updateNewsItemsAction } from './NewsActions';
import { getNewsItemsSideEffect } from './NewsSideEffect';

export const buildNewsMiddleware = (): Middleware => {
  return () => next => async (action: Action): Promise<void> => {
    switch (action.type) {
      case getNewsItemsAction.type: {
        const newsItems = await getNewsItemsSideEffect();
        next(updateNewsItemsAction({ newsItems: newsItems }));
      }
    }
  };
};
