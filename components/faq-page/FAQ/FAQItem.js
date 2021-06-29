import { useState } from 'react';
//styles
import { Wrapper, QuestionWrapper, Question, Answer, Arrow } from './FAQItem.style';

const FAQItem = ({ question, answer }) => {
  const [toggleAnswer, setToggleAnswer] = useState(false);

  return (
    <Wrapper toggleAnswer={toggleAnswer} onClick={() => setToggleAnswer(!toggleAnswer)} layout>
      <QuestionWrapper>
        <Question layout>{question}</Question>
        <Arrow
          toggleAnswer={toggleAnswer}
          src={
            toggleAnswer ? '/images/desktop/qa-arrow-down.svg' : '/images/desktop/qa-arrow-up.svg'
          }
          alt={toggleAnswer ? 'arrow-down' : 'arrow-up'}
          layout
        />
      </QuestionWrapper>
        {toggleAnswer && (
          <Answer layout initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {answer}
          </Answer>
        )}
    </Wrapper>
  );
};

export default FAQItem;
