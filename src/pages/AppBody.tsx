import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Intro from './Intro/Intro';


// 海报容器 //
const Banner = styled.div`
  width: 95%;
  height: 200px;
  background: ${({ theme }) => theme.bg2 || '#f0f0f0'};
  border-radius: 10px 10px 0 0;
  margin: 10px auto 15px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: background-image 0.5s ease-in-out;
`

// SWAP容器 //
export const BodyWrapper = styled.div`
  position: relative;
  max-width: 420px;
  width: 100%;
  background: ${({ theme }) => theme.bg1};
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),
    0px 24px 32px rgba(0, 0, 0, 0.01);
  border-radius: 20px;
  overflow: hidden;
  margin: 0 auto 20px;
`

const Container = styled.div`
  padding: 1rem;
`
// 海报图片 //
const BANNER_IMAGES = [
  'https://flame-bsc.shop/nft/1.png',
  'https://flame-bsc.shop/nft/10.png',
  'https://flame-bsc.shop/nft/25.png'
];

function useBannerImages() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % BANNER_IMAGES.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return BANNER_IMAGES[currentImageIndex];
}

export default function AppBody({ children }: { children: React.ReactNode }) {
  const currentBannerImage = useBannerImages();

  return (
    <>
      <BodyWrapper>
        <Banner style={{ backgroundImage: `url(${currentBannerImage})` }} />
        <Container>{children}</Container>
      </BodyWrapper>
      <Intro />
    </>
  );
}