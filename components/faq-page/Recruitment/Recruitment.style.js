import styled from 'styled-components';

export const Wrapper = styled.section`
  padding-bottom: 7rem;
`;

export const Title = styled.h2`
  line-height: ${({ theme }) => theme.lineHeight.extraLarge};
  text-align: center;
  margin: 3rem 0 2rem 0;

  @media (min-width: 768px) {
    font-size: 3rem;
    margin: 10rem 0 5rem 0;
  }
`;

export const SubTitle = styled.h3`
  font-size: 1.8rem;
  line-height: ${({ theme }) => theme.lineHeight.regular};
  text-align: center;
  margin-bottom: 3rem;

  @media (min-width: 768px) {
    font-size: 2.5rem;
    line-height: 4.2rem;
    margin-bottom: 9.5rem;
  }
`;

export const PurpleText = styled.span`
  color: ${({ theme }) => theme.colors.purple};
  text-transform: uppercase;
  font-weight: 700;
`;

export const RecruimentStartingCareerList = styled.ul`
  position: relative;
  max-width: 83rem;
  height: 100rem;
  margin: 0 auto;

  li:nth-child(2) {
    margin: 4.5rem auto;
    padding: 2rem 1.7rem 3.5rem;

    &:hover {
      svg path {
        stroke: ${({ theme }) => theme.colors.purple};
      }
    }

    @media (min-width: 1440px) {
      padding: 2rem 1.7rem 1.5rem;
    }
  }

  @media (min-width: 1024px) {
    &::before {
      content: '';
      display: block;
      position: absolute;
      top: 16rem;
      height: 61rem;
      width: 0.1rem;
      background-color: ${({ theme }) => theme.colors.cream};
      z-index: -1;
      right: 50%;
      transform: translateX(50%);
    }

    li:first-child {
      top: 0;
      left: 0;
    }

    li:nth-child(2) {
      top: 31.3rem;
      right: 0;
      margin: 0;

      &::after {
        left: unset;
        right: calc(100% + 12rem);
        transform: translateX(50%);
      }
    }

    li:last-child {
      top: 62.4rem;
      left: 0;
    }
  }
`;

export const RecruitmentProfessionalList = styled.ul`
  position: relative;
  max-width: 83rem;
  margin: 0 auto;

  @media (min-width: 1024px) {
    height: 152rem;

    &::before {
      content: '';
      display: block;
      position: absolute;
      top: 15rem;
      height: 123rem;
      width: 0.1rem;
      background-color: ${({ theme }) => theme.colors.cream};
      z-index: -1;
      left: 50%;
      transform: translateX(50%);
    }
  }

  li:nth-child(2) {
    &:hover {
      svg path {
        stroke: ${({ theme }) => theme.colors.purple};
      }
    }
  }

  li:nth-child(even) {
    margin: 4.5rem auto;

    @media (min-width: 1024px) {
      margin: 0;

      &::after {
        left: unset;
        right: calc(100% + 12rem);
        transform: translateX(50%);
      }
    }
  }

  li:nth-child(3),
  li:nth-child(even) {
    height: 33.1rem;
  }

  li:nth-child(2),
  li:nth-child(3) {
    @media (min-width: 1440px) {
      padding: 2rem 1.7rem 2rem;
    }
  }

  li:nth-child(4) {
    padding: 2rem 1.7rem 3rem;

    &:hover {
      svg path {
        fill: none !important;
      }
    }

    @media (min-width: 1440px) {
      padding: 2rem 1.7rem 1.5rem;
    }
  }

  @media (min-width: 1440px) {
    li:nth-child(4) {
      height: 37.5rem;
    }
  }

  @media (min-width: 1024px) {
    li:first-child {
      top: 0;
      left: 0;
    }

    li:nth-child(2) {
      top: 29.3rem;
      right: 0;
    }

    li:nth-child(3) {
      top: 58.8rem;
      left: 0;
    }

    li:nth-child(4) {
      top: 90.2rem;
      right: 0;
    }

    li:last-child {
      top: 122.1rem;
      left: 0;
    }
  }
`;
