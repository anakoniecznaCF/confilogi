import styled from 'styled-components';

export const BackgroundWrapper = styled.section`
background-color: ${({ theme }) => theme.colors.purple};
padding: 4rem 1.5rem 2rem;
color: ${({ theme }) => theme.colors.white};

@media (min-width: 1024px) {
    padding: 6rem 1.5rem;
}
`;

export const Title = styled.h2`
text-align: center;
line-height: ${({theme}) => theme.lineHeight.large};
margin-bottom: 2rem;

@media (min-width: 768px) {
  font-size: 3rem;
  line-height: 4.5rem;    
  margin-bottom: 5rem;
}

@media (min-width: 1024px) {
  margin-bottom: 11.5rem;
}
`;

export const WorkRoutesList = styled.ul`
font-size: 1.4rem;
line-height: ${({theme}) => theme.lineHeight.small};
width: fit-content;
margin: 0 auto;

@media (min-width: 1024px) {
  display: flex;

  > li:nth-child(2) {
    margin: 0 4rem;
  }
}
`;