import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.section`
  padding: 4.5rem 1.5rem;
`;

export const MainTitle = styled.h2`
  text-align: center;
  line-height: ${({theme}) => theme.lineHeight.large};
  margin-bottom: 4.5rem;

  @media (min-width: 768px) {
    font-size: 3rem;
    line-height: 4.5rem;
  }
`;

export const FormWrapper = styled(motion.div)`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.cream};
  border: 0.3rem solid ${({ theme }) => theme.colors.white};
  box-shadow: 0px 3px 9px 3px rgba(0, 0, 0, 0.23);
  padding: 3rem 1.5rem 5rem;
  max-width: 70rem;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 3rem 6rem 5rem;
  }
`;

export const FormTitle = styled.h3`
  font-size: 1.6rem;
  text-align: center;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.purple};
  font-weight: 700;
`;