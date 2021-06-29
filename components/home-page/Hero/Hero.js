import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
//styles
import {
  StyledWrapper,
  ContentWrapper,
  MainPhoto,
  TitleWrapper,
  MainTitle,
  MainSubtitle,
  Yellow,
  OpinionLink,
} from './Hero.style';

const heroContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 0.2,
      staggerChildren: 0.4,
      when: 'beforeChildren',
    },
  },
};

const heroItems = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Hero = () => {
  return (
    <StyledWrapper>
      <ContentWrapper>
        <MainPhoto />
        <TitleWrapper variants={heroContainer} initial='hidden' animate='show'>
          <MainTitle variants={heroItems}>Confilogi</MainTitle>
          <MainSubtitle variants={heroItems}>
            We <Yellow>grow</Yellow> together
          </MainSubtitle>
        </TitleWrapper>
        <OpinionLink href='/about#opinions'>Opinie</OpinionLink>
      </ContentWrapper>
    </StyledWrapper>
  );
};

export default Hero;
