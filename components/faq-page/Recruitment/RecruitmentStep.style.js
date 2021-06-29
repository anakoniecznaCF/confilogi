import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.li)`
  position: relative;
  border: 0.2rem solid ${({ theme }) => theme.colors.cream};
  border-radius: 1rem;
  padding: 3rem 1.7rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 29.3rem;
  width: 100%;
  max-width: 29.7rem;
  counter-increment: listCounter;
  transition: all 0.3s ease-in-out;
  margin: 0 auto;

  &:hover {
    border: 0.2rem solid ${({ theme }) => theme.colors.darkOrange};

    h4,
    p {
      color: ${({ theme }) => theme.colors.purple};
    }

    &::after {
      background-color: ${({ theme }) => theme.colors.darkOrange};
      border: 0.2rem solid ${({ theme }) => theme.colors.darkOrange};
    }

    svg path {
      fill: ${({ theme }) => theme.colors.purple};
    }
  }

  @media (min-width: 1024px) {
    position: absolute;
  }

  &::after {
    content: '0' counter(listCounter);
    display: block;
    position: absolute;
    top: -2.75rem;
    left: 0.5rem;
    color: ${({ theme }) => theme.colors.purple};
    font-size: 2.4rem;
    font-weight: 700;
    border: 0.2rem solid ${({ theme }) => theme.colors.cream};
    background-color: ${({ theme }) => theme.colors.white};
    width: 5.7rem;
    height: 5.7rem;
    border-radius: 50%;
    transition: all 0.3s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 1024px) {
      top: 50%;
      left: calc(100% + 12rem);
      transform: translateX(-50%);
    }
  }
`;

export const Title = styled.h4`
  text-transform: uppercase;
  font-size: 1.8rem;
  margin-bottom: 2rem;
  text-align: center;
  transition: all 0.3s ease-in-out;

  @media (min-width: 1440px) {
    font-size: 2.4rem;
  }
`;

export const Text = styled.p`
text-align: center;
line-height: ${({ theme }) => theme.lineHeight.regular};
transition: all 0.3s ease-in-out;

@media (min-width: 768px) {
  font-size: 1.4rem;
}

@media (min-width: 1440px) {
  font-size: 1.8rem;
  line-height: ${({ theme }) => theme.lineHeight.large};
}
`;

export const Bold = styled.span`
font-weight: 700;
`;