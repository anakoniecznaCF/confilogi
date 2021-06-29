import styled from 'styled-components';

export const Wrapper = styled.section`
padding: 4rem 1.5rem 1rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

@media (min-width: 768px) {
  padding: 4rem 0 6rem;
}
`;

export const Title = styled.h2`
margin-bottom: 5rem;
`;

export const OffersSelect = styled.select`
position: relative;
width: 100%;
padding: 1.3rem 3.5rem;
background-color: #f4f4f4;
border: 0.1rem solid ${({ theme }) => theme.colors.grey};
border-radius: 1rem;
font-size: 1.6rem;
font-weight: 700;
max-width: 40rem;
-webkit-appearance: none;
-moz-appearance: none;
text-indent: 1px;
text-overflow: '';
background-image: url('/images/desktop/select-arrow-black.svg');
background-size: 1.7rem 0.9rem;
background-repeat: no-repeat;
background-position: 87% 50%;
outline: none;
margin-bottom: 4rem;

@media (min-width: 1024px) {
  display: none;
}
`;

export const OffersSelectOpt = styled.option`
width: 100%;
background-color: #f4f4f4;
font-size: 1.6rem;
`;

export const Radio = styled.div`
display: none;

@media (min-width: 1024px) {
  width: 100%;
  display: block;
  background-color: #f4f4f4;
  padding: 3.2rem 0;
  font-size: 2rem;
  margin-bottom: 6rem;
}

input:nth-child(2) {
  padding: 0 10rem;
}
`;

export const OffersList = styled.ul`
width: 100%;

@media (min-width: 768px) {
  padding: 0 1.5rem;
}
`;

export const RadioControl = styled.div`
display: inline-block;
border: 0.1rem solid #c6c6c6;
border-radius: 0.5rem;
width: 2.7rem;
height: 2.7rem;
background-color: ${({ theme }) => theme.colors.white};
cursor: pointer;
`;

export const RadioInput = styled.input`
opacity: 0;
width: 0;
height: 0;

&:checked + div {
  background-image: url('/images/desktop/checked.svg');
  background-size: 1.7rem;
  background-position: center;
  background-repeat: no-repeat;
}
`;

export const RadioLabel = styled.span`
font-weight: 700;
`;

export const RadioWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin: 0 auto;

label:first-child {
  margin-left: 0;
}
`;

export const RadioGroup = styled.label`
display: grid;
grid-template-columns: auto min-content;
grid-gap: 3rem;
margin-left: 10rem;
`;