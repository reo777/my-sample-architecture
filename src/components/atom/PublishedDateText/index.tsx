import styled from 'styled-components';

const PublishedDateTextLabel = styled.span`
  color: #797e80;
  font-size: 12px;
`;

interface Props {
  publishedAt: string;
}

export const PublishedDateText: React.VFC<Props> = props => {
  const { publishedAt } = props;

  return <PublishedDateTextLabel>{publishedAt}</PublishedDateTextLabel>;
};
