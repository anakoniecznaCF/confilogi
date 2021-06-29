import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 3rem;
  max-width: 40rem;

  @media (min-width: 768px) {
    margin-bottom: 6rem;
    font-size: 1.6rem;
  }

  @media (min-width: 1024px) {
    margin-bottom: 0;
  }
`;

export const Img = styled(motion.img)`
  margin-right: 1.3rem;
`;

export const Title = styled.h3`
  font-size: 1.4rem;
  text-transform: uppercase;
  margin-bottom: 1.6rem;
  line-height: 1;

  @media (min-width: 768px) {
      font-size: 1.6rem;
  }
`;

export const TextsList = styled.ul`
  > li:first-child {
    margin-bottom: 2rem;
  }
`;

export const TextsListItem = styled.li`
  position: relative;
  padding-left: 2rem;

  &::before {
    content: '';
    display: block;
    background-color: ${({ theme }) => theme.colors.white};
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    position: absolute;
    top: 0.9rem;
    left: 0;
  }
`;