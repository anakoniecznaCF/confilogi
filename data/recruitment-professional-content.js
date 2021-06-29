//styles
import { Text, Bold } from '../components/faq-page/Recruitment/RecruitmentStep.style';
//images
import Application from '../public/images/desktop/aplikacja.svg';
import Conversation from '../public/images/desktop/rozmowa.svg';
import Decision from '../public/images/desktop/decyzja.svg';
import Conversation2 from '../public/images/desktop/rozmowa-2.svg';
import Task from '../public/images/desktop/zadanie-rekrutacyjne.svg';
import TaskPurple from '../public/images/desktop/Group 39.svg';

const professionalSteps = [
  {
    id: 'r4',
    img: <Application />,
    title: 'Aplikacja',
    text: (
      <Text>
        Prześlij nam swoje CV. Możesz też napisać kilka słów o sobie.
      </Text>
    ),
  },
  {
    id: 'r5',
    img: <Conversation />,
    title: 'I etap rozmowy',
    text: (
      <Text>
        Zaprosimy Cię na rozmowę z działem HR, aby poznać Twoje doświadczenie i wzajemne
        oczekiwania.
      </Text>
    ),
  },
  {
    id: 'r6',
    img: <Conversation2 />,
    title: 'II etap rozmowy',
    text: (
      <Text>
        Kolejny etap to kontakt z hiring managerem, czyli doskonała okazja na pierwszą interakcję z
        przyszłym mentorem.
      </Text>
    ),
  },
  {
    id: 'r7',
    img: <Task />,
    imgHover: <TaskPurple />,
    title: 'Zadanie rekrutacyjne',
    text: (
      <Text>
        Jeżeli dotarłeś aż tu, to wiedz, że jesteś w gronie 10% najlepszych kandydatów. Czas na
        zadanie praktyczne. Jesteś w gronie finalistów.
      </Text>
    ),
  },
  {
    id: 'r8',
    img: <Decision />,
    title: 'Decyzja',
    text: (
      <Text>
        Witamy na pokładzie! Teraz jesteś częścią <Bold>#confilogiteam!</Bold>
      </Text>
    ),
  },
];

export default professionalSteps;
