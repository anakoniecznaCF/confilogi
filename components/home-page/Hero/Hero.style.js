import styled from 'styled-components';
import NavLink from '../../common/NavLink';
import Container from '../../common/Container';
import { motion } from 'framer-motion';

export const StyledWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.lightOrange};
  width: 100%;
  height: calc(100vh - 6.494rem);
  min-height: -webkit-fill-available;

  @media (min-width: 1024px) {
    height: calc(100vh - 7.082rem);
  }

  @media (min-width: 1440px) {
    height: calc(100vh - 9.994rem);
  }
`;

export const ContentWrapper = styled(Container)`
  position: relative;
  height: 100%;
  padding: 0;
`;

export const MainPhoto = styled.div`
  height: 90%;
  width: 88%;
  background-image: url('/images/mobile/m-main-photo.png');
  background-repeat: no-repeat;
  background-size: 100%;
  position: absolute;
  background-position: center 0%;
  top: 0;
  right: 0;

  @media (min-width: 768px) {
    background-image: url('/images/desktop/main-photo.png');
  }

  @media (min-width: 1024px) {
    height: 90%;
    width: 65%;
  }

  /* @media (min-width: 1440px) {
    height: 878px;
    width: 1224px;
    background-size: 1224px 878px;
  } */
`;

export const TitleWrapper = styled(motion.div)`
  position: absolute;
  top: 27rem;
  left: 5%;

  @media (min-width: 768px) {
    top: 35%;
    left: 5%;
  }

  @media (min-width: 1024px) {
    top: 40%;
    left: 10%;
  }

  @media (min-width: 1440px) {
    top: 40%;
    left: 10rem;
  }
`;

export const MainTitle = styled(motion.h1)`
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  margin: 0;
  font-size: 4rem;
  width: fit-content;
  border: 0.1rem solid ${({ theme }) => theme.colors.black};
  padding: 1rem 1rem 0 1rem;
  position: relative;
  z-index: 2;

  @media (min-width: 768px) {
    font-size: 8rem;
  }

  @media (min-width: 1600px) {
    font-size: 10rem;
  }
`;

export const MainSubtitle = styled(MainTitle)`
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  font-size: 2.5rem;
  padding: 1rem;

  @media (min-width: 768px) {
    font-size: 5rem;
  }

  @media (min-width: 1600px) {
    font-size: 6.7rem;
  }
`;

export const Yellow = styled.span`
  color: ${({ theme }) => theme.colors.darkOrange};
`;

export const OpinionLink = styled(NavLink)`
  position: absolute;
  bottom: 5%;
  transform: translateY(50%);
  right: 7rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 50%;
    transform: translateY(50%);
    right: -3rem;
    background-image: url('/images/desktop/arrow.svg');
    background-size: contain;
    background-repeat: no-repeat;
    height: 1.1rem;
    width: 1.6rem;
    transition: all 0.3s ease-out;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.black};
  }

  &:focus {
    color: ${({ theme }) => theme.colors.black};
  }

  &:hover::after {
    right: -3.5rem;
  }

  @media (min-width: 768px) {
    top: 95%;
  }
`;
