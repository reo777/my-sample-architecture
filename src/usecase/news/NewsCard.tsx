import styled from 'styled-components';

import { NewLabel } from '../../components/atom/NewLabel/NewLabel';
import { NewsImage } from '../../components/atom/NewsImage/NewsImage';
import { LikeButton } from '../../components/atom/LikeButton/LikeButton';
import { NewsTitle } from '../../components/atom/NewsTitle';
import { PublishedDateText } from '../../components/atom/PublishedDateText/index';

const NewsCardLayout = styled.div`
  width: 319px;
  height: 252px;
  border: 1px solid #d9dfe1;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  &:hover {
    box-shadow: 1px 1px 8px #d9dfe1;
    opacity: 0.8;
  }
`;

const NewsTitleArea = styled.div`
  display: flex;
  align-items: center;
  div:first-of-type {
    margin-right: 8px;
  }
`;

const NewsInfoArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NewsCardFooter = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  height: 50%;
  justify-content: space-between;
`;

interface Props {
  title: string;
  isLiked: boolean;
  photoUrls: string;
  isNew: boolean;
  publishedAt: string;
}

export const NewsCard: React.VFC<Props> = props => {
  const { title, isLiked, photoUrls, isNew, publishedAt } = props;

  return (
    <NewsCardLayout>
      <NewsImage src={photoUrls} />
      <NewsCardFooter>
        <NewsTitleArea>
          {isNew && <NewLabel />}
          <NewsTitle title={title} />
        </NewsTitleArea>
        <NewsInfoArea>
          <PublishedDateText publishedAt={publishedAt} />
          <LikeButton isLiked={isLiked} onClick={() => console.log('hello')} />
        </NewsInfoArea>
      </NewsCardFooter>
    </NewsCardLayout>
  );
};
