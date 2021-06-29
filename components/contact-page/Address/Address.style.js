import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1.5rem;

  @media (min-width: 768px) {
    padding: 3rem;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    padding: 0 5rem;
    margin-bottom: 5rem;
  }

  @media (min-width: 1440px) {
    padding: 0 8rem;
  }

  @media (min-width: 1920px) {
    padding: 0;
    margin: 0 auto 7rem;
    max-width: 1500px;
  }
`;

export const ContentWrapper = styled.div`
  background-image: url('/images/desktop/siedziba.png');
  background-position: left center;
  background-size: contain;
  background-repeat: no-repeat;
  padding: 3.55rem 0 3.35rem;
  margin: 1.55rem 0 1.85rem;

  @media (min-width: 1024px) {
    width: 40%;
  }

  @media (min-width: 1440px) {
    padding: 7rem 0;
  }
`;

export const Content = styled.address`
  font-style: normal;
  padding-left: 7.75rem;

  @media (min-width: 1440px) {
    padding-left: 14.2rem;
  }
`;

export const Title = styled.p`
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    font-size: 1.4rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.6rem;
  }

  @media (min-width: 1440px) {
    font-size: 2rem;
    margin-bottom: 3rem;
  }
`;

export const Bold = styled.span`
  font-weight: 700;
`;

export const Text = styled.p`
  line-height: 2.1rem;

  @media (min-width: 768px) {
    font-size: 1.4rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.6rem;
    line-height: ${({theme}) => theme.lineHeight.large};
  }

  @media (min-width: 1440px) {
    font-size: 2rem;
    line-height: ${({theme}) => theme.lineHeight.extraLarge};
  }
`;

export const MapWrapper = styled(motion.div)`
  width: 100%;
  margin-bottom: 4.2rem;

  @media (min-width: 1024px) {
    width: 60%;
    margin: 5rem 0;
  }
`;
