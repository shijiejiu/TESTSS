import React from 'react';
import styled from 'styled-components';

const IconWrapper = styled.div`
  width: 64px;
  height: 64px;
`;

const StyledIcon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Icon: React.FC = () => {
  return (
    <IconWrapper>
      <StyledIcon src="https://flame-bsc.shop/assets/img/Flame.png" alt="Flame Icon" />
    </IconWrapper>
  );
};

export default Icon;