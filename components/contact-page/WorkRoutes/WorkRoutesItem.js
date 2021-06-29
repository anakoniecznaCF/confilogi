import { useInView } from 'react-intersection-observer';
//styles
import { Wrapper, Img, Title, TextsList, TextsListItem } from './WorkRoutesItem.style';

const image = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.5 } },
};

const WorkRoutesItem = ({ item }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const { img, title, texts } = item;

  return (
    <Wrapper>
      <Img src={img} alt={title} ref={ref} variants={image} animate={inView ? 'show' : 'hidden'} />
      <div>
        <Title>{title}</Title>
        <TextsList>
          {texts &&
            texts.map((text, index) => (
              <TextsListItem key={index + 'de8dosi0eiw0'}>{text}</TextsListItem>
            ))}
        </TextsList>
      </div>
    </Wrapper>
  );
};

export default WorkRoutesItem;
