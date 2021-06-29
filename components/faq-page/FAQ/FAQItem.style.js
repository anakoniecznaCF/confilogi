import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.li)`
  position: relative;
  width: 100%;
  max-width: 97rem;
  background-color: ${({ theme }) => theme.colors.purple};
  padding: 2.5rem 1.5rem 2.5rem 2rem;
  border-radius: 1rem;
  margin: 0 auto 3rem;
  border: 0.2rem solid ${({ theme }) => theme.colors.purple};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;

  ${({ toggleAnswer }) =>
    toggleAnswer &&
    css`
      background-color: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.black};
    `}

  ${({ toggleAnswer }) =>
    !toggleAnswer &&
    css`
      background-color: ${({ theme }) => theme.colors.purple};
      color: ${({ theme }) => theme.colors.white};
    `}

    @media (min-width: 768px) {
    padding: 3rem 5rem;
  }
`;

export const Question = styled(motion.h3)`
  font-size: 1.8rem;
  font-weight: 700;
  line-height: ${({theme}) => theme.lineHeight.regular};
  width: 70%;

  @media (min-width: 768px) {
    font-size: 2.5rem;
    line-height: ${({theme}) => theme.lineHeight.extraLarge};
    width: 80%;
  }
`;

export const QuestionWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Answer = styled(motion.p)`
  margin-top: 1.7rem;
  line-height: ${({theme}) => theme.lineHeight.regular};
  width: 100%;

  @media (min-width: 768px) {
    margin-top: 3rem;
    line-height: ${({theme}) => theme.lineHeight.large};
    width: 80%;
  }
`;

export const Arrow = styled(motion.img)`
  width: 4.2rem;
  height: 4.2rem;

  @media (min-width: 768px) {
    width: 6.4rem;
    height: 6.4rem;
    
    ${({toggleAnswer}) => toggleAnswer && css`
      position: absolute;
      top: 5.2rem;
      right: 5rem;
    `}
  }
`;