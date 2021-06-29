import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import styled from 'styled-components';

export const StyledMapWrapper = styled.div`
  width: 100%;
  height: 16rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgb(0 0 0 / 16%) 0px 3px 6px;

  @media (min-width: 768px) {
    height: 30rem;
  }

  @media (min-width: 1024px) {
    height: 41rem;
  }
`;

function MapComponent({ lat, lng, zoom }) {
  const containerStyle = {
    position: 'relative',
    width: '100%',
    height: '100%',
  };

  return (
    <StyledMapWrapper>
      <Map
        zoom={zoom}
        containerStyle={containerStyle}
        google={google}
        initialCenter={{
          lat: lat,
          lng: lng,
        }}
      >
        <Marker icon={{ url: '/images/desktop/marker.svg' }} />
      </Map>
    </StyledMapWrapper>
  );
}

export default GoogleApiWrapper({
  apiKey: `${process.env.GOOGLEMAPS_API_KEY}`,
  language: 'PL',
})(MapComponent);
