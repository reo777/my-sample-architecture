import React from 'react';
import styled from 'styled-components';

import { dayjs } from '../../utils/dayjs';
import { NewsCard } from '../../usecase/news/NewsCard';
import { useNewsItems } from './hooks/useNewsItems';

const NewsItemsLayout = styled.div`
  display: flex;
  align-items: center;
  padding: 24px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const LayoutWrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1388px;
`;

const News = (): React.ReactElement => {
  const { newsItems } = useNewsItems();

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <LayoutWrapper>
        <NewsItemsLayout>
          {newsItems.map(newsItem => {
            return (
              <div
                style={{
                  justifyContent: 'space-around',
                  display: 'flex',
                  padding: '0 16px 16px 0',
                }}
              >
                <NewsCard
                  key={newsItem.id}
                  title={newsItem.title}
                  isLiked={newsItem.isLiked}
                  isNew={newsItem.isNew}
                  photoUrls={newsItem.photoUrls[0]}
                  publishedAt={dayjs(newsItem.publishedAt).format(
                    'YYYY年M月DD日',
                  )}
                  id={newsItem.id}
                />
              </div>
            );
          })}
        </NewsItemsLayout>
      </LayoutWrapper>
    </div>
  );
};

export default News;
