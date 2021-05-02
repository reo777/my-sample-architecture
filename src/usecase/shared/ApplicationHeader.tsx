import styled from 'styled-components';
const Header = styled.div`
  height: 55px;
  border-bottom: 1px solid #d9dfe1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderText = styled.p`
  color: #222222;
  font-weight: bold;
  font-size: 20px;
`;

export const ApplicationHeader: React.VFC = () => {
  return (
    <Header>
      <HeaderText>News Reader</HeaderText>
    </Header>
  );
};
