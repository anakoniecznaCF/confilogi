import styled from 'styled-components';
import OfferDetailedInfo from './OfferDetailedInfo/OfferDetailedInfo';
import OfferDetailForm from './OfferDetailForm/OfferDetailForm';
import Container from '../common/Container';

const StyledPageWrapper = styled(Container)`
  @media (min-width: 1024px) {
    display: flex;
    padding: 0;
  }
`;

const PageWrapper = ({ selectedOffer }) => {
  return (
    <StyledPageWrapper>
      <OfferDetailedInfo selectedOffer={selectedOffer} />
      <OfferDetailForm offer_name={selectedOffer.title} status={selectedOffer.status} />
    </StyledPageWrapper>
  );
};

export default PageWrapper;
