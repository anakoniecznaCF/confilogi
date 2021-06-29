import styled from 'styled-components';

export const Wrapper = styled.li`
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  margin-bottom: 4rem;

  @media (min-width: 768px) {
    max-width: 30rem;
  }
`;

export const Title = styled.h3`
  font-size: 2rem;
  margin: 2.5rem 0 1.5rem;
  text-align: center;

  @media (min-width: 768px) {
    margin: 1.5rem 0 1rem;
  }
`;

export const Text = styled.p`
  text-align: center;
  font-size: 1.6rem;
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 6rem;
`