import { Icon, Popup } from 'semantic-ui-react';
import styled from 'styled-components';

interface Props {
  isLiked: boolean;
  onClick: (isLiked: boolean) => void;
}

const LikeButtonWrapper = styled.button<{ isLiked: boolean }>`
  background: ${({ isLiked }) => (isLiked ? ' #ff7379' : '#D3D3D3')};
  width: 40px;
  height: 40px;
  border-radius: 40px;
  border: none;
  outline: none;
  color: white;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
  &:active {
    opacity: 1;
  }

  i {
    margin: 0;
  }
`;

export const LikeButton: React.VFC<Props> = props => {
  const { isLiked, onClick } = props;

  return (
    <Popup
      content={isLiked ? 'お気に入りから削除する' : 'お気に入り登録する'}
      trigger={
        <LikeButtonWrapper isLiked={isLiked} onClick={() => onClick(isLiked)}>
          <Icon name="heart" />
        </LikeButtonWrapper>
      }
      position="top center"
      size="mini"
    />
  );
};
