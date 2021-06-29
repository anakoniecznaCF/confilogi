import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Link from 'next/link';
import MapComponent from '../../common/MapComponent';
//styles
import {
  Wrapper,
  StyledLink,
  Title,
  Intro,
  MediumText,
  OrangeText,
  ListWrapper,
  ListTitle,
  ListItem,
  AprrovalIntro,
  AprrovalText,
} from './OfferDetailedInfo.style';
//data
import coordinates from '../../../data/coordinates';

const mapContainer = {
  hidden: { opacity: 0, x: -25 },
  show: { opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.5 } },
};

const OfferDetailedInfo = ({ selectedOffer }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    delay: 500,
  });

  const { title, intro, workplace, location, duties } = selectedOffer;

  let map;

  if (location === 'Warszawa Ursus') {
    map = (
      <MapComponent
        lat={coordinates.ursus.lat}
        lng={coordinates.ursus.lng}
        zoom={coordinates.ursus.zoom}
      />
    );
  } else if (location === 'Warszawa Śródmieście') {
    map = (
      <MapComponent
        lat={coordinates.krakowskie.lat}
        lng={coordinates.krakowskie.lng}
        zoom={coordinates.krakowskie.zoom}
      />
    );
  } else {
    map = (
      <MapComponent
        lat={coordinates.ursus.lat}
        lng={coordinates.ursus.lng}
        zoom={coordinates.ursus.zoom}
      />
    );
  }

  return (
    <Wrapper>
      <Link href='/career'>
        <StyledLink>Wróć do ofert</StyledLink>
      </Link>
      <Title>{title}</Title>
      <Intro>{intro}</Intro>
      <MediumText>
        Forma współpracy: <OrangeText>{workplace} </OrangeText>
      </MediumText>
      <MediumText>Miejsce pracy: {location} </MediumText>
      <motion.div
        variants={mapContainer}
        animate={inView ? 'show' : 'hidden'}
        ref={ref}
        initial='hidden'
      >
        {map}
      </motion.div>
      <ListWrapper>
        <ListTitle>Czym będziesz się zajmował na co dzień?</ListTitle>
        <ul>
          {duties &&
            duties.map((duty, index) => (
              <ListItem key={index + 'iosiao989'}>
                <p>{duty}</p>
              </ListItem>
            ))}
        </ul>
      </ListWrapper>
      <ListWrapper>
        <ListTitle>Od idealnego kandydata oczekujemy przede wszystkim:</ListTitle>
        <ul>
          {duties &&
            duties.map((duty, index) => (
              <ListItem key={index + 'dskoe03ker'}>
                <p>{duty}</p>
              </ListItem>
            ))}
        </ul>
      </ListWrapper>
      <ListWrapper>
        <ListTitle>Co oferujemy?</ListTitle>
        <ul>
          {duties &&
            duties.map((duty, index) => (
              <ListItem key={index + 'jdisueroe'}>
                <p>{duty}</p>
              </ListItem>
            ))}
        </ul>
      </ListWrapper>

      <AprrovalIntro>
        Abyśmy mogli wziąć pod uwagę Twoją kandydaturę pamiętaj, aby w dokumentach aplikacyjnych
        zawrzeć zgodę na przetwarzanie danych osobowych:{' '}
      </AprrovalIntro>
      <AprrovalText>
        Oświadczam, że wyrażam zgodę na przetwarzanie moich danych osobowych udostępnionych w
        złożonych przeze mnie dokumentach (CV i List motywacyjny) dla potrzeb obecnego, jak i
        przyszłych procesów rekrutacji, prowadzonych przez CONFILOGI Sp. z o.o. zgodnie z
        postanowieniami ustawy z 29 sierpnia 1997r. o ochronie danych osobowych (t.j. Dz. U. z 2002
        r., nr. 101, poz. 926 ze zm.)
      </AprrovalText>
    </Wrapper>
  );
};

export default OfferDetailedInfo;
