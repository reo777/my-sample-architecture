import React from 'react';
import styled from 'styled-components';

import { dayjs } from '../../utils/dayjs';
import { NewsCard } from '../../usecase/news/NewsCard';
import { useNewsItems } from './hooks/useNewsItems';

const NewsItemsLayout = styled.div`
  display: flex;
  align-items: center;
  padding: 24px 8px 8px 24px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const NewsItemsGrid = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1388px;
`;

const NewsCardWrapper = styled.div`
  padding: 0 16px 16px 0;
`;

const NewsPage = styled.div`
  display: flex;
  justify-content: center;
`;

const News = (): React.ReactElement => {
  const { newsItems } = useNewsItems();

  return (
    <NewsPage>
      <NewsItemsGrid>
        <NewsItemsLayout>
          {newsItems.map(newsItem => {
            return (
              <NewsCardWrapper key={newsItem.id}>
                <NewsCard
                  title={newsItem.title}
                  isLiked={newsItem.isLiked}
                  isNew={newsItem.isNew}
                  photoUrls={newsItem.photoUrls[0]}
                  publishedAt={dayjs(newsItem.publishedAt).format(
                    'YYYY年M月DD日',
                  )}
                  id={newsItem.id}
                />
              </NewsCardWrapper>
            );
          })}
        </NewsItemsLayout>
      </NewsItemsGrid>
    </NewsPage>
  );
};

export default News;
