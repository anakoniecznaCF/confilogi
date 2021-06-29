import { AnimateSharedLayout, motion } from 'framer-motion';
import FAQItem from './FAQItem';
//styles
import {Wrapper, Title} from './FAQ.style';
//data
import questions from '../../../data/faq-content';

const FAQ = () => {
  return (
    <Wrapper>
      <Title>Chcesz wiedzieć więcej? Przejrzyj najczęściej zadawane pytania!</Title>
      <AnimateSharedLayout>
        <motion.ul>
          {questions &&
            questions.map((question) => (
              <FAQItem key={question.id} question={question.question} answer={question.answer} />
            ))}
        </motion.ul>
      </AnimateSharedLayout>
    </Wrapper>
  );
};

export default FAQ;
