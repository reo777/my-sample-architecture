import React from 'react';
import styled from 'styled-components';

import { dayjs } from '../../utils/dayjs';
import { NewsCard } from '../../usecase/news/NewsCard';
import { useGetNewsItems } from './hooks/useGetNewsItems';

const NewsLayout = styled.div`
  display: flex;
  align-items: center;
  padding: 24px;
  flex-direction: column;
`;

const News = (): React.ReactElement => {
  const { newsItems } = useGetNewsItems();

  return (
    <NewsLayout>
      {newsItems.map(newsItem => {
        return (
          <NewsCard
            key={newsItem.id}
            title={newsItem.title}
            isLiked={newsItem.isLiked}
            isNew={newsItem.isNew}
            photoUrls={newsItem.photoUrls[0]}
            publishedAt={dayjs(newsItem.publishedAt).format('YYYY年M月DD日')}
          />
        );
      })}
    </NewsLayout>
  );
};

export default News;
