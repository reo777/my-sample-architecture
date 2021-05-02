import type { Action, Middleware } from 'redux';
import {
  getNewsItemsAction,
  updateNewsItemsAction,
  deleteLikeAction,
} from './NewsActions';
import { getNewsItemsSideEffect, deleteLikeSideEffect } from './NewsSideEffect';
import { updateLikeAction } from './NewsActions';

export const buildNewsMiddleware = (): Middleware => {
  return () => next => async (action: Action): Promise<void> => {
    switch (action.type) {
      case getNewsItemsAction.type: {
        const newsItems = await getNewsItemsSideEffect();
        next(updateNewsItemsAction({ newsItems: newsItems }));

        break;
      }

      case deleteLikeAction.type: {
        const deleteLikeMiddlewareAction = action as ReturnType<
          typeof deleteLikeAction
        >;
        // await deleteLikeSideEffect(deleteLikeMiddlewareAction.payload.id);
        next(action);

        break;
      }
      case updateLikeAction.type: {
        const updateLikeMiddlewareAction = action as ReturnType<
          typeof updateLikeAction
        >;
        // await deleteLikeSideEffect(updateLikeMiddlewareAction.payload.id);
        next(action);

        break;
      }
    }
  };
};
