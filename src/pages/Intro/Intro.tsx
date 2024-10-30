import React, { useState } from 'react';
import styled from 'styled-components';
import Icon from './Icon';
import 'bootstrap-icons/font/bootstrap-icons.css';


const IntroWrapper = styled.div`
  max-width: 420px;
  width: 100%;
  background: ${({ theme }) => theme.bg1};
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04),
    0px 16px 24px rgba(0, 0, 0, 0.04), 0px 24px 32px rgba(0, 0, 0, 0.01);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const IntroHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const NewTokenLabel = styled.span`
  font-weight: bold;
  font-size: 1.2rem;
  background: linear-gradient(
    to right,
    #ff9ab2 0%,
    #ff9ab2 60%,
    rgba(255, 154, 178, 0.5) 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const TokenInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const TokenName = styled.h2`
  font-weight: bold;
  font-size: 1.2rem;
  background: linear-gradient(
    to right,
    #ff9ab2 0%,
    #ff9ab2 60%,
    rgba(255, 154, 178, 0.5) 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const TokenAddressContainer = styled.div`
  display: flex;
  align-items: center;
`;

const TokenAddress = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text2};
  margin-right: 0.5rem;
`;

const CopyButton = styled.button`
  background: none;
  border: 1px solid ${({ theme }) => theme.bg3};
  border-radius: 4px;
  padding: 2px 6px;
  font-size: 0.8rem;
  cursor: pointer;
  color: ${({ theme }) => theme.text2};

  &:hover {
    background: ${({ theme }) => theme.bg2};
  }
`;

const Divider = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid ${({ theme }) => theme.bg3};
  margin: 1rem 0;
`;

const IntroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.5;
  color: ${({ theme }) => theme.text1};

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

const IntroText = styled.p`
  margin-bottom: 1rem;
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 1rem;
`;

const SocialText = styled.span`
  font-weight: bold;
  font-size: 1.0rem;
  background: linear-gradient(
    to right,
    #000000 0%,
    #000000 60%,
    rgba(255, 154, 178, 0.5) 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const SocialLink = styled.a`
  color: #000000;
  font-size: 1.5rem;
  
  &:hover {
    opacity: 0.8;
  }
`;

const Intro: React.FC = () => {
  const [copySuccess, setCopySuccess] = useState(false);
  const tokenAddress = "0x12345678979878979878979878979987899898"; 

  const truncateAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const copyAddress = () => {
    navigator.clipboard.writeText(tokenAddress)
      .then(() => {
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
      })
      .catch(err => console.error('复制失败: ', err));
  };

  return (
    <IntroWrapper>
      <IntroHeader>
        <Icon />
        <NewTokenLabel>NEW TOKEN</NewTokenLabel>
      </IntroHeader>
      <TokenInfoContainer>
        <TokenName>展播鸡鸡</TokenName>
        <TokenAddressContainer>
          <TokenAddress>{truncateAddress(tokenAddress)}</TokenAddress>
          <CopyButton onClick={copyAddress}>
            {copySuccess ? '复制成功' : '复制'}
          </CopyButton>
        </TokenAddressContainer>
      </TokenInfoContainer>
      <Divider />
      <IntroContent>
      <SocialText>项目信息：</SocialText>
      <IntroText>
        展播鸡鸡展播鸡鸡展播鸡鸡展播鸡鸡展播鸡鸡展播鸡鸡展播鸡鸡展播鸡鸡展播鸡鸡展播鸡鸡展播鸡鸡
        </IntroText>
        <IntroText>
        展播鸡鸡展播鸡鸡展播鸡鸡展播鸡鸡展播鸡鸡展播鸡鸡展播鸡鸡展播鸡鸡展播鸡鸡展播鸡鸡展播鸡鸡展播鸡鸡展播鸡鸡
        </IntroText>
        <SocialLinks>
          <SocialText>官方社区：</SocialText>
          <SocialLink href="https://t.me/" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-telegram"></i>
          </SocialLink>
          <SocialLink href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-twitter"></i>
          </SocialLink>
        </SocialLinks>
      </IntroContent>
    </IntroWrapper>
  );
};

export default Intro;