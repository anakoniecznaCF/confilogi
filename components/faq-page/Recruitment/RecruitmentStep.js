import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
//styles
import { Wrapper, Title } from './RecruitmentStep.style';

const recruitmentStepContainerOdd = {
  hidden: { opacity: 0, x: 15 },
  show: { opacity: 1, x: 0, transition: { delay: 0.1, duration: 0.3 } },
};

const recruitmentStepContainerEven = {
  hidden: { opacity: 0, x: -15 },
  show: { opacity: 1, x: 0, transition: { delay: 0.1, duration: 0.3 } },
};

const RecruitmentStep = ({ step, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '100px',
    threshold: 0.85,
    delay: 1
  });

  const { img, imgHover, title, text } = step;

  const [icon, setIcon] = useState(img);

  return (
    <Wrapper
      ref={ref}
      variants={index % 2 === 0 ? recruitmentStepContainerEven : recruitmentStepContainerOdd}
      initial='hidden'
      animate={inView ? 'show' : 'hidden'}
      onMouseEnter={imgHover ? () => setIcon(imgHover) : null}
      onMouseLeave={imgHover ? () => setIcon(img) : null}
    >
      {icon}
      <div>
        <Title>{title}</Title>
        {text}
      </div>
    </Wrapper>
  );
};

export default RecruitmentStep;
