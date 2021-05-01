import styled from 'styled-components';

interface Props {
  newsTitle: string;
}

const TitleText = styled.a`
  font-weight: bold;
  color: #222222;
  font-size: 16px;
  text-overflow: ellipsis;

  /* &:hover {
    cursor: pointer;
    text-decoration: underline;
  } */
`;

export const NewsTitle: React.VFC<Props> = props => {
  const { newsTitle } = props;

  return <TitleText>{newsTitle}</TitleText>;
};
