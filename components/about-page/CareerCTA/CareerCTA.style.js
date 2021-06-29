import styled from 'styled-components';
import Container from '../../common/Container';
import { motion } from 'framer-motion';

export const Wrapper = styled(Container)`
  padding: 3rem 1.5rem 4rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    padding: 8rem 2rem 10rem 2rem;
  }

  @media (min-width: 1440px) {
    padding: 8rem 0 10rem 0;
  }
`;

export const Content = styled.div`
  border: 0.3rem solid ${({ theme }) => theme.colors.purple};
  border-radius: 1rem;
  padding: 2.5rem;

  @media (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 6rem 5rem;
  }
`;

export const Title = styled.h2`
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 500;
  line-height: ${({theme}) => theme.lineHeight.large};
  text-align: center;

  @media (min-width: 768px) {
    font-size: 3rem;
    line-height:${({theme}) => theme.lineHeight.extraExtralarge};
    margin-bottom: 3rem;
  }

  @media (min-width: 1440px) {
    text-align: left;
    max-width: 55rem;
    font-size: 3rem;
    margin-bottom: 0;
  }
`;

export const YellowText = styled.span`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.darkOrange};
`;

export const CTABtn = styled(motion.button)`
  width: 100%;
  max-width: 40rem;
  font-size: 2rem;
  font-weight: 700;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.colors.black};
  padding: 1.3rem 0;
  border: 0.3rem solid ${({ theme }) => theme.colors.black};
  border-radius: 1rem;
  cursor: pointer;
  margin-top: 2rem;
  color: ${({ theme }) => theme.colors.darkOrange};
  transition: all 0.3s ease-in;

  a {
    color: ${({ theme }) => theme.colors.darkOrange};
  }

  &:hover {
    box-shadow: 0 1rem 3.2rem 0.7rem rgb(0 0 0 / 15%);
  }


  @media (min-width: 768px) {
    font-size: 3rem;
    padding: 1.5rem 0;
    margin-top: 3rem;
  }

  @media (min-width: 1440px) {
    margin-top: 0;
  }
`;

export const Line = styled(motion.div)`
  width: 0.5rem;
  height: 2rem;
  background-color: ${({ theme }) => theme.colors.darkOrange};
  margin: 1rem auto 0;

  @media (min-width: 1440px) {
    height: 0.5rem;
    width: 2rem;
    margin: 1.25rem 0;
  }
`;

export const Text = styled(motion.p)`
  width: fit-content;
  color: ${({ theme }) => theme.colors.darkOrange};
  text-transform: uppercase;
  font-weight: 700;
  font-size: 2rem;
  margin: 2rem auto 1rem;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }

  @media (min-width: 1440px) {
    margin: 0 2rem;
    width: unset;
  }
`;

export const ArrowLine = styled(Line)`
  margin: 0 auto;
  height: 6rem;

  @media (min-width: 1440px) {
    width: 7rem;
    height: 0.5rem;
    margin: 1.25rem 0;
  }
`;

export const ArrowLineLeft = styled(Line)`
  transform: rotate(45deg);
  height: 3.25rem;
  position: absolute;
  bottom: -0.5rem;
  left: 0.95rem;

  @media (min-width: 1440px) {
    width: 3.25rem;
    height: 0.5rem;
    transform: rotate(-45deg);
    left: 4.5rem;
    top: 1rem;
  }
`;

export const ArrowLineRight = styled(Line)`
  height: 3.25rem;
  position: absolute;
  bottom: -0.5rem;
  left: -0.95rem;
  transform: rotate(-45deg);

  @media (min-width: 1440px) {
    width: 3.25rem;
    height: 0.5rem;
    transform: rotate(45deg);
    left: 4.5rem;
    top: -1rem;
  }
`;

export const ArrowWrapper = styled(motion.div)`
  position: relative;
  width: fit-content;
  margin: 0 auto;
`;

export const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 1440px) {
    width: 40rem;
  }
`;

export const FlexWrapper = styled(motion.div)`
  @media (min-width: 1440px) {
    display: flex;
    margin: 0 4rem 0 0;
  }
`;
