import styled from 'styled-components';
import { motion } from 'framer-motion';

export const BackgroundWrapper = styled.div`
  background-image: url('/images/mobile/m-poznajmy-sie.png');
  background-size: cover;
  background-repeat: no-repeat;

  @media (min-width: 768px) {
    background-image: url('/images/desktop/poznajmy-sie.png');
  }
`;

export const ContentWrapper = styled(motion.div)`
  padding: 0 1.5rem;
  width: 100%;
  margin: 0 auto;

  @media (min-width: 1024px) {
    padding: 0 15rem;
  }

  @media (min-width: 1440px) {
    padding: 0 27.5rem;
  }

  @media (min-width: 1920px) {
    max-width: 1920px;
    padding: 0 47.5rem;
  }
`;

export const Title = styled(motion.h1)`
  color: ${({ theme }) => theme.colors.white};
  margin: 0;
  padding: 3rem 0 3.5rem 0;
  text-align: center;
  text-transform: uppercase;

  @media (min-width: 768px) {
    padding: 5.8rem 0 6.3rem 0;
    text-align: left;
  }
`;

export const TextWrapper = styled(motion.div)`
  @media (min-width: 768px) {
    padding-bottom: 4.5rem;
  }
`;

export const HeroText = styled.p`
  color: ${({ theme }) => theme.colors.white};
  line-height: ${({theme}) => theme.lineHeight.regular};
  padding-bottom: 2rem;

  @media (min-width: 768px) {
    line-height: ${({theme}) => theme.lineHeight.large};
    padding-bottom: 4rem;
  }
`;

export const Bold = styled.span`
  font-weight: 700;
`
