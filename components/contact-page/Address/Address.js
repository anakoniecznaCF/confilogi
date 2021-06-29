import { useInView } from 'react-intersection-observer';
import MapComponent from '../../common/MapComponent';
//styles
import { Wrapper, ContentWrapper, Content, Title, Bold, Text, MapWrapper } from './Address.style';
//data
import coordinates from '../../../data/coordinates';

const mapContainer = {
  hidden: { opacity: 0, x: 15 },
  show: { opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.5 } },
};

const Address = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    delay: 500,
  });

  return (
    <Wrapper>
      <ContentWrapper>
        <Content>
          <Title>
            <Bold>Adres głównej siedziby firmy:</Bold>
          </Title>
          <Text>
            Confilogi sp. z o.o. <br />
            ul. Siłaczki 3/9 <br />
            02-495 Warszawa Ursus
          </Text>
        </Content>
      </ContentWrapper>
      <MapWrapper
        variants={mapContainer}
        animate={inView ? 'show' : 'hidden'}
        ref={ref}
        initial='hidden'
      >
        <MapComponent
          lat={coordinates.ursus.lat}
          lng={coordinates.ursus.lng}
          zoom={coordinates.ursus.zoom}
        />
      </MapWrapper>
    </Wrapper>
  );
};

export default Address;
