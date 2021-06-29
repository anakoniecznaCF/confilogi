import styled from 'styled-components';
import { motion } from 'framer-motion';

export const BackgroundWrapper = styled.section`
  background-image: url('/images/mobile/m-kontakt.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media (min-width: 768px) {
    background-image: url('/images/desktop/kontakt.png');
  }
`;
export const HeroTitle = styled(motion.h1)`
  text-align: center;
  text-transform: uppercase;
  padding: 5rem 0;
  margin: 0;
  color: ${({ theme }) => theme.colors.white};

  @media (min-width: 768px) {
    padding: 10rem 0 8.5rem;
  }
`;
