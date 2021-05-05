import React from 'react';
import { useDispatch } from 'react-redux';

import { getNewsItemsAction } from '../../../redux/news/NewsActions';
import { useNewsSelector } from '../../../redux/news/NewsReducer';

export const useNewsItems = () => {
  const dispatch = useDispatch();
  const newsItems = useNewsSelector(state => state.news.newsItems);

  React.useEffect(() => {
    dispatch(getNewsItemsAction());
  }, []);

  return { newsItems };
};
