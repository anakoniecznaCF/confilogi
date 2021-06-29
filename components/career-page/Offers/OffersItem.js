import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
//styles
import {
  ListItem,
  ShowMoreBtn,
  Title,
  Department,
  Location,
  Workplace,
  Status,
} from './OffersItem.style';

const offerContainer = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1,
      duration: 0.5,
    },
  },
};

const OffersItem = ({ offer }) => {
  const [ref, inView] = useInView({
    triggerOnce: true
  });

  const { title, slug, department, location, workplace, status } = offer;

  return (
    <ListItem
      status={status}
      variants={offerContainer}
      initial='hidden'
      animate={inView ? 'show' : 'hidden'}
      ref={ref}
    >
      <div>
        <Title>{title}</Title>
        <Department>{department}</Department>
      </div>
      <div>
        <Location>{location}</Location>
        <Workplace>{workplace}</Workplace>
      </div>
      <Status status={status}>{status}</Status>
      <Link href={`/career/${slug}`}>
        <ShowMoreBtn>Wyświetl</ShowMoreBtn>
      </Link>
    </ListItem>
  );
};

export default OffersItem;
