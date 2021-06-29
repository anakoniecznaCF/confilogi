import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
//styles
import { Wrapper, Title, Text } from './ValuesItems.style';

const valuesImg = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.5 } },
};

const ValueItem = ({ item }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { img, title, text } = item;

  return (
    <Wrapper ref={ref}>
      <motion.img variants={valuesImg} animate={inView ? 'show' : 'hidden'} src={img} alt={title} />
      <Title>{title}</Title>
      <Text>{text}</Text>
    </Wrapper>
  );
};

export default ValueItem;
