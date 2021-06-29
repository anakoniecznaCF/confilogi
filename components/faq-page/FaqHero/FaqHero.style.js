import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeroSection = styled.section`
  background-image: url('/images/mobile/m-qa.png');
  background-size: cover;
  background-position: center center;

  @media (min-width: 768px) {
    background-image: url('/images/desktop/qa.png');
  }
`;

export const HeroTitle = styled(motion.h1)`
  margin: 0;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  padding: 5rem 0;

  @media (min-width: 768px) {
    padding: 10rem 0;
  }
`;
