import styled from 'styled-components';

export const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.lightOrange};
  height: calc(100vh - 6.494rem);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 1.5rem;

  @media (min-width: 1024px) {
    height: calc(100vh - 7.082rem);
  }

  @media (min-width: 1440px) {
    height: calc(100vh - 9.994rem);
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.purple};
  font-size: 10rem;
  margin: 2rem 0;

  @media (min-width: 1024px) {
    font-size: 15rem;
  }
`;

export const SubTitle = styled.h2`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 2rem;
  line-height: ${({ theme }) => theme.lineHeight.regular};
  font-weight: 500;

  @media (min-width: 1024px) {
    font-size: 3rem;
    line-height: ${({ theme }) => theme.lineHeight.extraLarge};
  }
`;

export const BackBtn = styled.button`
  background-color: ${({ theme }) => theme.colors.lightPurple};
  padding: 2rem;
  width: 100%;
  max-width: 30rem;
  margin: 0 auto;
  border: none;
  border-radius: 3rem;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  text-transform: uppercase;
  font-size: 1.3rem;
  margin-top: 2rem;
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
  cursor: pointer;
  transition: all 0.3s ease;

  @media (min-width: 1024px) {
    font-size: 1.7rem;
    max-width: 40rem;
  }

  :hover {
    background-color: ${({ theme }) => theme.colors.purple};
  }
`;
