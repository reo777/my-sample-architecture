import React from 'react';
import styled from 'styled-components';

const Label = styled.div`
  background: #f2b71f;
  width: 42px;
  max-height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LabelText = styled.p`
  font-weight: bold;
  font-size: 12px;
  color: #ffffff;
`;

export const NewLabel = (): React.ReactElement => {
  return (
    <Label>
      <LabelText>NEW</LabelText>
    </Label>
  );
};
