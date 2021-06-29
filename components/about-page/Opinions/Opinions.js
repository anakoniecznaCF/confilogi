import OpinionsItem from './OpinionsItem';
//styles
import { BackgroundWrapper, Title, Wrapper, StyledSlider } from './Opinions.style';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
//data
import content from '../../../data/opinions-content';

const Opinions = () => {
  const settings = {
    centerMode: true,
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 2200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          initalSlide: 5,
        },
      },
      {
        breakpoint: 1919,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initalSlide: 4,
        },
      },
      {
        breakpoint: 1439,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initalSlide: 3,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initalSlide: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          initalSlide: 1,
        },
      },
    ],
  };

  return (
    <BackgroundWrapper id='opinions'>
      <Wrapper>
        <Title>Opinie</Title>
        <StyledSlider {...settings}>
          {content && content.map((item) => <OpinionsItem key={item.id} item={item} />)}
        </StyledSlider>
      </Wrapper>
    </BackgroundWrapper>
  );
};

export default Opinions;
