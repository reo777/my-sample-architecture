import styled from 'styled-components';

interface Props {
  title: string;
}

const TitleText = styled.a`
  font-weight: bold;
  color: #222222;
  font-size: 16px;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: #222222;
    opacity: 0.8;
  }
  &:active {
    opacity: 1;
  }
`;

export const NewsTitle: React.VFC<Props> = props => {
  const { title } = props;

  return <TitleText>{title}</TitleText>;
};
