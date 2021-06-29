import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const ListItem = styled(motion.li)`
  width: 100%;
  max-width: 97rem;
  height: 29.3rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.lightPurple};
  border-radius: 1rem;
  padding: 2.3rem 2rem 2.8rem;
  margin: 0 auto 2.2rem;
  box-shadow: 0px 3px 10px 0px rgba(153, 154, 228, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  transition: 0.3s all ease-in-out;

  &:hover {
    box-shadow: 2rem 2rem 4rem 0 rgb(75 75 75 / 12%);
  }

  &:hover h3 {
    color: ${({ theme }) => theme.colors.lightPurple};
  }

  ${({ status }) =>
    status === 'Aplikacja zakończona' &&
    css`
      color: #9c9c99;
      border: 0.1rem solid #9c9c99;

      :hover h3 {
        color: #9c9c99;
      }

      ::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: ${({ theme }) => theme.colors.black};
        opacity: 0.025;
        border-radius: 1rem;
      }

      > button {
        background-color: #9c9c99;
      }
    `}

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    height: 12.5rem;
    padding: 2rem;
  }

  @media (min-width: 1024px) {
    padding: 4rem 3rem;
  }
`;

export const ShowMoreBtn = styled.button`
  background-color: ${({ theme }) => theme.colors.lightPurple};
  border-radius: 3rem;
  border: none;
  padding: 1.4rem 0;
  width: 15rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
  cursor: pointer;
  transition: 0.3s all ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.purple};
  }

  ::after {
    content: '';
    background-image: url('/images/desktop/white-arrow.svg');
    background-size: cover;
    display: inline-block;
    height: 1.4rem;
    width: 1.8rem;
    background-repeat: no-repeat;
    margin-left: 1rem;
  }
`;

export const Title = styled.h3`
  text-transform: uppercase;
  font-size: 1.6rem;
  margin-bottom: 0.7rem;
  transition: color 0.3 ease;

  @media (min-width: 768px) {
    width: 21rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.7rem;
    width: 25rem;
  }
`;

export const Department = styled.p`
  font-size: 1.5rem;
`;

export const Location = styled.p`
  font-size: 1.6rem;
  margin-bottom: 0.7rem;

  @media (min-width: 768px) {
    width: 16.5rem;
    font-size: 1.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.6rem;
  }
`;

export const Workplace = styled.p`
  font-size: 1.5rem;
`;

export const Status = styled.p`
  text-transform: uppercase;
  font-size: 1.7rem;
  line-height: 2.5rem;
  max-width: 15rem;
  font-weight: 700;

  ${({ status }) =>
    status === 'Aplikacja otwarta' &&
    css`
      color: ${({ theme }) => theme.colors.green};
    `}

  ${({ status }) =>
    status === 'Otwarcie wkrótce' &&
    css`
      color: ${({ theme }) => theme.colors.darkOrange};
    `}
`;
