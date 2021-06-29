import styled from 'styled-components';

export const ItemWrapper = styled.li`
max-width: 21rem;
margin: 0 auto;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

&::after {
  content: '';
  display: block;
  height: 0.15rem;
  width: 13.5rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0.15rem;
  margin: 4rem 0;

  @media (min-width: 1600px) {
    display: none;
  }
}

@media (min-width: 1600px) {
  max-height: 13.5rem;
  max-width: unset;
  padding: 0 4.5rem;
  margin: unset;
  border-left: 0.15rem solid ${({ theme }) => theme.colors.white};
}
`;

export const ItemNumber = styled.h2`
font-size: 4.2rem;
padding: 0.8rem 0;
`;

export const ItemText = styled.p`
font-size: 1.6rem;
text-align: center;
height: 4.2rem;
line-height: ${({ theme }) => theme.lineHeight.small};

@media (min-width: 1600px) {
  height: unset;
}
`;