import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
//styles
import { Wrapper, ImgWrapper, Title, Text } from './BenefitsItem.style';

const benefitsImg = {
  hidden: {opacity: 0, y: 15},
  show: {opacity: 1, y: 0, transition: {delay: 0.5, duration: 0.5}}
}

const BenefitsItem = ({ benefit }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5
  });

  const { img, title, text } = benefit;

  return (
    <Wrapper ref={ref}>
      <ImgWrapper>
        <motion.img src={img} alt={title} variants={benefitsImg} animate={inView ? 'show' : 'hidden'}/>
      </ImgWrapper>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </Wrapper>
  );
};

export default BenefitsItem;
